package com.openmobilehub.reactnative.auth.core

import android.app.Activity
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReadableMap
import com.openmobilehub.android.auth.core.OmhAuthClient

class OmhAuthModuleImpl(
    context: ReactApplicationContext,
    private val createAuthClient: (config: HashMap<String, Any>) -> OmhAuthClient
) {
    private var _authClient: OmhAuthClient? = null

    val authClient: OmhAuthClient
        get() = _authClient ?: throw Exception("OmhAuthClient is not initialized")


    private val loginActivityEventListener = OmhLoginActivityListener()

    init {
        context.addActivityEventListener(loginActivityEventListener)
    }

    fun initialize(config: ReadableMap, promise: Promise) {
        _authClient = createAuthClient(config.toHashMap())

        try {
            authClient.initialize().addOnSuccess {
                promise.resolve(null)
            }.addOnFailure {
                promise.reject(E_INITIALIZED_FAILED, it.message)
            }.execute()
        } catch (e: Exception) {
            promise.reject(E_INITIALIZED_FAILED, e.message)
        }
    }

    fun signIn(currentActivity: Activity?, promise: Promise) {

        if (currentActivity == null) {
            promise.reject(E_ACTIVITY_DOES_NOT_EXIST, "Activity doesn't exist")
            return
        }

        loginActivityEventListener.loginPromise = promise

        try {
            val loginIntent = authClient.getLoginIntent()
            currentActivity.startActivityForResult(loginIntent, LOGIN_REQUEST)
        } catch (e: Exception) {
            promise.reject(E_SIGN_IN_FAILED, e.message)
        }
    }

    fun getUser(promise: Promise) {
        try {
            authClient.getUser()
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
        } catch (e: Exception) {
            promise.reject(E_GET_USER_FAILED, e.message)
        }
    }

    fun getAccessToken(promise: Promise) {
        try {
            val credentials = authClient.getCredentials()

            promise.resolve(credentials.accessToken)
        } catch (e: Exception) {
            promise.reject(E_GET_ACCESS_TOKEN_FAILED, e.message)
        }
    }

    fun refreshAccessToken(promise: Promise) {
        try {
            val credentials = authClient.getCredentials()

            credentials.refreshAccessToken()
                .addOnSuccess {
                    promise.resolve(it)
                }
                .addOnFailure {
                    promise.reject(E_REFRESH_TOKEN_FAILED, it.message)
                }
                .execute()
        } catch (e: Exception) {
            promise.reject(E_REFRESH_TOKEN_FAILED, e.message)
        }
    }

    fun revokeAccessToken(promise: Promise) {
        try {
            authClient.revokeToken()
                .addOnSuccess {
                    promise.resolve(null)
                }
                .addOnFailure {
                    promise.reject(E_REVOKE_TOKEN_FAILED, it.message)
                }
                .execute()
        } catch (e: Exception) {
            promise.reject(E_REVOKE_TOKEN_FAILED, e.message)
        }
    }

    fun signOut(promise: Promise) {
        try {
            authClient.signOut()
                .addOnSuccess {
                    promise.resolve(null)
                }
                .addOnFailure {
                    promise.reject(E_SIGN_OUT_FAILED, it.message)
                }
                .execute()
        } catch (e: Exception) {
            promise.reject(E_SIGN_OUT_FAILED, e.message)
        }
    }

    companion object {
        const val LOGIN_REQUEST = 1
        const val E_ACTIVITY_DOES_NOT_EXIST = "E_ACTIVITY_DOES_NOT_EXIST"
        const val E_INITIALIZED_FAILED = "E_INITIALIZED_FAILED"
        const val E_SIGN_IN_FAILED = "E_SIGN_IN_FAILED"
        const val E_SIGN_IN_CANCELED = "E_SIGN_IN_CANCELLED"
        const val E_GET_USER_FAILED = "E_GET_USER_FAILED"
        const val E_GET_ACCESS_TOKEN_FAILED = "E_GET_ACCESS_TOKEN_FAILED"
        const val E_REFRESH_TOKEN_FAILED = "E_REFRESH_TOKEN_FAILED"
        const val E_REVOKE_TOKEN_FAILED = "E_REVOKE_TOKEN_FAILED"
        const val E_SIGN_OUT_FAILED = "E_SIGN_OUT_FAILED"
    }
}
