package in.guwahati.fieldtracker;

import android.Manifest;
import android.app.Activity;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.provider.MediaStore;
import android.view.View;
import android.view.WindowManager;
import android.speech.tts.TextToSpeech;
import android.webkit.JavascriptInterface;
import android.widget.Toast;
import java.util.Locale;
import android.location.Location;
import android.location.LocationManager;
import android.location.LocationListener;
import android.webkit.GeolocationPermissions;
import android.webkit.CookieManager;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.ProgressBar;
import android.widget.FrameLayout;

public class MainActivity extends Activity {
  static final String APP_URL = "https://script.google.com/macros/s/AKfycbyFp_mIJqqv-vya_y_DFmW7nwzZc83PQY5PnwOdzMPYjFK3EYg-p-ZHz0M7vSgMlV3_/exec";
  static final int PICK = 11, PERM = 12, SNAP = 13;
  WebView web; ProgressBar bar; ValueCallback<Uri[]> pending; Uri captureUri; TextToSpeech tts; boolean ttsReady; volatile String lastLoc = "";

  @Override protected void onCreate(Bundle b) {
    super.onCreate(b);
    // No screenshots or screen recording of the app.
    getWindow().setFlags(WindowManager.LayoutParams.FLAG_SECURE, WindowManager.LayoutParams.FLAG_SECURE);
    FrameLayout root = new FrameLayout(this);
    web = new WebView(this);
    bar = new ProgressBar(this, null, android.R.attr.progressBarStyleHorizontal);
    bar.setMax(100);
    root.addView(web, new FrameLayout.LayoutParams(-1, -1));
    root.addView(bar, new FrameLayout.LayoutParams(-1, 8));
    setContentView(root);

    WebSettings s = web.getSettings();
    s.setJavaScriptEnabled(true);
    s.setDomStorageEnabled(true);
    s.setDatabaseEnabled(true);
    s.setAllowFileAccess(false);
    s.setMediaPlaybackRequiresUserGesture(true);
    s.setSupportMultipleWindows(false);
    s.setJavaScriptCanOpenWindowsAutomatically(false);
    s.setUserAgentString(s.getUserAgentString() + " FieldTrackerApp/2");
    web.setLongClickable(false);
    web.setOnLongClickListener(v -> true);
    web.setHapticFeedbackEnabled(false);
    // Downloads are blocked.
    web.setDownloadListener((url, ua, cd, mime, len) -> Toast.makeText(this, "Downloads are not allowed in this app", Toast.LENGTH_SHORT).show());
    tts = new TextToSpeech(this, st -> ttsReady = st == TextToSpeech.SUCCESS);
    web.addJavascriptInterface(new Tts(), "AndroidTTS");
    web.addJavascriptInterface(new AppBridge(), "AndroidApp");
    CookieManager cm = CookieManager.getInstance();
    cm.setAcceptCookie(true);
    cm.setAcceptThirdPartyCookies(web, true);

    web.setWebViewClient(new WebViewClient() {
      @Override public boolean shouldOverrideUrlLoading(WebView v, WebResourceRequest r) {
        String h = r.getUrl().getHost();
        if (h != null && (h.endsWith("google.com") || h.endsWith("googleusercontent.com"))) return false;
        try { startActivity(new Intent(Intent.ACTION_VIEW, r.getUrl())); } catch (Exception e) {}
        return true;
      }
    });
    web.setWebChromeClient(new WebChromeClient() {
      @Override public void onProgressChanged(WebView v, int p) { bar.setProgress(p); bar.setVisibility(p < 100 ? View.VISIBLE : View.GONE); }
      @Override public void onGeolocationPermissionsShowPrompt(String origin, GeolocationPermissions.Callback cb) { cb.invoke(origin, true, false); }
      @Override public boolean onShowFileChooser(WebView v, ValueCallback<Uri[]> cb, FileChooserParams fp) {
        if (pending != null) pending.onReceiveValue(null);
        pending = cb;
        // Selfie check-in: open the front camera directly.
        if (fp.isCaptureEnabled()) {
          try {
            android.content.ContentValues cv = new android.content.ContentValues();
            cv.put(MediaStore.Images.Media.DISPLAY_NAME, "checkin_" + System.currentTimeMillis() + ".jpg");
            cv.put(MediaStore.Images.Media.MIME_TYPE, "image/jpeg");
            captureUri = getContentResolver().insert(MediaStore.Images.Media.EXTERNAL_CONTENT_URI, cv);
            Intent cam = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
            cam.putExtra(MediaStore.EXTRA_OUTPUT, captureUri);
            cam.putExtra("android.intent.extras.CAMERA_FACING", 1);
            cam.putExtra("android.intent.extras.LENS_FACING_FRONT", 1);
            cam.putExtra("android.intent.extra.USE_FRONT_CAMERA", true);
            cam.addFlags(Intent.FLAG_GRANT_WRITE_URI_PERMISSION);
            startActivityForResult(cam, SNAP);
            return true;
          } catch (Exception e) { captureUri = null; }
        }
        Intent i = new Intent(Intent.ACTION_GET_CONTENT);
        i.addCategory(Intent.CATEGORY_OPENABLE);
        i.setType("image/*");
        i.putExtra(Intent.EXTRA_ALLOW_MULTIPLE, fp.getMode() == FileChooserParams.MODE_OPEN_MULTIPLE);
        Intent chooser = Intent.createChooser(i, "Take a photo or choose");
        // Also offer the camera inside the chooser, so photo-upload screens can snap directly too.
        try {
          android.content.ContentValues cv = new android.content.ContentValues();
          cv.put(MediaStore.Images.Media.DISPLAY_NAME, "photo_" + System.currentTimeMillis() + ".jpg");
          cv.put(MediaStore.Images.Media.MIME_TYPE, "image/jpeg");
          captureUri = getContentResolver().insert(MediaStore.Images.Media.EXTERNAL_CONTENT_URI, cv);
          Intent cam = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
          cam.putExtra(MediaStore.EXTRA_OUTPUT, captureUri);
          cam.addFlags(Intent.FLAG_GRANT_WRITE_URI_PERMISSION);
          chooser.putExtra(Intent.EXTRA_INITIAL_INTENTS, new Intent[]{cam});
        } catch (Exception e) { captureUri = null; }
        try { startActivityForResult(chooser, PICK); }
        catch (Exception e) { pending = null; captureUri = null; return false; }
        return true;
      }
    });

    askPermissions();
    Notify.schedule(this);
    if (b != null) web.restoreState(b); else web.loadUrl(APP_URL);
  }

  void askPermissions() {
    java.util.List<String> need = new java.util.ArrayList<>();
    if (Build.VERSION.SDK_INT >= 29) {
      String media = Build.VERSION.SDK_INT >= 33 ? Manifest.permission.READ_MEDIA_IMAGES : Manifest.permission.READ_EXTERNAL_STORAGE;
      if (checkSelfPermission(media) != PackageManager.PERMISSION_GRANTED) need.add(media);
      if (checkSelfPermission(Manifest.permission.ACCESS_MEDIA_LOCATION) != PackageManager.PERMISSION_GRANTED) need.add(Manifest.permission.ACCESS_MEDIA_LOCATION);
    }
    if (Build.VERSION.SDK_INT >= 23 && checkSelfPermission(Manifest.permission.ACCESS_FINE_LOCATION) != PackageManager.PERMISSION_GRANTED) { need.add(Manifest.permission.ACCESS_FINE_LOCATION); need.add(Manifest.permission.ACCESS_COARSE_LOCATION); }
    if (Build.VERSION.SDK_INT >= 23 && checkSelfPermission(Manifest.permission.CAMERA) != PackageManager.PERMISSION_GRANTED) need.add(Manifest.permission.CAMERA);
    if (Build.VERSION.SDK_INT >= 33 && checkSelfPermission(Manifest.permission.POST_NOTIFICATIONS) != PackageManager.PERMISSION_GRANTED) need.add(Manifest.permission.POST_NOTIFICATIONS);
    if (!need.isEmpty() && Build.VERSION.SDK_INT >= 23) requestPermissions(need.toArray(new String[0]), PERM);
  }

  // Keep the photo's GPS location: ask Android for the original file, not the location-stripped copy.
  Uri original(Uri u) {
    if (Build.VERSION.SDK_INT < 29 || checkSelfPermission(Manifest.permission.ACCESS_MEDIA_LOCATION) != PackageManager.PERMISSION_GRANTED) return u;
    try {
      Uri m = u;
      if (!"media".equals(u.getAuthority())) { m = MediaStore.getMediaUri(this, u); if (m == null) return u; }
      return MediaStore.setRequireOriginal(m);
    } catch (Exception e) { return u; }
  }

  @Override protected void onActivityResult(int req, int res, Intent data) {
    if (req == SNAP && pending != null) {
      pending.onReceiveValue(res == RESULT_OK && captureUri != null ? new Uri[]{captureUri} : null);
      if (res != RESULT_OK && captureUri != null) { try { getContentResolver().delete(captureUri, null, null); } catch (Exception e) {} }
      pending = null; captureUri = null; return;
    }
    if (req != PICK || pending == null) { super.onActivityResult(req, res, data); return; }
    Uri[] out = null;
    if (res == RESULT_OK) {
      if (data != null && data.getClipData() != null) {
        int n = data.getClipData().getItemCount(); out = new Uri[n];
        for (int k = 0; k < n; k++) out[k] = original(data.getClipData().getItemAt(k).getUri());
      } else if (data != null && data.getData() != null) out = new Uri[]{original(data.getData())};
      else if (captureUri != null) out = new Uri[]{captureUri}; // camera was chosen inside the chooser
    }
    if ((out == null || res != RESULT_OK) && captureUri != null) { try { getContentResolver().delete(captureUri, null, null); } catch (Exception e) {} }
    pending.onReceiveValue(out); pending = null; captureUri = null;
  }

  // Read-aloud for the coach lessons, in English, Hindi, Bengali and Assamese.
  class Tts {
    @JavascriptInterface public void speak(String text, String lang) {
      if (!ttsReady) return;
      String[] tries = "as-IN".equals(lang) ? new String[]{"as-IN", "bn-IN", "hi-IN"} : new String[]{lang, "en-IN"};
      for (String t : tries) { int r = tts.setLanguage(Locale.forLanguageTag(t)); if (r >= TextToSpeech.LANG_AVAILABLE) break; }
      tts.setSpeechRate(0.95f);
      tts.speak(text, TextToSpeech.QUEUE_FLUSH, null, "ft");
    }
    @JavascriptInterface public boolean isSpeaking() { return tts != null && tts.isSpeaking(); }
    @JavascriptInterface public void stop() { if (tts != null) tts.stop(); }
    @JavascriptInterface public boolean ready() { return ttsReady; }
  }
  // Lets the page hand over the sign-in so phone notifications show this CSO's own numbers.
  class AppBridge {
    @JavascriptInterface public void setAuth(String json) { getSharedPreferences("ft", MODE_PRIVATE).edit().putString("auth", json).apply(); Notify.schedule(MainActivity.this); }
    @JavascriptInterface public String version() { return "6"; }
    // Join buttons: phone call, WhatsApp, meeting links open in their own apps.
    @JavascriptInterface public void open(String url) {
      runOnUiThread(() -> { try { startActivity(new Intent(Intent.ACTION_VIEW, Uri.parse(url)).addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)); } catch (Exception e) { Toast.makeText(MainActivity.this, "No app to open this", Toast.LENGTH_SHORT).show(); } });
    }
    // Meeting reminders: 15 minutes before and at the start time.
    @JavascriptInterface public void meeting(String id, double at, String title, String body) { Notify.meeting(MainActivity.this, id, (long) at, title, body); }
    // One-tap check-in: the page asks for the location, then reads it.
    @JavascriptInterface public void requestLocation() {
      lastLoc = "";
      runOnUiThread(() -> {
        try {
          if (checkSelfPermission(Manifest.permission.ACCESS_FINE_LOCATION) != PackageManager.PERMISSION_GRANTED) { lastLoc = "null"; return; }
          LocationManager lm = (LocationManager) getSystemService(LOCATION_SERVICE);
          Location best = null;
          for (String pr : lm.getProviders(true)) { Location l = lm.getLastKnownLocation(pr); if (l != null && (best == null || l.getTime() > best.getTime())) best = l; }
          if (best != null && System.currentTimeMillis() - best.getTime() < 5 * 60 * 1000) { lastLoc = toJson(best); return; }
          String pr = lm.isProviderEnabled(LocationManager.GPS_PROVIDER) ? LocationManager.GPS_PROVIDER : LocationManager.NETWORK_PROVIDER;
          final Location fb = best;
          lm.requestSingleUpdate(pr, new LocationListener() {
            @Override public void onLocationChanged(Location l) { lastLoc = toJson(l); }
            @Override public void onStatusChanged(String a, int b, Bundle c) {}
            @Override public void onProviderEnabled(String a) {}
            @Override public void onProviderDisabled(String a) { lastLoc = fb != null ? toJson(fb) : "null"; }
          }, getMainLooper());
          web.postDelayed(() -> { if (lastLoc.isEmpty()) lastLoc = fb != null ? toJson(fb) : "null"; }, 11000);
        } catch (Exception e) { lastLoc = "null"; }
      });
    }
    @JavascriptInterface public String getLocation() { return lastLoc; }
    // Share only the day-plan text (to WhatsApp etc.).
    // Share straight into WhatsApp (the CSO picks the "Guwahati CSM Team" group). Falls back to WhatsApp Business, then the share sheet.
    @JavascriptInterface public void shareWhatsApp(String text) {
      runOnUiThread(() -> {
        for (String pkg : new String[]{"com.whatsapp", "com.whatsapp.w4b"}) {
          try { Intent i = new Intent(Intent.ACTION_SEND); i.setType("text/plain"); i.putExtra(Intent.EXTRA_TEXT, text); i.setPackage(pkg); startActivity(i); return; } catch (Exception e) {}
        }
        try { Intent i = new Intent(Intent.ACTION_SEND); i.setType("text/plain"); i.putExtra(Intent.EXTRA_TEXT, text); startActivity(Intent.createChooser(i, "Share to Guwahati CSM Team")); } catch (Exception e) {}
      });
    }
    @JavascriptInterface public void share(String text) {
      runOnUiThread(() -> {
        Intent i = new Intent(Intent.ACTION_SEND); i.setType("text/plain"); i.putExtra(Intent.EXTRA_TEXT, text);
        try { startActivity(Intent.createChooser(i, "Share day plan")); } catch (Exception e) {}
      });
    }
  }

  static String toJson(Location l) { return "{\"lat\":" + l.getLatitude() + ",\"lng\":" + l.getLongitude() + ",\"acc\":" + Math.round(l.getAccuracy()) + "}"; }

  @Override protected void onDestroy() { if (tts != null) tts.shutdown(); super.onDestroy(); }

  @Override protected void onSaveInstanceState(Bundle o) { super.onSaveInstanceState(o); web.saveState(o); }
  @Override public void onBackPressed() { if (web.canGoBack()) web.goBack(); else super.onBackPressed(); }
}
