import {Platform} from 'react-native';

import AndroidAuthModule from './AndroidAuthModule';
import IOSAuthModule from './IOSAuthModule';
import {AuthModuleConfig, BaseAuthConfig, IAuthModule} from './types';

function createAndroidAuthModule<C extends BaseAuthConfig>(
  authModuleConfig: AuthModuleConfig,
) {
  return new AndroidAuthModule<C>(authModuleConfig);
}

function createIOSAuthModule(authModuleConfig: AuthModuleConfig) {
  return new IOSAuthModule(authModuleConfig);
}

export default function createAuthModule<
  C extends BaseAuthConfig = BaseAuthConfig,
>(moduleConfig: AuthModuleConfig): IAuthModule<C> {
  return Platform.select<() => IAuthModule>({
    default: () => {
      throw new Error('Unsupported platform');
    },
    android: () => createAndroidAuthModule<C>(moduleConfig),
    ios: () => createIOSAuthModule(moduleConfig),
  })();
}
