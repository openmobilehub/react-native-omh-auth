# React Native OMH Auth

React Native OMH Auth Core package

## Installation

```bash
npm install --save @omh/react-native-auth-core
npm install --save @omh/react-native-auth-plugin-...
```

## Usage

```js
import {GoogleAuth} from '@omh/react-native-auth-google';

await GoogleAuth.initialize(['openid', 'email', 'profile']);

await googleAuthProvider.signIn();
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.
