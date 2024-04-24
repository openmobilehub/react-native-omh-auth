/**
 * React Native OMH Auth Facebook Plugin
 * @module @omh/react-native-auth-facebook
 */

import {createAuthModule} from '@omh/react-native-auth-core';

const FACEBOOK_MODULE_NAME = 'OmhFacebook';
const facebookModule = createAuthModule({
  moduleName: FACEBOOK_MODULE_NAME,
  getUser: () => {
    throw new Error('Not implemented');
  },
});

export default facebookModule;
