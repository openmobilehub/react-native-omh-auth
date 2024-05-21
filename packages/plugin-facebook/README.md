<p align="center">
  <a href="https://www.openmobilehub.com/">
    <img width="160px" src="https://www.openmobilehub.com/images/logo/omh_logo.png"/><br/>
  </a>
  <h2 align="center">React Native OMH Auth - Facebook</h2>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@openmobilehub/auth-facebook"><img src="https://img.shields.io/npm/dm/@openmobilehub/auth-facebook.svg?style=flat" alt="NPM downloads"/></a>
  <a href="https://www.npmjs.com/package/@openmobilehub/auth-facebook"><img src="https://img.shields.io/npm/v/@openmobilehub/auth-facebook.svg?style=flat" alt="NPM version"/></a>
  <a href="/LICENSE"><img src="https://img.shields.io/npm/l/@openmobilehub/auth-facebook.svg?style=flat" alt="License"/></a>
</p>

<p align="center">
  <a href="https://discord.com/invite/yTAFKbeVMw"><img src="https://img.shields.io/discord/1115727214827278446.svg?style=flat&colorA=7289da&label=Chat%20on%20Discord" alt="Chat on Discord"/></a>
  <a href="https://twitter.com/openmobilehub"><img src="https://img.shields.io/twitter/follow/rnfirebase.svg?style=flat&colorA=1da1f2&colorB=&label=Follow%20on%20Twitter" alt="Follow on Twitter"/></a>
</p>

---

## Installation

```bash
npm add @openmobilehub/auth-facebook
```

## Configuration

:::info[Prerequisites]

Each plugin requires you to follow the [iOS](https://www.openmobilehub.com/react-native-omh-auth/docs/getting-started#ios-configuration) and [Android](https://www.openmobilehub.com/react-native-omh-auth/docs/getting-started#android-configuration) configuration prior to interacting with it.

:::

### Console App

To access Google APIs, please follow these steps in order to obtain the **Client ID**:

1. [Create a new app](https://developers.facebook.com/docs/facebook-login/android) in [Meta for Developers](https://developers.facebook.com/apps).
2. Add the Android platform and specify your [Key Hash](https://developers.facebook.com/docs/facebook-login/android#6--provide-the-development-and-release-key-hashes-for-your-app) for your app.
3. Enable the `email` permission for your app.

### Android

Add a new entry to your **android/local.properties** file:

```bash title="android/local.properties"
FACEBOOK_CLIENT_ID=<YOUR_FACEBOOK_APP_ID>
FACEBOOK_CLIENT_SECRET=<YOUR_FACEBOOK_APP_SECRET>
```

### iOS

Add a new entry to your **.env** file:

```bash title=".env"
FACEBOOK_CLIENT_ID=<YOUR_FACEBOOK_APP_ID>
FACEBOOK_CLIENT_SECRET=<YOUR_FACEBOOK_APP_SECRET>
```

## Usage

### Initializing

Before interacting with Facebook, initialization of the Facebook Auth Client is necessary, requiring platform specific configuration to be set.

```typescript
import FacebookAuthClient from '@openmobilehub/auth-facebook';

await FacebookAuth.initialize({
  android: {
    scopes: ['public_profile', 'email'],
  },
  ios: {
    scopes: ['public_profile', 'email'],
    clientId: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    redirectUrl: `fb${process.env.FACEBOOK_CLIENT_ID}://authorize/`,
  },
});
```

### Other methods

Interacting with the Facebook provider follows the same pattern as other providers since they all implement the `IAuthModule` interface. For a comprehensive list of available methods, refer to the [Quick Start](https://www.openmobilehub.com/react-native-omh-auth/docs/getting-started#sign-in) guide.

## License

- See [LICENSE](https://github.com/openmobilehub/react-native-omh-auth/blob/main/LICENSE)
