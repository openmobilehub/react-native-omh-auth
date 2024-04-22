import React from 'react';

import DropboxAuth from '@omh/react-native-auth-dropbox';
import FacebookAuth from '@omh/react-native-auth-facebook';
import GoogleAuth from '@omh/react-native-auth-google';
import MicrosoftAuth from '@omh/react-native-auth-microsoft';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const PROVIDER_NAMES = {
  GOOGLE: 'google',
  FACEBOOK: 'facebook',
  DROPBOX: 'dropbox',
  MICROSOFT: 'microsoft',
} as const;

type ObjectValues<T> = T[keyof T];

export type Providers = ObjectValues<typeof PROVIDER_NAMES>;

export const getAuthProvider = async (provider: Providers) => {
  switch (provider) {
    case PROVIDER_NAMES.GOOGLE:
      await GoogleAuth.initialize({
        scopes: ['openid', 'email', 'profile'],
        issuer: 'https://accounts.google.com',
        clientId: `${process.env.GOOGLE_APP_GUID}.apps.googleusercontent.com`,
        redirectUrl: `com.googleusercontent.apps.${process.env.GOOGLE_APP_GUID}:/oauth2redirect/google`,
      });
      return GoogleAuth;
    case PROVIDER_NAMES.FACEBOOK:
      // @ts-ignore add iOS config
      await FacebookAuth.initialize({scopes: ['public_profile', 'email']});
      return FacebookAuth;
    case PROVIDER_NAMES.MICROSOFT:
      // @ts-ignore add iOS config
      await MicrosoftAuth.initialize({
        scopes: ['User.Read'],
        configFileName: 'ms_auth_config',
      });
      return MicrosoftAuth;
    case PROVIDER_NAMES.DROPBOX:
      // @ts-ignore add iOS config
      await DropboxAuth.initialize({scopes: ['account_info.read']});
      return DropboxAuth;
  }
};

type SignedInProviderContextValue = {
  signedInProvider: Providers | null;
  signInWithProvider: (provider: Providers | null) => void;
};

export const SignedInProviderContext =
  React.createContext<SignedInProviderContextValue>({
    signedInProvider: null,
    signInWithProvider: (_: Providers | null) => {},
  });

export default function SignedInProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [signedInProvider, setSignedInProvider] =
    React.useState<Providers | null>(null);

  React.useEffect(() => {
    (async () => {
      const provider = (await AsyncStorage.getItem(
        'signed-in-provider',
      )) as Providers | null;

      setSignedInProvider(provider);
    })();
  }, []);

  async function signInWithProvider(provider: Providers | null) {
    if (provider == null) {
      await AsyncStorage.removeItem('signed-in-provider');
    } else {
      await AsyncStorage.setItem('signed-in-provider', provider);
    }

    setSignedInProvider(provider);
  }

  return (
    <SignedInProviderContext.Provider
      value={{signedInProvider, signInWithProvider}}>
      {children}
    </SignedInProviderContext.Provider>
  );
}
