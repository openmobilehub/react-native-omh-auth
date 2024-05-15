/**
 * React Native OMH Auth Google Plugin
 * @module @openmobilehub/auth-google
 */

import {createAuthModule} from '@openmobilehub/auth-core';

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
