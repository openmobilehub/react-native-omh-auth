module.exports = {
  extends: '../../babel.config.js',
  plugins: [
    ['module:react-native-dotenv'],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@/app': './src/app',
          '@/screens': './src/screens',
        },
      },
    ],
  ],
};
