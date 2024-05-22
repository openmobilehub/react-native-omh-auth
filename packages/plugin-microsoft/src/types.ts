import type {
  AndroidAuthConfig,
  PlatformAuthConfig,
} from '@openmobilehub/auth-core';

type AndroidMicrosoftAuthConfig = AndroidAuthConfig & {
  configFileName: string;
};

export type MicrosoftAuthConfig =
  PlatformAuthConfig<AndroidMicrosoftAuthConfig>;
