import {NativeModules} from 'react-native';

import type {
  AuthConfig,
  AuthModuleConfig,
  IAuthModule,
  OmhUserProfile,
} from './types';

export default class AndroidAuthModule<C extends AuthConfig>
  implements IAuthModule<C>
{
  authNativeModule: any;

  constructor({moduleName}: AuthModuleConfig) {
    const authNativeModule = NativeModules[moduleName];

    if (!authNativeModule) {
      throw new Error(`Module '${moduleName}' was not found`);
    }

    this.authNativeModule = authNativeModule;
  }

  /**
   * Initializes the authentication provider with the given configuration.
   * @param config Configuration object required for initialization.
   */
  initialize(config: Partial<C>): Promise<void> {
    return this.authNativeModule.initialize(config.android);
  }

  /**
   * Initiates the sign-in process with the authentication provider.
   */
  signIn(): Promise<void> {
    return this.authNativeModule.signIn();
  }

  /**
   * Retrieves the access token from the authentication provider.
   * @returns The access token if available, otherwise undefined.
   */
  getAccessToken(): Promise<string | undefined> {
    return this.authNativeModule.getAccessToken();
  }

  /**
   * Obtains user information for the current signed-in user.
   * @returns An object containing user profile information.
   */
  getUser(): Promise<OmhUserProfile> {
    return this.authNativeModule.getUser();
  }

  /**
   * Refreshes the access token if it has expired.
   * @returns The new access token if refreshed, otherwise undefined.
   */
  refreshAccessToken(): Promise<string | undefined> {
    return this.authNativeModule.refreshAccessToken();
  }

  /**
   * Revokes the current access token.
   */
  revokeAccessToken(): Promise<void> {
    return this.authNativeModule.revokeAccessToken();
  }

  /**
   * Initiates the sign-out process with the authentication provider.
   */
  signOut(): Promise<void> {
    return this.authNativeModule.signOut();
  }
}
