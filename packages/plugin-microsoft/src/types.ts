import {AndroidAuthConfig, AuthConfig} from '@omh/react-native-auth-core';

type AndroidMicrosoftAuthConfig = AndroidAuthConfig & {
  configFileName: string;
};

export type MicrosoftAuthConfig = AuthConfig<AndroidMicrosoftAuthConfig>;
