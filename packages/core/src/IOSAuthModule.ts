import {authorize, refresh, revoke} from 'react-native-app-auth';

import {
  getPersistedAuthData,
  persistAuthData,
  removePersistedAuthData,
} from './authDataPersist';
import {
  AuthData,
  AuthModuleConfig,
  BaseAuthConfig,
  IAuthModule,
  OmhUserProfile,
} from './types';

const NOT_INITIALIZED = 'Not initialized';
const NOT_SIGNED_IN = 'Not signed in';

export default class AuthModuleIOS implements IAuthModule {
  private config: BaseAuthConfig | null = null;
  private authData: AuthData | null = null;

  constructor(private moduleConfig: AuthModuleConfig) {}

  async initialize(config: BaseAuthConfig): Promise<void> {
    this.config = config;
    this.authData = await getPersistedAuthData();
  }

  async signIn(): Promise<void> {
    const config = this.getConfig();

    const persistedAuthData = await getPersistedAuthData();

    if (persistedAuthData) {
      this.authData = persistedAuthData;
    } else {
      this.authData = await authorize(config);
      await persistAuthData(this.authData);
    }
  }

  getAccessToken(): Promise<string | undefined> {
    const authData = this.getAuthData();

    return Promise.resolve(authData.accessToken);
  }

  async getUser(): Promise<OmhUserProfile> {
    return this.moduleConfig.getUser(this.getAuthData);
  }

  async refreshAccessToken(): Promise<string | undefined> {
    const config = this.getConfig();
    const authData = this.getAuthData();

    const {accessToken, refreshToken, accessTokenExpirationDate} =
      await refresh(config, {refreshToken: authData.refreshToken});

    this.authData = {
      ...authData,
      accessToken,
      accessTokenExpirationDate,
      refreshToken: refreshToken || authData.refreshToken,
    };

    await persistAuthData(this.authData);

    return Promise.resolve(accessToken);
  }

  async revokeAccessToken(): Promise<void> {
    const config = this.getConfig();
    const authData = this.getAuthData();

    await revoke(config, {tokenToRevoke: authData.accessToken});
  }

  async signOut(): Promise<void> {
    await this.revokeAccessToken();
    await removePersistedAuthData();

    this.authData = null;
  }

  private getConfig(): BaseAuthConfig {
    if (!this.config) {
      throw new Error(NOT_INITIALIZED);
    }

    return this.config;
  }

  private getAuthData = (): AuthData => {
    if (!this.authData) {
      throw new Error(NOT_SIGNED_IN);
    }

    return this.authData;
  };
}
