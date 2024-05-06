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

import android.app.Activity
import android.content.Intent
import com.facebook.react.bridge.BaseActivityEventListener
import com.facebook.react.bridge.Promise

class OmhLoginActivityListener : BaseActivityEventListener() {
    var loginPromise: Promise? = null

    override fun onActivityResult(
        activity: Activity?,
        requestCode: Int,
        resultCode: Int,
        intent: Intent?
    ) {
        loginPromise?.let { promise ->
            when (resultCode) {
                Activity.RESULT_CANCELED -> {
                    val error = intent?.getStringExtra("errorMessage")

                    promise.reject(OmhAuthModule.E_SIGN_IN_CANCELED, error)
                }

                Activity.RESULT_OK ->
                    promise.resolve(null)
            }

            loginPromise = null
        }
    }
}