<p align="center">
  <a href="https://www.openmobilehub.com/">
    <img width="160px" src="https://www.openmobilehub.com/images/logo/omh_logo.png"/><br/>
  </a>
  <h2 align="center">React Native OMH Auth - Core</h2>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@openmobilehub/auth-core"><img src="https://img.shields.io/npm/dm/@openmobilehub/auth-core.svg?style=flat" alt="NPM downloads"/></a>
  <a href="https://www.npmjs.com/package/@openmobilehub/auth-core"><img src="https://img.shields.io/npm/v/@openmobilehub/auth-core.svg?style=flat" alt="NPM version"/></a>
  <a href="/LICENSE"><img src="https://img.shields.io/npm/l/@openmobilehub/auth-core.svg?style=flat" alt="License"/></a>
</p>

<p align="center">
  <a href="https://discord.com/invite/yTAFKbeVMw"><img src="https://img.shields.io/discord/1115727214827278446.svg?style=flat&colorA=7289da&label=Chat%20on%20Discord" alt="Chat on Discord"/></a>
  <a href="https://twitter.com/openmobilehub"><img src="https://img.shields.io/twitter/follow/rnfirebase.svg?style=flat&colorA=1da1f2&colorB=&label=Follow%20on%20Twitter" alt="Follow on Twitter"/></a>
</p>

---

## Installation

```bash
npm add @openmobilehub/auth-core
```

## Usage

The core modules exposes the [`OmhUserProfile`](https://special-barnacle-93vn82m.pages.github.io/docs/api/interfaces/openmobilehub_auth_core.OmhUserProfile#properties) type which you might find useful when working in a TypeScript React Native app.

```typescript
import {type OmhUserProfile} from '@openmobilehub/auth-core';

// ... Auth Client initialization and sign in

const user: OmhUserProfile = await AuthClient.getUser();
```

## License

- See [LICENSE](https://github.com/openmobilehub/react-native-omh-auth/blob/main/LICENSE)
