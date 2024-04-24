/**
 * React Native OMH Auth Google Plugin
 * @module @omh/react-native-auth-google
 */

import {createAuthModule} from '@omh/react-native-auth-core';

import getUser from './getUser';

const GOOGLE_MODULE_NAME = 'OmhGoogle';

const googleModuleConfig = {
  moduleName: GOOGLE_MODULE_NAME,
  getUser: getUser,
};

const googleModule = createAuthModule(googleModuleConfig);

export default googleModule;
