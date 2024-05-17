import type {AuthConfiguration, AuthorizeResult} from 'react-native-app-auth';

export type AuthData = AuthorizeResult;

export type AuthConfig<
  A extends AndroidAuthConfig = AndroidAuthConfig,
  I extends IOSAuthConfig = IOSAuthConfig,
> = {
  android?: Partial<A>;
  ios?: Partial<I>;
};
export type AndroidAuthConfig = {
  scopes: Array<string>;
};
export type IOSAuthConfig = {
  scopes: Array<string>;
  redirectUrl: string;
  clientId: string;
  clientSecret?: string;
};

export interface IAuthModule<C extends AuthConfig> {
  initialize(config: C): Promise<void>;
  signIn(): Promise<void>;
  getAccessToken(): Promise<string | undefined>;
  getUser(): Promise<OmhUserProfile>;
  refreshAccessToken(): Promise<string | undefined>;
  revokeAccessToken(): Promise<void>;
  signOut(): Promise<void>;
}

type IOSAuthFunction<R> = (getAuthData: () => AuthData) => Promise<R>;

export type AuthModuleConfig = {
  moduleName: string;
  IOSGetUser: IOSAuthFunction<OmhUserProfile>;
  IOSRefreshAccessToken?: IOSAuthFunction<{
    accessToken: string;
    accessTokenExpirationDate: string;
  }>;
  IOSRevokeAccessToken?: IOSAuthFunction<void>;
  IOSAppAuthConfig: Partial<AuthConfiguration>;
};

export interface OmhUserProfile {
  name?: string;
  surname?: string;
  email?: string;
  profileImage?: string;
}
