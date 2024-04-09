---
id: "index"
title: "react-native-omh-auth"
sidebar_label: "Readme"
sidebar_position: 0
custom_edit_url: null
---

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

See the [contributing guide](../contributing.mdx) to learn how to contribute to the repository and the development workflow.
