/**
 * React Native OMH Auth Google Plugin
 * @module @omh/react-native-auth-google
 */

import {createAuthModule} from '@omh/react-native-auth-core';

import IOSGetUser from './IOSGetUser';

const GOOGLE_MODULE_NAME = 'OmhGoogle';

const googleModule = createAuthModule({
  moduleName: GOOGLE_MODULE_NAME,
  IOSAppAuthConfig: {
    issuer: 'https://accounts.google.com',
  },
  IOSGetUser,
});

export default googleModule;
