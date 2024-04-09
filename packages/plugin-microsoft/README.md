<p align="center">
  <a href="https://www.openmobilehub.com/">
    <img width="160px" src="https://www.openmobilehub.com/images/logo/omh_logo.png"/><br/>
  </a>
  <h2 align="center">React Native OMH Auth - Microsoft</h2>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@omh/react-native-auth-microsoft"><img src="https://img.shields.io/npm/dm/@omh/react-native-auth-microsoft.svg?style=flat" alt="NPM downloads"/></a>
  <a href="https://www.npmjs.com/package/@omh/react-native-auth-microsoft"><img src="https://img.shields.io/npm/v/@omh/react-native-auth-microsoft.svg?style=flat" alt="NPM version"/></a>
  <a href="/LICENSE"><img src="https://img.shields.io/npm/l/@omh/react-native-auth-microsoft.svg?style=flat" alt="License"/></a>
</p>

<p align="center">
  <a href="https://discord.com/invite/yTAFKbeVMw"><img src="https://img.shields.io/discord/1115727214827278446.svg?style=flat&colorA=7289da&label=Chat%20on%20Discord" alt="Chat on Discord"/></a>
  <a href="https://twitter.com/openmobilehub"><img src="https://img.shields.io/twitter/follow/rnfirebase.svg?style=flat&colorA=1da1f2&colorB=&label=Follow%20on%20Twitter" alt="Follow on Twitter"/></a>
</p>

---

## Installation

```bash
npm add @omh/react-native-auth-microsoft
```

## Configuration

To access Microsoft APIs, generate a unique **Client ID** & **Signature Hash** for your app in the [Microsoft Azure](https://portal.azure.com) and follow the additional [setup instructions](https://learn.microsoft.com/en-us/azure/active-directory-b2c/configure-authentication-sample-android-app?tabs=kotlin). Once finished, add a new entry to your **android/local.properties** file:

```bash
MICROSOFT_CLIENT_ID=<YOUR_MICROSOFT_CLIENT_ID>
MICROSOFT_SIGNATURE_HASH=<YOUR_MICROSOFT_SIGNATURE_HASH>
```

## Usage

Interacting with the Dropbox provider is identical to other providers as they all inherit the `AuthModule` from the [core](/packages/core). That means there are no additional methods that you need to learn!

- [Reference API](https://special-barnacle-93vn82m.pages.github.io/docs/api/classes/core_src.AuthModule#methods)

## License

- See [LICENSE](/LICENSE)
