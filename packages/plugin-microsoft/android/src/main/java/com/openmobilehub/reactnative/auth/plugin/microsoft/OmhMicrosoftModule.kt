package com.openmobilehub.reactnative.auth.plugin.microsoft

import com.facebook.react.bridge.ReactApplicationContext
import com.openmobilehub.android.auth.core.OmhAuthClient
import com.openmobilehub.android.auth.plugin.microsoft.MicrosoftAuthClient
import com.openmobilehub.reactnative.auth.core.OmhAuthModule

class OmhMicrosoftModule(private val reactContext: ReactApplicationContext) {
    fun getOmhMicrosoftModule(): OmhAuthModule {
        return OmhAuthModule(
            reactContext = reactContext,
            name = NAME,
            createOmhAuthClient = ::createOmhAuthClient
        )
    }

    private fun createOmhAuthClient(config: HashMap<String, Any>): OmhAuthClient {
        val scopes = config["scopes"] as ArrayList<String>
        val configFileName  = config["configFileName"] as String

        val configFile = reactContext.resources.getIdentifier(configFileName, "raw", reactContext.packageName)

        return MicrosoftAuthClient(
            context = reactContext,
            scopes = scopes,
            configFileResourceId = configFile
        )
    }

    companion object {
        const val NAME = "OmhMicrosoft"
    }
}
