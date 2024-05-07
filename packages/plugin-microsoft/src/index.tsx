/**
 * React Native OMH Auth Microsoft Plugin
 * @module @omh/react-native-auth-microsoft
 */

import {createAuthModule} from '@omh/react-native-auth-core';

import getUser from './getUser';
import {MicrosoftAuthConfig} from './types';

const MICROSOFT_MODULE_NAME = 'OmhMicrosoft';

const microsoftModule = createAuthModule<MicrosoftAuthConfig>({
  moduleName: MICROSOFT_MODULE_NAME,
  IOSGetUser: getUser,
  IOSRevokeAccessToken: () => {
    throw new Error('Microsoft does not support revoking access tokens');
  },
});

export default microsoftModule;
