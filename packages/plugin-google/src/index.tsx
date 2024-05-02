/**
 * React Native OMH Auth Google Plugin
 * @module @omh/react-native-auth-google
 */

import {createAuthModule} from '@omh/react-native-auth-core';

import IOSGetUser from './IOSGetUser';

const GOOGLE_MODULE_NAME = 'OmhGoogle';

const googleModuleConfig = {
  moduleName: GOOGLE_MODULE_NAME,
  IOSGetUser,
};

const googleModule = createAuthModule(googleModuleConfig);

export default googleModule;
