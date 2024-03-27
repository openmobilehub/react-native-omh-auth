package com.openmobilehub.reactnative.auth.plugin.google

import android.app.Activity
import android.content.Intent
import com.facebook.react.bridge.BaseActivityEventListener
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.openmobilehub.android.auth.core.OmhAuthClient
import com.openmobilehub.android.auth.core.OmhAuthProvider

class OmhGoogleModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {
    private var googleOmhAuthClient: OmhAuthClient

    private var activityPromise: Promise? = null

    private val activityEventListener =
        object : BaseActivityEventListener() {
            override fun onActivityResult(
                activity: Activity?,
                requestCode: Int,
                resultCode: Int,
                intent: Intent?
            ) {
                activityPromise?.let { promise ->
                    when (resultCode) {
                        Activity.RESULT_CANCELED -> {
                            val error = intent?.getStringExtra("errorMessage")

                            promise.reject(E_LOGIN_CANCELED, error)
                        }

                        Activity.RESULT_OK ->
                            promise.resolve(null)
                    }

                    activityPromise = null
                }
            }
        }

    init {
        val omhAuthProvider = OmhAuthProvider.Builder()
            .addNonGmsPath("com.openmobilehub.android.auth.plugin.google.nongms.presentation.OmhAuthFactoryImpl")
            .addGmsPath("com.openmobilehub.android.auth.plugin.google.gms.OmhAuthFactoryImpl")
            .build()

        googleOmhAuthClient = omhAuthProvider.provideAuthClient(
            scopes = listOf("openid", "email", "profile"),
            clientId = BuildConfig.GOOGLE_CLIENT_ID,
            context = reactApplicationContext
        )

        reactContext.addActivityEventListener(activityEventListener)
    }

    override fun getName(): String {
        return NAME
    }

    @ReactMethod
    fun login(promise: Promise) {
        val activity = currentActivity

        if (activity == null) {
            promise.reject(E_ACTIVITY_DOES_NOT_EXIST, "Activity doesn't exist")
            return
        }

        activityPromise = promise

        val loginIntent = googleOmhAuthClient.getLoginIntent()

        activity.startActivityForResult(loginIntent, LOGIN_REQUEST)
    }

    companion object {
        const val NAME = "OmhGoogle"
        const val LOGIN_REQUEST = 1
        const val E_ACTIVITY_DOES_NOT_EXIST = "E_ACTIVITY_DOES_NOT_EXIST"
        const val E_LOGIN_CANCELED = "E_LOGIN_CANCELLED"
    }
}
