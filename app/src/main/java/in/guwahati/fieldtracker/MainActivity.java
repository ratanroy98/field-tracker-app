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
  static final int PICK = 11, PERM = 12;
  WebView web; ProgressBar bar; ValueCallback<Uri[]> pending;

  @Override protected void onCreate(Bundle b) {
    super.onCreate(b);
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
      @Override public boolean onShowFileChooser(WebView v, ValueCallback<Uri[]> cb, FileChooserParams fp) {
        if (pending != null) pending.onReceiveValue(null);
        pending = cb;
        Intent i = new Intent(Intent.ACTION_GET_CONTENT);
        i.addCategory(Intent.CATEGORY_OPENABLE);
        i.setType("image/*");
        i.putExtra(Intent.EXTRA_ALLOW_MULTIPLE, fp.getMode() == FileChooserParams.MODE_OPEN_MULTIPLE);
        try { startActivityForResult(Intent.createChooser(i, "Choose photo"), PICK); }
        catch (Exception e) { pending = null; return false; }
        return true;
      }
    });

    askPermissions();
    if (b != null) web.restoreState(b); else web.loadUrl(APP_URL);
  }

  void askPermissions() {
    if (Build.VERSION.SDK_INT >= 29) {
      String media = Build.VERSION.SDK_INT >= 33 ? Manifest.permission.READ_MEDIA_IMAGES : Manifest.permission.READ_EXTERNAL_STORAGE;
      if (checkSelfPermission(Manifest.permission.ACCESS_MEDIA_LOCATION) != PackageManager.PERMISSION_GRANTED || checkSelfPermission(media) != PackageManager.PERMISSION_GRANTED)
        requestPermissions(new String[]{media, Manifest.permission.ACCESS_MEDIA_LOCATION}, PERM);
    }
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
    if (req != PICK || pending == null) { super.onActivityResult(req, res, data); return; }
    Uri[] out = null;
    if (res == RESULT_OK && data != null) {
      if (data.getClipData() != null) {
        int n = data.getClipData().getItemCount(); out = new Uri[n];
        for (int k = 0; k < n; k++) out[k] = original(data.getClipData().getItemAt(k).getUri());
      } else if (data.getData() != null) out = new Uri[]{original(data.getData())};
    }
    pending.onReceiveValue(out); pending = null;
  }

  @Override protected void onSaveInstanceState(Bundle o) { super.onSaveInstanceState(o); web.saveState(o); }
  @Override public void onBackPressed() { if (web.canGoBack()) web.goBack(); else super.onBackPressed(); }
}
