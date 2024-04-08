import {NativeModules} from 'react-native';

import {BaseAuthConfig, OmhUserProfile} from './types';

export default class AuthModule<C = BaseAuthConfig> {
  authNativeModule: any;

  constructor(moduleName: string) {
    const authNativeModule = NativeModules[moduleName];

    if (!authNativeModule) {
      throw new Error(`Module '${moduleName}' was not found`);
    }

    this.authNativeModule = authNativeModule;
  }

  initialize(config: C): Promise<void> {
    return this.authNativeModule.initialize(config);
  }

  signIn(): Promise<void> {
    return this.authNativeModule.signIn();
  }

  getAccessToken(): Promise<string | undefined> {
    return this.authNativeModule.getAccessToken();
  }

  getUser(): Promise<OmhUserProfile> {
    return this.authNativeModule.getUser();
  }

  refreshAccessToken(): Promise<string | undefined> {
    return this.authNativeModule.refreshAccessToken();
  }

  revokeAccessToken(): Promise<void> {
    return this.authNativeModule.revokeAccessToken();
  }

  signOut(): Promise<void> {
    return this.authNativeModule.signOut();
  }
}
