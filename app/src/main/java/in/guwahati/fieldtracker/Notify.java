package in.guwahati.fieldtracker;

import android.app.AlarmManager;
import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.os.Build;
import org.json.JSONObject;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.util.Calendar;

/** Free phone reminders: day plan, POB checks, evening entry and review. No paid service needed. */
public class Notify extends BroadcastReceiver {
  // hour, minute, slot
  static final int[][] TIMES = {{8, 0, 0}, {11, 30, 1}, {14, 30, 1}, {17, 0, 1}, {19, 30, 2}, {20, 45, 3}};
  static final String[] SLOTS = {"plan", "mid", "eve", "review"};
  static final String CH = "ft_daily";

  static void schedule(Context c) {
    Calendar now = Calendar.getInstance(), best = null; int slot = 0;
    for (int d = 0; d < 2 && best == null; d++)
      for (int[] t : TIMES) {
        Calendar x = Calendar.getInstance(); x.add(Calendar.DAY_OF_YEAR, d);
        x.set(Calendar.HOUR_OF_DAY, t[0]); x.set(Calendar.MINUTE, t[1]); x.set(Calendar.SECOND, 0);
        if (x.after(now)) { best = x; slot = t[2]; break; }
      }
    Intent i = new Intent(c, Notify.class).putExtra("slot", SLOTS[slot]);
    PendingIntent pi = PendingIntent.getBroadcast(c, 1, i, PendingIntent.FLAG_UPDATE_CURRENT | PendingIntent.FLAG_IMMUTABLE);
    AlarmManager am = (AlarmManager) c.getSystemService(Context.ALARM_SERVICE);
    if (Build.VERSION.SDK_INT >= 23) am.setAndAllowWhileIdle(AlarmManager.RTC_WAKEUP, best.getTimeInMillis(), pi);
    else am.set(AlarmManager.RTC_WAKEUP, best.getTimeInMillis(), pi);
  }

  @Override public void onReceive(Context c, Intent in) {
    final Context app = c.getApplicationContext();
    if (Intent.ACTION_BOOT_COMPLETED.equals(in.getAction()) || Intent.ACTION_MY_PACKAGE_REPLACED.equals(in.getAction())) { schedule(app); return; }
    final String slot = in.getStringExtra("slot");
    final PendingResult pr = goAsync();
    new Thread(() -> {
      try {
        String title = "Field Tracker", body = slot == null ? "Open the app" : defaultText(slot);
        String auth = app.getSharedPreferences("ft", Context.MODE_PRIVATE).getString("auth", null);
        if (auth != null) {
          JSONObject a = new JSONObject(auth);
          String u = MainActivity.APP_URL + "?n=1&s=" + slot + "&e=" + URLEncoder.encode(a.optString("email"), "UTF-8") + "&d=" + URLEncoder.encode(a.optString("dev"), "UTF-8");
          HttpURLConnection h = (HttpURLConnection) new URL(u).openConnection();
          h.setConnectTimeout(15000); h.setReadTimeout(20000); h.setInstanceFollowRedirects(true);
          BufferedReader r = new BufferedReader(new InputStreamReader(h.getInputStream(), "UTF-8"));
          StringBuilder sb = new StringBuilder(); String l; while ((l = r.readLine()) != null) sb.append(l);
          JSONObject j = new JSONObject(sb.toString());
          if (j.optBoolean("skip")) { done(app, pr); return; }
          title = j.optString("title", title); body = j.optString("body", body);
        }
        show(app, title, body);
      } catch (Exception e) {
        show(app, "Field Tracker", defaultText(slot));
      }
      done(app, pr);
    }).start();
  }

  static void done(Context c, PendingResult pr) { schedule(c); pr.finish(); }

  static String defaultText(String slot) {
    if ("plan".equals(slot)) return "Good morning! Open your day plan and POB target.";
    if ("eve".equals(slot)) return "Enter today's POB, inputs and reasons before 8 PM.";
    if ("review".equals(slot)) return "Your day review is ready in Messages.";
    return "Check your pending tasks and today's POB.";
  }

  static void show(Context c, String title, String body) {
    NotificationManager nm = (NotificationManager) c.getSystemService(Context.NOTIFICATION_SERVICE);
    if (Build.VERSION.SDK_INT >= 26) nm.createNotificationChannel(new NotificationChannel(CH, "Daily reminders", NotificationManager.IMPORTANCE_DEFAULT));
    PendingIntent open = PendingIntent.getActivity(c, 0, new Intent(c, MainActivity.class).addFlags(Intent.FLAG_ACTIVITY_NEW_TASK), PendingIntent.FLAG_IMMUTABLE);
    Notification.Builder b = Build.VERSION.SDK_INT >= 26 ? new Notification.Builder(c, CH) : new Notification.Builder(c);
    b.setSmallIcon(R.mipmap.ic_launcher).setContentTitle(title).setContentText(body)
      .setStyle(new Notification.BigTextStyle().bigText(body)).setAutoCancel(true).setContentIntent(open);
    nm.notify((int) (System.currentTimeMillis() % 100000), b.build());
  }
}
