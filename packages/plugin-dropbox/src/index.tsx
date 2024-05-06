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
  IOSGetUser,
  IOSRefreshAccessToken,
  IOSRevokeAccessToken,
});

export default dropboxModule;
