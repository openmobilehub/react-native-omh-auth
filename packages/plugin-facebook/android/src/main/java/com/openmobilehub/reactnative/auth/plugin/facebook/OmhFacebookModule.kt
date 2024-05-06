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

package com.openmobilehub.reactnative.auth.plugin.facebook

import com.facebook.react.bridge.ReactApplicationContext
import com.openmobilehub.android.auth.core.OmhAuthClient
import com.openmobilehub.android.auth.plugin.facebook.FacebookAuthClient
import com.openmobilehub.reactnative.auth.core.OmhAuthModule

class OmhFacebookModule(private val reactContext: ReactApplicationContext) {
    fun getOmhFacebookModule(): OmhAuthModule {
        return OmhAuthModule(
            reactContext = reactContext,
            name = NAME,
            createOmhAuthClient = ::createOmhAuthClient
        )
    }

    private fun createOmhAuthClient(config: HashMap<String, Any>): OmhAuthClient {
        val scopes = config["scopes"] as ArrayList<String>

        return FacebookAuthClient(
            context = reactContext,
            scopes = scopes
        )
    }

    companion object {
        const val NAME = "OmhFacebook"
    }
}
