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

    private fun createOmhAuthClient(scopes: ArrayList<String>): OmhAuthClient {
        return FacebookAuthClient(
            context = reactContext,
            scopes = scopes
        )
    }

    companion object {
        const val NAME = "OmhFacebook"
    }
}
