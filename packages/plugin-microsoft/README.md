<p align="center">
  <a href="https://www.openmobilehub.com/">
    <img width="160px" src="https://www.openmobilehub.com/images/logo/omh_logo.png"/><br/>
  </a>
  <h2 align="center">React Native OMH Auth - Microsoft</h2>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@openmobilehub/auth-microsoft"><img src="https://img.shields.io/npm/dm/@openmobilehub/auth-microsoft.svg?style=flat" alt="NPM downloads"/></a>
  <a href="https://www.npmjs.com/package/@openmobilehub/auth-microsoft"><img src="https://img.shields.io/npm/v/@openmobilehub/auth-microsoft.svg?style=flat" alt="NPM version"/></a>
  <a href="/LICENSE"><img src="https://img.shields.io/npm/l/@openmobilehub/auth-microsoft.svg?style=flat" alt="License"/></a>
</p>

<p align="center">
  <a href="https://discord.com/invite/yTAFKbeVMw"><img src="https://img.shields.io/discord/1115727214827278446.svg?style=flat&colorA=7289da&label=Chat%20on%20Discord" alt="Chat on Discord"/></a>
  <a href="https://twitter.com/openmobilehub"><img src="https://img.shields.io/twitter/follow/rnfirebase.svg?style=flat&colorA=1da1f2&colorB=&label=Follow%20on%20Twitter" alt="Follow on Twitter"/></a>
</p>

---

## Installation

```bash
npm add @openmobilehub/auth-microsoft
```

## Configuration

To access Microsoft APIs, please follow these steps in order to obtain the **Client ID** and the **ms_auth_config.json** file:

### Console App

1. [Create a new app](https://learn.microsoft.com/en-us/entra/identity-platform/tutorial-v2-android#register-your-application-with-microsoft-entra-id) in [Microsoft Azure](https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps/CreateApplicationBlade).
2. Add the Android platform and specify your **Package Name** and **Signature Hash** for your app.
3. Add the iOS platform and specify your **Bundle ID** for your app.
4. Download the **ms_auth_config.json** file and add it in the **android/app/src/main/res/raw** directory.

### Android

Add a new entry to your **android/local.properties** file:

```bash title="android/local.properties"
MICROSOFT_SIGNATURE_HASH=<YOUR_MICROSOFT_SIGNATURE_HASH>
MICROSOFT_HOST_PATH=<YOUR_ANDROID_PACKAGE_NAME>.MainApplication
```

### iOS

Add a new entry to your **.env** file:

```bash title=".env"
MICROSOFT_CLIENT_ID=<YOUR_MICROSOFT_CLIENT_ID>
```

## Usage

### Initializing

Before interacting with Microsoft, initialization of the Microsoft Auth Client is necessary, requiring platform specific configuration to be set.

```typescript
import MicrosoftAuthClient from '@openmobilehub/auth-microsoft';

await MicrosoftAuth.initialize({
  android: {
    scopes: ['User.Read'],
    configFileName: 'ms_auth_config',
  },
  ios: {
    scopes: ['User.Read', 'openid', 'profile', 'email', 'offline_access'],
    clientId: process.env.MICROSOFT_CLIENT_ID,
    redirectUrl: 'msauth.com.omh.auth.sample://auth/',
  },
});
```

### Other methods

:::warning[Known limitations"]

Due to current [limitations](https://github.com/AzureAD/microsoft-authentication-library-for-android/issues/1037) to the underlying Microsoft SDK, revoking a token is not supported as of now. Instead an error with the **"Method not supported."** message will be thrown when calling the `revokeAccessToken` method.

:::

Interacting with the Microsoft provider follows the same pattern as other providers since they all implement the `IAuthModule` interface. For a comprehensive list of available methods, refer to the [Quick Start](https://special-barnacle-93vn82m.pages.github.io/docs/getting-started#sign-in) guide.

## License

- See [LICENSE](https://github.com/openmobilehub/react-native-omh-auth/blob/main/LICENSE)
