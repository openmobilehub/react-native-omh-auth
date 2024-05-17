/**
 * React Native OMH Auth Microsoft Plugin
 * @module @openmobilehub/auth-microsoft
 */

import {createAuthModule} from '@openmobilehub/auth-core';

import IOSGetUser from './IOSGetUser';
import type {MicrosoftAuthConfig} from './types';

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
    throw new Error('Method not supported.');
  },
});

export default microsoftModule;
