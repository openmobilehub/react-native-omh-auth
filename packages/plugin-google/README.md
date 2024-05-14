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

To access Google APIs, generate a unique **Client ID** for your app in the [Google Console](https://console.cloud.google.com/projectselector2) and follow the additional [setup instructions](https://developers.google.com/identity/protocols/oauth2/native-app#android). Once finished, add a new entry to your **android/local.properties** file:

```bash title="android/local.properties"
GOOGLE_CLIENT_ID=<YOUR_GOOGLE_CLIENT_ID>
```

## Usage

### Initializing

Before interacting with Google, initialization of the Google Auth Client is necessary, requiring specific `scopes` to be configured.

```typescript
import GoogleAuthClient from '@openmobilehub/auth-google';

await GoogleAuthClient.initialize({scopes: ['openid', 'email', 'profile']});
```

### Other methods

:::warning[KNOWN LIMITATIONS]

On a [**GMS**](https://www.android.com/gms) enabled device, Google SDK automatically refreshes the access token in the background. Refreshing the access token manually on a GMS enabled device is not supported as of now. Instead the current access token will be returned when calling the `refreshAccessToken` method.

:::

Interacting with the Google provider follows the same pattern as other providers since they all implement the `AuthModule` interface. For a comprehensive list of available methods, refer to the [Quick Start](https://special-barnacle-93vn82m.pages.github.io/docs/getting-started#sign-in) guide.

## License

- See [LICENSE](https://github.com/openmobilehub/react-native-omh-auth/blob/main/LICENSE)
