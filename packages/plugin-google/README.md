<p align="center">
  <a href="https://www.openmobilehub.com/">
    <img width="160px" src="https://www.openmobilehub.com/images/logo/omh_logo.png"/><br/>
  </a>
  <h2 align="center">React Native OMH Auth - Google (GMS/non-GMS)</h2>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@omh/react-native-auth-google"><img src="https://img.shields.io/npm/dm/@omh/react-native-auth-google.svg?style=flat" alt="NPM downloads"/></a>
  <a href="https://www.npmjs.com/package/@omh/react-native-auth-google"><img src="https://img.shields.io/npm/v/@omh/react-native-auth-google.svg?style=flat" alt="NPM version"/></a>
  <a href="/LICENSE"><img src="https://img.shields.io/npm/l/@omh/react-native-auth-google.svg?style=flat" alt="License"/></a>
</p>

<p align="center">
  <a href="https://discord.com/invite/yTAFKbeVMw"><img src="https://img.shields.io/discord/1115727214827278446.svg?style=flat&colorA=7289da&label=Chat%20on%20Discord" alt="Chat on Discord"/></a>
  <a href="https://twitter.com/openmobilehub"><img src="https://img.shields.io/twitter/follow/rnfirebase.svg?style=flat&colorA=1da1f2&colorB=&label=Follow%20on%20Twitter" alt="Follow on Twitter"/></a>
</p>

---

## Installation

```bash
npm add @omh/react-native-auth-google
```

## Configuration

To access Google APIs, generate a unique **Client ID** for your app in the [Google Console](https://console.cloud.google.com/projectselector2) and follow the additional [setup instructions](https://developers.google.com/identity/protocols/oauth2/native-app#android). Once finished, add a new entry to your **android/local.properties** file:

```bash
GOOGLE_CLIENT_ID=<YOUR_GOOGLE_CLIENT_ID>
```

## Usage

Interacting with the Dropbox provider is identical to other providers as they all inherit the `AuthModule` from the [core](/packages/core). That means there are no additional methods that you need to learn!

- [Reference API](https://special-barnacle-93vn82m.pages.github.io/docs/api/classes/core_src.AuthModule#methods)

## License

- See [LICENSE](/LICENSE)