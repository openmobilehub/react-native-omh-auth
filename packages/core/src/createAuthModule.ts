import {Platform} from 'react-native';

import AndroidAuthModule from './AndroidAuthModule';
import IOSAuthModule from './IOSAuthModule';
import type {AuthModuleConfig, IAuthModule, PlatformAuthConfig} from './types';

function createAndroidAuthModule<C extends PlatformAuthConfig>(
  authModuleConfig: AuthModuleConfig,
) {
  return new AndroidAuthModule<C>(authModuleConfig);
}

function createIOSAuthModule<C extends PlatformAuthConfig>(
  authModuleConfig: AuthModuleConfig,
) {
  return new IOSAuthModule<C>(authModuleConfig);
}

export default function createAuthModule<
  C extends PlatformAuthConfig = PlatformAuthConfig,
>(moduleConfig: AuthModuleConfig): IAuthModule<C> {
  return Platform.select<() => IAuthModule<C>>({
    default: () => {
      throw new Error('Unsupported platform');
    },
    android: () => createAndroidAuthModule<C>(moduleConfig),
    ios: () => createIOSAuthModule<C>(moduleConfig),
  })();
}
