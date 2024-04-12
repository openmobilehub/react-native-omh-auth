<p align="center">
  <a href="https://www.openmobilehub.com/">
    <img width="160px" src="https://www.openmobilehub.com/images/logo/omh_logo.png"/><br/>
  </a>
  <h2 align="center">React Native OMH Auth - Facebook</h2>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@omh/react-native-auth-facebook"><img src="https://img.shields.io/npm/dm/@omh/react-native-auth-facebook.svg?style=flat" alt="NPM downloads"/></a>
  <a href="https://www.npmjs.com/package/@omh/react-native-auth-facebook"><img src="https://img.shields.io/npm/v/@omh/react-native-auth-facebook.svg?style=flat" alt="NPM version"/></a>
  <a href="/LICENSE"><img src="https://img.shields.io/npm/l/@omh/react-native-auth-facebook.svg?style=flat" alt="License"/></a>
</p>

<p align="center">
  <a href="https://discord.com/invite/yTAFKbeVMw"><img src="https://img.shields.io/discord/1115727214827278446.svg?style=flat&colorA=7289da&label=Chat%20on%20Discord" alt="Chat on Discord"/></a>
  <a href="https://twitter.com/openmobilehub"><img src="https://img.shields.io/twitter/follow/rnfirebase.svg?style=flat&colorA=1da1f2&colorB=&label=Follow%20on%20Twitter" alt="Follow on Twitter"/></a>
</p>

---

## Installation

```bash
npm add @omh/react-native-auth-facebook
```

## Configuration

To access Facebook APIs, generate a unique **App ID** & **Client Token** for your app in the [Meta for Developers](https://developers.facebook.com/apps) and follow the additional [setup instructions](https://developers.facebook.com/docs/facebook-login/android). Once finished, add a new entry to your **android/local.properties** file:

```bash title="android/local.properties"
FACEBOOK_APP_ID=<YOUR_FACEBOOK_APP_ID>
FACEBOOK_CLIENT_TOKEN=<YOUR_FACEBOOK_CLIENT_TOKEN>
```

## Usage

### Initializing

Before interacting with Facebook, initialization of the Facebook Auth Client is necessary, requiring specific `scopes` to be configured.

```typescript
import FacebookAuthClient from '@omh/react-native-auth-facebook';

await FacebookAuthClient.initialize({scopes: ['public_profile', 'email']});
```

### Other methods

Interacting with the Facebook provider follows the same pattern as other providers since they all implement the `AuthModule` interface. For a comprehensive list of available methods, refer to the [Quick Start](https://special-barnacle-93vn82m.pages.github.io/docs/getting-started#sign-in) guide.

## License

- See [LICENSE](https://github.com/openmobilehub/react-native-omh-auth/blob/main/LICENSE)
