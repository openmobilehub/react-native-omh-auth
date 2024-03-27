import {NativeModules, Platform} from 'react-native';

const LINKING_ERROR =
  "The package '@omh/react-native-auth-google' doesn't seem to be linked. Make sure: \n\n" +
  Platform.select({ios: "- You have run 'pod install'\n", default: ''}) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const OmhGoogle = NativeModules.OmhGoogle
  ? NativeModules.OmhGoogle
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      },
    );

export function login(): Promise<void> {
  return OmhGoogle.login();
}
