/**
 * React Native OMH Auth Dropbox Plugin
 * @module @omh/react-native-dropbox-google
 */

import {createAuthModule} from '@omh/react-native-auth-core';

const DROPBOX_MODULE_NAME = 'OmhDropbox';
const dropboxModule = createAuthModule({
  moduleName: DROPBOX_MODULE_NAME,
  getUser: () => {
    throw new Error('Not implemented');
  },
});

export default dropboxModule;
