module.exports = {
  preset: 'react-native',
  setupFiles: ['<rootDir>/setup-jest.ts'],
  transformIgnorePatterns: [
    'node_modules/(?!(@?react-native|react-native-safe-area-context|@react-navigation)/)',
  ],
};
