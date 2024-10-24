<p align="center">
  <a href="https://www.openmobilehub.com/">
    <img width="160px" src="https://openmobilehub.github.io/react-native-omh-auth/img/logo.png"/><br/>
  </a>
  <h2 align="center">React Native OMH Auth - Dropbox</h2>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@openmobilehub/auth-dropbox"><img src="https://img.shields.io/npm/dm/@openmobilehub/auth-dropbox.svg?style=flat" alt="NPM downloads"/></a>
  <a href="https://www.npmjs.com/package/@openmobilehub/auth-dropbox"><img src="https://img.shields.io/npm/v/@openmobilehub/auth-dropbox.svg?style=flat" alt="NPM version"/></a>
  <a href="/LICENSE"><img src="https://img.shields.io/npm/l/@openmobilehub/auth-dropbox.svg?style=flat" alt="License"/></a>
</p>

<p align="center">
  <a href="https://discord.com/invite/yTAFKbeVMw"><img src="https://img.shields.io/discord/1115727214827278446.svg?style=flat&colorA=7289da&label=Chat%20on%20Discord" alt="Chat on Discord"/></a>
  <a href="https://twitter.com/openmobilehub"><img src="https://img.shields.io/twitter/follow/rnfirebase.svg?style=flat&colorA=1da1f2&colorB=&label=Follow%20on%20Twitter" alt="Follow on Twitter"/></a>
</p>

---

## Installation

```bash
npm add @openmobilehub/auth-dropbox
```

## Configuration

:::info[Prerequisites]

Each plugin requires you to follow the [iOS](https://openmobilehub.github.io/react-native-omh-auth/docs/getting-started#ios-configuration) and [Android](https://openmobilehub.github.io/react-native-omh-auth/docs/getting-started#android-configuration) configuration prior to interacting with it.

:::

### Console App

To access Google APIs, please follow these steps in order to obtain the **Client ID**:

1. [Create a new app](https://developers.dropbox.com/oauth-guide) in [Dropbox Console](https://www.dropbox.com/developers/apps/create).
2. Specify <code>\<[YOUR_APPLICATION_ID](https://developer.android.com/build/configure-app-module#set-application-id)\>://oauth</code> as your redirect URL for your app.
3. Enable the `sharing.read` permission for your app.

### Android

Add a new entry to your **android/local.properties** file:

```bash title="android/local.properties"
DROPBOX_CLIENT_ID=<YOUR_DROPBOX_APP_KEY>
```

## Usage

### Initializing

Before interacting with Dropbox, initialization of the Dropbox Auth Client is necessary, requiring platform specific configuration to be set.

```typescript
import DropboxAuthClient from '@openmobilehub/auth-dropbox';

await DropboxAuth.initialize({
  android: {
    scopes: ['account_info.read', 'sharing.read'],
  },
  ios: {
    scopes: ['account_info.read', 'sharing.read'],
    clientId: '<YOUR_DROPBOX_APP_KEY>',
    clientSecret: '<YOUR_DROPBOX_APP_SECRET>',
    redirectUrl: '<YOUR_REDIRECT_URL>',
  },
});
```

### Other methods

Interacting with the Dropbox provider follows the same pattern as other providers since they all implement the [`IAuthModule`](https://openmobilehub.github.io/react-native-omh-auth/docs/api/interfaces/openmobilehub_auth_core.IAuthModule#methods) interface. For a comprehensive list of available methods, refer to the [Quick Start](https://openmobilehub.github.io/react-native-omh-auth/docs/getting-started#sign-in) guide.

## License

- See [LICENSE](https://github.com/openmobilehub/react-native-omh-auth/blob/main/LICENSE)
