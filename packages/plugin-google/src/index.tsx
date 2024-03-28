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

type OmhUserProfile = {
  name?: string;
  surname?: string;
  email?: string;
  profileImage?: string;
};

export function initialize(): Promise<void> {
  return OmhGoogle.initialize();
}

export function signIn(): Promise<void> {
  return OmhGoogle.signIn();
}

export function getAccessToken(): Promise<string | undefined> {
  return OmhGoogle.getAccessToken();
}

export function getUser(): Promise<OmhUserProfile> {
  return OmhGoogle.getUser();
}

export function refreshAccessToken(): Promise<string | undefined> {
  return OmhGoogle.refreshAccessToken();
}

export function revokeAccessToken(): Promise<void> {
  return OmhGoogle.revokeAccessToken();
}

export function signOut(): Promise<void> {
  return OmhGoogle.signOut();
}
