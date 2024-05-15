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

To access Dropbox APIs, generate a unique **App Key** for your app in the [Dropbox Console](https://www.dropbox.com/developers/apps). Once finished, add a new entry to your **android/local.properties** file:

```bash title="android/local.properties"
DROPBOX_CLIENT_ID=<YOUR_DROPBOX_CLIENT_ID>
```

## Usage

### Initializing

Before interacting with Dropbox, initialization of the Dropbox Auth Client is necessary, requiring specific `scopes` to be configured.

```typescript
import DropboxAuthClient from '@openmobilehub/auth-dropbox';

await DropboxAuthClient.initialize({scopes: ['account_info.read']});
```

### Other methods

Interacting with the Dropbox provider follows the same pattern as other providers since they all implement the `IAuthModule` interface. For a comprehensive list of available methods, refer to the [Quick Start](https://special-barnacle-93vn82m.pages.github.io/docs/getting-started#sign-in) guide.

## License

- See [LICENSE](https://github.com/openmobilehub/react-native-omh-auth/blob/main/LICENSE)
