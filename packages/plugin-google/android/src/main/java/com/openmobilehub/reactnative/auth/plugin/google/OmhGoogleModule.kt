package com.openmobilehub.reactnative.auth.plugin.google

import com.facebook.react.bridge.ReactApplicationContext
import com.openmobilehub.android.auth.core.OmhAuthClient
import com.openmobilehub.android.auth.core.OmhAuthProvider
import com.openmobilehub.reactnative.auth.core.OmhAuthModule

class OmhGoogleModule(private val reactContext: ReactApplicationContext) {
    fun getOmhGoogleModule(): OmhAuthModule {
        return OmhAuthModule(
            reactContext = reactContext,
            name = NAME,
            createOmhAuthClient = ::createOmhAuthClient
        )
    }

    private fun createOmhAuthClient(config: HashMap<String, Any>): OmhAuthClient {
        val omhAuthProvider = OmhAuthProvider.Builder()
            .addNonGmsPath("com.openmobilehub.android.auth.plugin.google.nongms.presentation.OmhAuthFactoryImpl")
            .addGmsPath("com.openmobilehub.android.auth.plugin.google.gms.OmhAuthFactoryImpl")
            .build()
        val scopes = config["scopes"] as ArrayList<String>

        return omhAuthProvider.provideAuthClient(
            scopes = scopes,
            clientId = BuildConfig.GOOGLE_CLIENT_ID,
            context = reactContext
        )
    }

    companion object {
        const val NAME = "OmhGoogle"
    }
}
