<p align="center">
  <a href="https://www.openmobilehub.com/">
    <img width="160px" src="https://www.openmobilehub.com/images/logo/omh_logo.png"/><br/>
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

Each plugin requires you to follow the [iOS](https://special-barnacle-93vn82m.pages.github.io/docs/getting-started#ios-configuration) and [Android](https://special-barnacle-93vn82m.pages.github.io/docs/getting-started#android-configuration) configuration prior to interacting with it.

:::

### Console App

To access Google APIs, please follow these steps in order to obtain the **Client ID**:

1. [Create a new app](https://developers.dropbox.com/oauth-guide) in [Dropbox Console](https://www.dropbox.com/developers/apps/create).
2. Specify `<YOUR_IOS_BUNDLE_ID>://oauth` as your redirect URL for your app.
3. Enable the `sharing.read` permission for your app.

### Android

Add a new entry to your **android/local.properties** file:

```bash title="android/local.properties"
DROPBOX_CLIENT_ID=<YOUR_DROPBOX_APP_KEY>
```

### iOS

Add a new entry to your **.env** file:

```bash title=".env"
DROPBOX_CLIENT_ID=<YOUR_DROPBOX_APP_KEY>
DROPBOX_CLIENT_SECRET=<YOUR_DROPBOX_APP_SECRET>
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
    clientId: process.env.DROPBOX_CLIENT_ID,
    clientSecret: process.env.DROPBOX_CLIENT_SECRET,
    redirectUrl: '<YOUR_REDIRECT_URL>',
  },
});
```

### Other methods

Interacting with the Dropbox provider follows the same pattern as other providers since they all implement the `IAuthModule` interface. For a comprehensive list of available methods, refer to the [Quick Start](https://special-barnacle-93vn82m.pages.github.io/docs/getting-started#sign-in) guide.

## License

- See [LICENSE](https://github.com/openmobilehub/react-native-omh-auth/blob/main/LICENSE)
