import {jest} from '@jest/globals';

jest.mock('react-native-safe-area-context', () =>
  require('react-native-safe-area-context/jest/mock'),
);

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

// OMH
jest.mock('@openmobilehub/auth-google', () => ({}));
jest.mock('@openmobilehub/auth-facebook', () => ({}));
