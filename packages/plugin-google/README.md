<p align="center">
  <a href="https://www.openmobilehub.com/">
    <img width="160px" src="https://www.openmobilehub.com/images/logo/omh_logo.png"/><br/>
  </a>
  <h2 align="center">React Native OMH Auth - Google (GMS/non-GMS)</h2>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@openmobilehub/auth-google"><img src="https://img.shields.io/npm/dm/@openmobilehub/auth-google.svg?style=flat" alt="NPM downloads"/></a>
  <a href="https://www.npmjs.com/package/@openmobilehub/auth-google"><img src="https://img.shields.io/npm/v/@openmobilehub/auth-google.svg?style=flat" alt="NPM version"/></a>
  <a href="/LICENSE"><img src="https://img.shields.io/npm/l/@openmobilehub/auth-google.svg?style=flat" alt="License"/></a>
</p>

<p align="center">
  <a href="https://discord.com/invite/yTAFKbeVMw"><img src="https://img.shields.io/discord/1115727214827278446.svg?style=flat&colorA=7289da&label=Chat%20on%20Discord" alt="Chat on Discord"/></a>
  <a href="https://twitter.com/openmobilehub"><img src="https://img.shields.io/twitter/follow/rnfirebase.svg?style=flat&colorA=1da1f2&colorB=&label=Follow%20on%20Twitter" alt="Follow on Twitter"/></a>
</p>

---

## Installation

```bash
npm add @openmobilehub/auth-google
```

## Configuration

:::info[Prerequisites]

Each plugin requires you to follow the [iOS](https://special-barnacle-93vn82m.pages.github.io/docs/getting-started#ios-configuration) and [Android](https://special-barnacle-93vn82m.pages.github.io/docs/getting-started#android-configuration) configuration prior to interacting with it.

:::

### Console App

To access Google APIs, please follow these steps in order to obtain the **Client ID**:

1. [Create a new app](https://developers.google.com/identity/protocols/oauth2/native-app#android) in [Google Cloud](https://console.cloud.google.com/projectcreate).
2. Create an OAuth 2.0 Client ID Android application and specify your **Package Name** and [**SHA1 Fingerprint**](https://support.google.com/cloud/answer/6158849?authuser=1#installedapplications&zippy=%2Cnative-applications%2Candroid) for your app.

### Android

Add a new entry to your **android/local.properties** file:

```bash title="android/local.properties"
GOOGLE_CLIENT_ID=<YOUR_GOOGLE_CLIENT_ID>
```

### iOS

Add a new entry to your **.env** file:

```bash title=".env"
GOOGLE_CLIENT_ID=<YOUR_GOOGLE_CLIENT_ID>
```

## Usage

### Initializing

Before interacting with Google, initialization of the Google Auth Client is necessary, requiring platform specific configuration to be set.

```typescript
import GoogleAuthClient from '@openmobilehub/auth-google';

await GoogleAuth.initialize({
  android: {
    scopes: ['openid', 'profile', 'email'],
  },
  ios: {
    scopes: ['openid', 'profile', 'email'],
    clientId: process.env.GOOGLE_CLIENT_ID,
    redirectUrl: `com.googleusercontent.apps.${
      process.env.GOOGLE_CLIENT_ID.split('.')[0]
    }:/oauth2redirect/google`,
  },
});
```

### Other methods

:::warning[KNOWN LIMITATIONS]

On a [**GMS**](https://www.android.com/gms) enabled device, Google SDK automatically refreshes the access token in the background. Refreshing the access token manually on a GMS enabled device is not supported as of now. Instead the current access token will be returned when calling the `refreshAccessToken` method.

:::

Interacting with the Google provider follows the same pattern as other providers since they all implement the `IAuthModule` interface. For a comprehensive list of available methods, refer to the [Quick Start](https://special-barnacle-93vn82m.pages.github.io/docs/getting-started#sign-in) guide.

## License

- See [LICENSE](https://github.com/openmobilehub/react-native-omh-auth/blob/main/LICENSE)
