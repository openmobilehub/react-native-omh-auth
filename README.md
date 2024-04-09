<p align="center">
  <a href="https://www.openmobilehub.com/">
    <img width="160px" src="https://www.openmobilehub.com/images/logo/omh_logo.png"/><br/>
  </a>
  <h2 align="center">React Native OMH Auth</h2>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@omh/react-native-auth-core"><img src="https://img.shields.io/npm/dm/@omh/react-native-auth-core.svg?style=flat" alt="NPM downloads"/></a>
  <a href="https://www.npmjs.com/package/@omh/react-native-auth-core"><img src="https://img.shields.io/npm/v/@omh/react-native-auth-core.svg?style=flat" alt="NPM version"/></a>
  <a href="/LICENSE"><img src="https://img.shields.io/npm/l/@omh/react-native-auth-core.svg?style=flat" alt="License"/></a>
</p>

<p align="center">
  <a href="https://discord.com/invite/yTAFKbeVMw"><img src="https://img.shields.io/discord/1115727214827278446.svg?style=flat&colorA=7289da&label=Chat%20on%20Discord" alt="Chat on Discord"/></a>
  <a href="https://twitter.com/openmobilehub"><img src="https://img.shields.io/twitter/follow/rnfirebase.svg?style=flat&colorA=1da1f2&colorB=&label=Follow%20on%20Twitter" alt="Follow on Twitter"/></a>
</p>

---

**React Native OMH Auth** simplifies the process of connecting your React Native app to various authentication provider services. Each module acts as a lightweight bridge between your JavaScript code and the native OMH Auth SDKs on iOS and Android platforms.

## OMH Auth Modules

This is the main directory of the mono-repo for React Native OMH Auth. If you're searching for a particular package, please click on the corresponding package link below.

- [Core](/packages/core)
- [Google](/packages/plugin-google)
- [Facebook](/packages/plugin-facebook)
- [Microsoft](/packages/plugin-microsoft)
- [Dropbox](/packages/plugin-dropbox)

## Documentation

- [Quick Start](https://special-barnacle-93vn82m.pages.github.io/docs/getting-started)
- [Reference API](https://special-barnacle-93vn82m.pages.github.io/docs/api)

## Troubleshooting

### Jettifier

> Failed to transform jackson-core-2.15.0.jar (com.fasterxml.jackson.core:jackson-core:2.15.0) to match attributes {artifactType=android-classes-jar, org.gradle.category=library, org.gradle.dependency.bundling=external, org.gradle.libraryelements=jar, org.gradle.status=release, org.gradle.usage=java-api}.

If you see the above error during the android build process, please add `android.jetifier.ignorelist=jackson-core,fastdoubleparser` to your **android/gradle.properties** file.

Related [GitHub issue](https://github.com/dropbox/dropbox-sdk-java/issues/517)

## Contributing

- [Overview](https://special-barnacle-93vn82m.pages.github.io/docs/contributing)
- [Issues](https://github.com/openmobilehub/react-native-omh-auth/issues)
- [PRs](https://github.com/openmobilehub/react-native-omh-auth/pulls)

## License

- See [LICENSE](/LICENSE)
