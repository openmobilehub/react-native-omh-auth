/**
 * React Native OMH Auth Microsoft Plugin
 * @module @omh/react-native-auth-microsoft
 */

import {AuthModule} from '@omh/react-native-auth-core';

import {MicrosoftAuthConfig} from './types';

const MICROSOFT_MODULE_NAME = 'OmhMicrosoft';
const microsoftModule = new AuthModule<MicrosoftAuthConfig>(
  MICROSOFT_MODULE_NAME,
);

export default microsoftModule;
