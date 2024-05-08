/**
 * React Native OMH Auth Microsoft Plugin
 * @module @omh/react-native-auth-microsoft
 */

import {createAuthModule} from '@omh/react-native-auth-core';

import IOSGetUser from './IOSGetUser';
import {MicrosoftAuthConfig} from './types';

const MICROSOFT_MODULE_NAME = 'OmhMicrosoft';

const microsoftModule = createAuthModule<MicrosoftAuthConfig>({
  moduleName: MICROSOFT_MODULE_NAME,
  IOSAppAuthConfig: {
    serviceConfiguration: {
      authorizationEndpoint:
        'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',
      tokenEndpoint:
        'https://login.microsoftonline.com/common/oauth2/v2.0/token',
    },
  },
  IOSGetUser,
  IOSRevokeAccessToken: () => {
    throw new Error('Microsoft does not support revoking access tokens');
  },
});

export default microsoftModule;
