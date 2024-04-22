import {AuthConfiguration} from 'react-native-app-auth';

export type BaseAuthConfig = AuthConfiguration;

export type AuthModuleConfig = {
  moduleName: string;
  getUser: (getAuthData: () => AuthData) => Promise<OmhUserProfile>;
};

export interface OmhUserProfile {
  name?: string;
  surname?: string;
  email?: string;
  profileImage?: string;
}

export interface IAuthModule<C extends BaseAuthConfig = BaseAuthConfig> {
  initialize(config: C): Promise<void>;
  signIn(): Promise<void>;
  getAccessToken(): Promise<string | undefined>;
  getUser(): Promise<OmhUserProfile>;
  refreshAccessToken(): Promise<string | undefined>;
  revokeAccessToken(): Promise<void>;
  signOut(): Promise<void>;
}

export interface AuthData {
  accessToken: string;
  accessTokenExpirationDate: string;
  refreshToken: string;
  scopes: Array<string>;
}
