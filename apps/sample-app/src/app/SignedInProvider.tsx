import React from 'react';

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
