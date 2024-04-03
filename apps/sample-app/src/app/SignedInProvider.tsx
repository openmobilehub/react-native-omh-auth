import React from 'react';

import * as FacebookAuth from '@omh/react-native-auth-facebook';
import * as GoogleAuth from '@omh/react-native-auth-google';
import AsyncStorage from '@react-native-async-storage/async-storage';

type SignedInProviderContextValue = {
  signedInProvider: string | null;
  signInWithProvider: (provider: string | null) => void;
};

export const SignedInProviderContext =
  React.createContext<SignedInProviderContextValue>({
    signedInProvider: null,
    signInWithProvider: (_: string | null) => {},
  });

export const getAuthProvider = (provider: string | null) => {
  switch (provider) {
    case 'google':
      return GoogleAuth;
    case 'facebook':
      return FacebookAuth;
    default:
      throw new Error('No provider selected');
  }
};

export default function SignedInProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [signedInProvider, setSignedInProvider] = React.useState<string | null>(
    null,
  );

  React.useEffect(() => {
    AsyncStorage.getItem('signed-in-provider').then(setSignedInProvider);
  }, []);

  function signInWithProvider(provider: string | null) {
    AsyncStorage.setItem('signed-in-provider', provider ?? '').then(() =>
      setSignedInProvider(provider),
    );
  }

  return (
    <SignedInProviderContext.Provider
      value={{signedInProvider, signInWithProvider}}>
      {children}
    </SignedInProviderContext.Provider>
  );
}
