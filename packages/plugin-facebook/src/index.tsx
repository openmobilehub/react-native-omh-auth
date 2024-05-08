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
  IOSGetUser,
  IOSRefreshAccessToken,
  IOSRevokeAccessToken,
  IOSAppAuthConfig: {},
});

export default facebookModule;
