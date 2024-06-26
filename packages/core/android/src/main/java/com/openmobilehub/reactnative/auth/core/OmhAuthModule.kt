/*
 * Copyright 2024 Open Mobile Hub
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

package com.openmobilehub.reactnative.auth.core

import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.ReadableMap
import com.openmobilehub.android.auth.core.OmhAuthClient

class OmhAuthModule(
    reactContext: ReactApplicationContext,
    private val name: String,
    private val createOmhAuthClient: (config: HashMap<String, Any>) -> OmhAuthClient
) : ReactContextBaseJavaModule(reactContext) {
    private var omhAuthClient: OmhAuthClient? = null
    private fun getAuthClient(): OmhAuthClient {
        if (omhAuthClient == null) {
            throw Exception("OmhAuthClient is not initialized")
        }

        return omhAuthClient!!
    }

    private val loginActivityEventListener = OmhLoginActivityListener()

    init {
        reactContext.addActivityEventListener(loginActivityEventListener)
    }

    override fun getName(): String {
        return name
    }

    @ReactMethod
    fun initialize(config: ReadableMap, promise: Promise) {
        omhAuthClient = createOmhAuthClient(config.toHashMap())

        try {
            getAuthClient().initialize().addOnSuccess {
                promise.resolve(null)
            }.addOnFailure {
                promise.reject(E_INITIALIZED_FAILED, it.message)
            }.execute()
        } catch (e: Exception) {
            promise.reject(E_INITIALIZED_FAILED, e.message)
        }
    }

    @ReactMethod
    fun signIn(promise: Promise) {
        val activity = currentActivity

        if (activity == null) {
            promise.reject(E_ACTIVITY_DOES_NOT_EXIST, "Activity doesn't exist")
            return
        }

        loginActivityEventListener.loginPromise = promise

        try {
            val loginIntent = getAuthClient().getLoginIntent()
            activity.startActivityForResult(loginIntent, LOGIN_REQUEST)
        } catch (e: Exception) {
            promise.reject(E_SIGN_IN_FAILED, e.message)
        }
    }

    @ReactMethod
    fun getUser(promise: Promise) {
        try {
            getAuthClient().getUser()
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

    @ReactMethod
    fun getAccessToken(promise: Promise) {
        try {
            val credentials = getAuthClient().getCredentials()

            promise.resolve(credentials.accessToken)
        } catch (e: Exception) {
            promise.reject(E_GET_ACCESS_TOKEN_FAILED, e.message)
        }
    }

    @ReactMethod
    fun refreshAccessToken(promise: Promise) {
        try {
            val credentials = getAuthClient().getCredentials()

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

    @ReactMethod
    fun revokeAccessToken(promise: Promise) {
        try {
            getAuthClient().revokeToken()
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

    @ReactMethod
    fun signOut(promise: Promise) {
        try {
            getAuthClient().signOut()
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
