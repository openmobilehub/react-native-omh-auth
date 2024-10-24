<p align="center">
  <a href="https://www.openmobilehub.com/">
    <img width="160px" src="https://openmobilehub.github.io/react-native-omh-auth/img/logo.png"/><br/>
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

:::info[Prerequisites]

Each plugin requires you to follow the [iOS](https://openmobilehub.github.io/react-native-omh-auth/docs/getting-started#ios-configuration) and [Android](https://openmobilehub.github.io/react-native-omh-auth/docs/getting-started#android-configuration) configuration prior to interacting with it.

:::

### Console App

To access Google APIs, please follow these steps in order to obtain the **Client ID**:

1. [Create a new app](https://learn.microsoft.com/en-us/entra/identity-platform/tutorial-v2-android#register-your-application-with-microsoft-entra-id) in [Microsoft Azure](https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps/CreateApplicationBlade). Make sure to set the **Account Type** to: **"Accounts in any organizational directory (Any Microsoft Entra directory - Multitenant) and personal Microsoft accounts (such as Skype, Xbox)"**.
2. Add the **Android** platform and specify your [**Package Name**](https://developer.android.com/build/configure-app-module#set-application-id) and [**Signature Hash**](https://learn.microsoft.com/en-us/entra/identity-platform/tutorial-v2-android#register-your-application-with-microsoft-entra-id:~:text=In%20the%20Signature%20hash%20section%20of%20the%20Configure%20your%20Android%20app%20pane%2C%20select%20Generating%20a%20development%20Signature%20Hash.%20and%20copy%20the%20KeyTool%20command%20to%20your%20command%20line.) for your app.
3. Add the **iOS / macOS** platform and specify your [**Bundle ID**](https://developer.apple.com/documentation/xcode/preparing-your-app-for-distribution/#Set-the-bundle-ID) for your app.
4. Download the **ms_auth_config.json** file and add it in the **android/app/src/main/res/raw** directory.

### Android

Add a new entry to your **android/local.properties** file:

```bash title="android/local.properties"
MICROSOFT_SIGNATURE_HASH=<YOUR_MICROSOFT_SIGNATURE_HASH>
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
    clientId: '<YOUR_MICROSOFT_CLIENT_ID>',
    redirectUrl: 'msauth.com.omh.auth.sample://auth/',
  },
});
```

### Other methods

:::warning[Known limitations"]

Due to current [limitations](https://github.com/AzureAD/microsoft-authentication-library-for-android/issues/1037) to the underlying Microsoft SDK, revoking a token is not supported as of now. Instead an error with the **"Method not supported."** message will be thrown when calling the `revokeAccessToken` method.

:::

Interacting with the Microsoft provider follows the same pattern as other providers since they all implement the [`IAuthModule`](https://openmobilehub.github.io/react-native-omh-auth/docs/api/interfaces/openmobilehub_auth_core.IAuthModule#methods) interface. For a comprehensive list of available methods, refer to the [Quick Start](https://openmobilehub.github.io/react-native-omh-auth/docs/getting-started#sign-in) guide.

## License

- See [LICENSE](https://github.com/openmobilehub/react-native-omh-auth/blob/main/LICENSE)
