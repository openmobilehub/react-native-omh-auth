/**
 * React Native OMH Auth Facebook Plugin
 * @module @omh/react-native-auth-facebook
 */

import {createAuthModule} from '@omh/react-native-auth-core';

import IOSGetUser from './IOSGetUser';
import IOSRefreshAccessToken from './IOSRefreshAccessToken';
import IOSRevokeAccessToken from './IOSRevokeAccessToken';

const FACEBOOK_MODULE_NAME = 'OmhFacebook';

const facebookModule = createAuthModule({
  moduleName: FACEBOOK_MODULE_NAME,
  IOSAppAuthConfig: {
    serviceConfiguration: {
      authorizationEndpoint: 'https://www.facebook.com/dialog/oauth',
      tokenEndpoint: 'https://graph.facebook.com/oauth/access_token',
    },
    usePKCE: false,
  },
  IOSGetUser,
  IOSRefreshAccessToken,
  IOSRevokeAccessToken,
});

export default facebookModule;
