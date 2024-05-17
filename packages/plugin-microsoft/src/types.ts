import type {AndroidAuthConfig, AuthConfig} from '@openmobilehub/auth-core';

type AndroidMicrosoftAuthConfig = AndroidAuthConfig & {
  configFileName: string;
};

export type MicrosoftAuthConfig = AuthConfig<AndroidMicrosoftAuthConfig>;
