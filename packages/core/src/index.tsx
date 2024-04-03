import {NativeModules, Platform} from 'react-native';

const LINKING_ERROR =
  "The package '@omh/react-native-auth-facebook' doesn't seem to be linked. Make sure: \n\n" +
  Platform.select({ios: "- You have run 'pod install'\n", default: ''}) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const OmhFacebook = NativeModules.OmhFacebook
  ? NativeModules.OmhFacebook
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      },
    );

export type OmhUserProfile = {
  name?: string;
  surname?: string;
  email?: string;
  profileImage?: string;
};

export function initialize(scopes: Array<string>): Promise<void> {
  return OmhFacebook.initialize(scopes);
}

export function signIn(): Promise<void> {
  return OmhFacebook.signIn();
}

export function getAccessToken(): Promise<string | undefined> {
  return OmhFacebook.getAccessToken();
}

export function getUser(): Promise<OmhUserProfile> {
  return OmhFacebook.getUser();
}

export function refreshAccessToken(): Promise<string | undefined> {
  return OmhFacebook.refreshAccessToken();
}

export function revokeAccessToken(): Promise<void> {
  return OmhFacebook.revokeAccessToken();
}

export function signOut(): Promise<void> {
  return OmhFacebook.signOut();
}
