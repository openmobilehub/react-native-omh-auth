import React from 'react';

import DropboxAuth from '@omh/react-native-auth-dropbox';
import FacebookAuth from '@omh/react-native-auth-facebook';
import GoogleAuth from '@omh/react-native-auth-google';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const PROVIDER_NAMES = {
  GOOGLE: 'google',
  FACEBOOK: 'facebook',
  DROPBOX: 'dropbox',
} as const;

type ObjectValues<T> = T[keyof T];

export type Providers = ObjectValues<typeof PROVIDER_NAMES>;

export const getAuthProvider = async (provider: Providers) => {
  switch (provider) {
    case PROVIDER_NAMES.GOOGLE:
      await GoogleAuth.initialize(['openid', 'email', 'profile']);
      return GoogleAuth;
    case PROVIDER_NAMES.FACEBOOK:
      await FacebookAuth.initialize(['public_profile', 'email']);
      return FacebookAuth;
    case PROVIDER_NAMES.DROPBOX:
      await DropboxAuth.initialize(['account_info.read']);
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
