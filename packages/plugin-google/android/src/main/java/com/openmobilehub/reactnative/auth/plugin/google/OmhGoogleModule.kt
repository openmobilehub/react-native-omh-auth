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

package com.openmobilehub.reactnative.auth.plugin.google

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.ReadableMap
import com.facebook.react.module.annotations.ReactModule
import com.openmobilehub.android.auth.core.OmhAuthClient
import com.openmobilehub.android.auth.core.OmhAuthProvider
import com.openmobilehub.reactnative.auth.core.OmhAuthModuleImpl

@ReactModule(name = OmhGoogleModule.NAME)
class OmhGoogleModule(private val reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {
    private val moduleImpl = OmhAuthModuleImpl(reactContext, this::createOmhAuthClient)

    val authClient: OmhAuthClient
        get() = moduleImpl.authClient

    private fun createOmhAuthClient(config: HashMap<String, Any>): OmhAuthClient {
        val omhAuthProvider = OmhAuthProvider.Builder()
            .addNonGmsPath("com.openmobilehub.android.auth.plugin.google.nongms.presentation.OmhAuthFactoryImpl")
            .addGmsPath("com.openmobilehub.android.auth.plugin.google.gms.OmhAuthFactoryImpl")
            .build()
        val scopes = config["scopes"] as ArrayList<String>

        return omhAuthProvider.provideAuthClient(
            scopes = scopes, clientId = BuildConfig.GOOGLE_CLIENT_ID, context = reactContext
        )
    }

    @ReactMethod
    fun initialize(config: ReadableMap, promise: Promise) {
        moduleImpl.initialize(config, promise)
    }

    @ReactMethod
    fun signIn(promise: Promise) {
        moduleImpl.signIn(currentActivity, promise)
    }

    @ReactMethod
    fun getUser(promise: Promise) {
        moduleImpl.getUser(promise)
    }

    @ReactMethod
    fun getAccessToken(promise: Promise) {
        moduleImpl.getAccessToken(promise)
    }

    @ReactMethod
    fun refreshAccessToken(promise: Promise) {
        moduleImpl.refreshAccessToken(promise)
    }

    @ReactMethod
    fun revokeAccessToken(promise: Promise) {
        moduleImpl.revokeAccessToken(promise)
    }

    @ReactMethod
    fun signOut(promise: Promise) {
        moduleImpl.signOut(promise)
    }

    override fun getName(): String {
        return NAME
    }

    companion object {
        const val NAME = "OmhGoogle"
    }
}
