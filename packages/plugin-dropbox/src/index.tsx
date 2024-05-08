/**
 * React Native OMH Auth Dropbox Plugin
 * @module @omh/react-native-dropbox-google
 */

import {createAuthModule} from '@omh/react-native-auth-core';

import IOSGetUser from './IOSGetUser';
import IOSRefreshAccessToken from './IOSRefreshAccessToken';
import IOSRevokeAccessToken from './IOSRevokeAccessToken';

const DROPBOX_MODULE_NAME = 'OmhDropbox';

const dropboxModule = createAuthModule({
  moduleName: DROPBOX_MODULE_NAME,
  IOSAppAuthConfig: {
    serviceConfiguration: {
      authorizationEndpoint: 'https://www.dropbox.com/oauth2/authorize',
      tokenEndpoint: 'https://api.dropboxapi.com/oauth2/token',
      revocationEndpoint: 'https://api.dropboxapi.com/2/auth/token/revoke',
    },
    additionalParameters: {
      token_access_type: 'offline',
      response_type: 'code',
    },
  },
  IOSGetUser,
  IOSRefreshAccessToken,
  IOSRevokeAccessToken,
});

export default dropboxModule;
