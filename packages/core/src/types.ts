import type {AuthConfiguration, AuthorizeResult} from 'react-native-app-auth';

export type BaseAuthConfig = AuthConfiguration;

export type AuthData = AuthorizeResult;

export interface IAuthModule<C extends BaseAuthConfig = BaseAuthConfig> {
  initialize(config: C): Promise<void>;
  signIn(): Promise<void>;
  getAccessToken(): Promise<string | undefined>;
  getUser(): Promise<OmhUserProfile | undefined>;
  refreshAccessToken(): Promise<string | undefined>;
  revokeAccessToken(): Promise<void>;
  signOut(): Promise<void>;
}

export type AuthModuleConfig = {
  moduleName: string;
  IOSGetUser: (
    getAuthData: () => AuthData,
  ) => Promise<OmhUserProfile | undefined>;
  IOSRefreshAccessToken?: (
    getAuthData: () => AuthData,
  ) => Promise<string | undefined>;
  IOSRevokeAccessToken?: (getAuthData: () => AuthData) => Promise<void>;
};

export interface OmhUserProfile {
  name?: string;
  surname?: string;
  email?: string;
  profileImage?: string;
}
