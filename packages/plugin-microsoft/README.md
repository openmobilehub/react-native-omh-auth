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

To access Microsoft APIs, generate a unique **Client ID** & **Signature Hash** for your app in the [Microsoft Azure](https://portal.azure.com) and follow the additional [setup instructions](https://learn.microsoft.com/en-us/azure/active-directory-b2c/configure-authentication-sample-android-app?tabs=kotlin). Once finished, add a new entry to your **android/local.properties** file:

```bash title="android/local.properties"
MICROSOFT_SIGNATURE_HASH=<YOUR_MICROSOFT_SIGNATURE_HASH>
MICROSOFT_HOST_PATH=<YOUR_ANDROID_PACKAGE_NAME>.MainApplication
```

Additionally, you will have to download the **ms_auth_config.json** file from the [Microsoft Azure](https://portal.azure.com) and add it in the **android/app/src/main/res/raw** directory.

## Usage

### Initializing

Before interacting with Microsoft, initialization of the Microsoft Auth Client is necessary, requiring specific `scopes` and the `configFileName` to be configured.

```typescript
import MicrosoftAuthClient from '@openmobilehub/auth-microsoft';

await MicrosoftAuthClient.initialize({
  scopes: ['User.Read'],
  configFileName: 'ms_auth_config',
});
```

### Other methods

:::warning[Known limitations"]

Due to current [limitations](https://github.com/AzureAD/microsoft-authentication-library-for-android/issues/1037) to the underlying Microsoft SDK, revoking a token is not supported as of now. Instead an error with the **"Method not supported."** message will be thrown when calling the `revokeAccessToken` method.

:::

Interacting with the Microsoft provider follows the same pattern as other providers since they all implement the `AuthModule` interface. For a comprehensive list of available methods, refer to the [Quick Start](https://special-barnacle-93vn82m.pages.github.io/docs/getting-started#sign-in) guide.

## License

- See [LICENSE](https://github.com/openmobilehub/react-native-omh-auth/blob/main/LICENSE)
