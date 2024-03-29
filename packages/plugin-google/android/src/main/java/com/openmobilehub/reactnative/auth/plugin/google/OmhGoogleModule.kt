package com.openmobilehub.reactnative.auth.plugin.google

import android.app.Activity
import android.content.Intent
import com.facebook.react.bridge.Arguments
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

    private var loginActivityPromise: Promise? = null

    private val activityEventListener =
        object : BaseActivityEventListener() {
            override fun onActivityResult(
                activity: Activity?,
                requestCode: Int,
                resultCode: Int,
                intent: Intent?
            ) {
                loginActivityPromise?.let { promise ->
                    when (resultCode) {
                        Activity.RESULT_CANCELED -> {
                            val error = intent?.getStringExtra("errorMessage")

                            promise.reject(E_SIGN_IN_CANCELED, error)
                        }

                        Activity.RESULT_OK ->
                            promise.resolve(null)
                    }

                    loginActivityPromise = null
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
    fun initialize(promise: Promise) {
        googleOmhAuthClient.initialize()
            .addOnSuccess {
                promise.resolve(null)
            }
            .addOnFailure {
                promise.reject(E_INITIALIZED_FAILED, it.message)
            }
            .execute()
    }

    @ReactMethod
    fun signIn(promise: Promise) {
        val activity = currentActivity

        if (activity == null) {
            promise.reject(E_ACTIVITY_DOES_NOT_EXIST, "Activity doesn't exist")
            return
        }

        loginActivityPromise = promise

        val loginIntent = googleOmhAuthClient.getLoginIntent()

        activity.startActivityForResult(loginIntent, LOGIN_REQUEST)
    }

    @ReactMethod
    fun getAccessToken(promise: Promise) {
        val credentials = googleOmhAuthClient.getCredentials()

        promise.resolve(credentials.accessToken)
    }

    @ReactMethod
    fun getUser(promise: Promise) {
        googleOmhAuthClient.getUser()
            .addOnSuccess {
                val jsonObject = Arguments.createMap().apply {
                    putString("name", it.name)
                    putString("surname", it.surname)
                    putString("email", it.email)
                    putString("profileImage", it.profileImage)
                }

                promise.resolve(jsonObject)
            }
            .addOnFailure {
                promise.reject(E_GET_USER_FAILED, it.message)
            }
            .execute()
    }

    @ReactMethod
    fun refreshAccessToken(promise: Promise) {
        val credentials = googleOmhAuthClient.getCredentials()

        credentials.refreshAccessToken()
            .addOnSuccess {
                promise.resolve(it)
            }
            .addOnFailure {
                promise.reject(E_REFRESH_TOKEN_FAILED, it.message)
            }
            .execute()
    }

    @ReactMethod
    fun revokeAccessToken(promise: Promise) {
        googleOmhAuthClient.revokeToken()
            .addOnSuccess {
                promise.resolve(null)
            }
            .addOnFailure {
                promise.reject(E_REVOKE_TOKEN_FAILED, it.message)
            }
            .execute()
    }

    @ReactMethod
    fun signOut(promise: Promise) {
        googleOmhAuthClient.signOut()
            .addOnSuccess {
                promise.resolve(null)
            }
            .addOnFailure {
                promise.reject(E_SIGN_OUT_FAILED, it.message)
            }
            .execute()
    }

    companion object {
        const val NAME = "OmhGoogle"
        const val LOGIN_REQUEST = 1
        const val E_ACTIVITY_DOES_NOT_EXIST = "E_ACTIVITY_DOES_NOT_EXIST"
        const val E_INITIALIZED_FAILED = "E_INITIALIZED_FAILED"
        const val E_SIGN_IN_CANCELED = "E_SIGN_IN_CANCELLED"
        const val E_GET_USER_FAILED = "E_GET_USER_FAILED"
        const val E_REFRESH_TOKEN_FAILED = "E_REFRESH_TOKEN_FAILED"
        const val E_REVOKE_TOKEN_FAILED = "E_REVOKE_TOKEN_FAILED"
        const val E_SIGN_OUT_FAILED = "E_SIGN_OUT_FAILED"
    }
}
