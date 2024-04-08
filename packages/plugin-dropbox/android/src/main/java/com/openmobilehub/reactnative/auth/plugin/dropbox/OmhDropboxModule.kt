package com.openmobilehub.reactnative.auth.plugin.dropbox

import com.facebook.react.bridge.ReactApplicationContext
import com.openmobilehub.android.auth.core.OmhAuthClient
import com.openmobilehub.android.auth.plugin.dropbox.DropboxAuthClient
import com.openmobilehub.reactnative.auth.core.OmhAuthModule

class OmhDropboxModule(private val reactContext: ReactApplicationContext) {
    fun getOmhDropboxModule(): OmhAuthModule {
        return OmhAuthModule(
            reactContext = reactContext,
            name = NAME,
            createOmhAuthClient = ::createOmhAuthClient
        )
    }

    private fun createOmhAuthClient(config: HashMap<String, Any>): OmhAuthClient {
        val scopes = config["scopes"] as ArrayList<String>

        return DropboxAuthClient(
            scopes = scopes,
            context = reactContext,
            appId = BuildConfig.DROPBOX_APP_KEY,
        )
    }

    companion object {
        const val NAME = "OmhDropbox"
    }
}
