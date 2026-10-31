package com.ares.schedule

import android.annotation.SuppressLint
import android.graphics.Color
import android.os.Bundle
import android.view.ViewGroup
import android.webkit.ConsoleMessage
import android.webkit.WebChromeClient
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {

    private var webView: WebView? = null

    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        try {
            window.statusBarColor = Color.BLACK
            window.navigationBarColor = Color.BLACK
        } catch (_: Throwable) {}

        try {
            val wv = WebView(this)
            webView = wv

            wv.layoutParams = ViewGroup.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT,
                ViewGroup.LayoutParams.MATCH_PARENT
            )
            wv.setBackgroundColor(Color.BLACK)
            wv.isVerticalScrollBarEnabled = false
            wv.isHorizontalScrollBarEnabled = false

            val settings: WebSettings = wv.settings
            settings.javaScriptEnabled = true
            settings.domStorageEnabled = true
            settings.allowFileAccess = true
            settings.allowContentAccess = true
            settings.databaseEnabled = true
            settings.useWideViewPort = true
            settings.loadWithOverviewMode = true
            settings.displayZoomControls = false
            settings.builtInZoomControls = false
            settings.cacheMode = WebSettings.LOAD_DEFAULT

            wv.webViewClient = object : WebViewClient() {
                override fun shouldOverrideUrlLoading(view: WebView?, url: String?): Boolean {
                    return false
                }
            }

            wv.webChromeClient = object : WebChromeClient() {
                override fun onConsoleMessage(consoleMessage: ConsoleMessage?): Boolean {
                    return true
                }
            }

            setContentView(wv)
            wv.loadUrl("file:///android_asset/index.html")

        } catch (e: Throwable) {
            val tv = TextView(this).apply {
                setBackgroundColor(Color.BLACK)
                setTextColor(Color.RED)
                textSize = 16f
                setPadding(40, 80, 40, 40)
                text = "Failed to initialize WebView:\n${e.message}\n\nPlease ensure Android System WebView is updated."
            }
            setContentView(tv)
        }
    }

    @Deprecated("Deprecated in Java")
    override fun onBackPressed() {
        if (webView?.canGoBack() == true) {
            webView?.goBack()
        } else {
            @Suppress("DEPRECATION")
            super.onBackPressed()
        }
    }
}
