/**
 * React Native OMH Auth Dropbox Plugin
 * @module @omh/react-native-dropbox-google
 */

import {createAuthModule} from '@omh/react-native-auth-core';

import getUser from './getUser';
import refreshAccessToken from './refreshAccessToken';
import revokeAccessToken from './revokeAccessToken';

const DROPBOX_MODULE_NAME = 'OmhDropbox';

const dropboxModule = createAuthModule({
  moduleName: DROPBOX_MODULE_NAME,
  getUser,
  refreshAccessToken,
  revokeAccessToken,
});

export default dropboxModule;
