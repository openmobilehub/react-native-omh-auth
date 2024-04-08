package com.openmobilehub.reactnative.auth.core

import android.app.Activity
import android.content.Intent
import com.facebook.react.bridge.BaseActivityEventListener
import com.facebook.react.bridge.Promise

class OmhLoginActivityListener: BaseActivityEventListener() {
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