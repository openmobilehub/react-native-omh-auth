package com.openmobilehub.reactnative.auth.plugin.facebook

import com.facebook.react.bridge.ReactApplicationContext
import com.openmobilehub.android.auth.core.OmhAuthClient
import com.openmobilehub.android.auth.plugin.facebook.FacebookAuthClient

class OmhFacebookModule(private val reactContext: ReactApplicationContext) : OmhAuthModule(reactContext) {
    override fun createOmhAuthClient(scopes: ArrayList<String>): OmhAuthClient {
        return FacebookAuthClient(
            context = reactContext,
            scopes = arrayListOf("email", "public_profile")
        )
    }

  override fun getName(): String {
    return NAME
  }

    companion object {
        const val NAME = "OmhFacebook"
    }
}

//private class RNFBEventListener(private var activityPromise: Promise?): BaseActivityEventListener() {
//  override fun onActivityResult(
//    activity: Activity?,
//    requestCode: Int,
//    resultCode: Int,
//    data: Intent?
//  ) {
//    super.onActivityResult(activity, requestCode, resultCode, data)
//
//    activityPromise?.let { promise ->
//      when (resultCode) {
//        Activity.RESULT_CANCELED -> {
//          promise.reject("CANCELLED", "XD")
//        }
//        Activity.RESULT_OK -> {
//          promise.resolve(null)
//        }
//      }
//      activityPromise = null
//    }
//  }
//}
