import {Platform} from 'react-native';

import AndroidAuthModule from './AndroidAuthModule';
import IOSAuthModule from './IOSAuthModule';
import {AuthConfig, AuthModuleConfig, IAuthModule} from './types';

function createAndroidAuthModule<C extends AuthConfig>(
  authModuleConfig: AuthModuleConfig,
) {
  return new AndroidAuthModule<C>(authModuleConfig);
}

function createIOSAuthModule<C extends AuthConfig>(
  authModuleConfig: AuthModuleConfig,
) {
  return new IOSAuthModule<C>(authModuleConfig);
}

export default function createAuthModule<C extends AuthConfig = AuthConfig>(
  moduleConfig: AuthModuleConfig,
): IAuthModule<C> {
  return Platform.select<() => IAuthModule<C>>({
    default: () => {
      throw new Error('Unsupported platform');
    },
    android: () => createAndroidAuthModule<C>(moduleConfig),
    ios: () => createIOSAuthModule<C>(moduleConfig),
  })();
}
