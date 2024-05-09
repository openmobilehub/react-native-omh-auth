import React from 'react';

import DropboxAuth from '@omh/react-native-auth-dropbox';
import FacebookAuth from '@omh/react-native-auth-facebook';
import GoogleAuth from '@omh/react-native-auth-google';
import MicrosoftAuth from '@omh/react-native-auth-microsoft';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const PROVIDER_NAMES = {
  GOOGLE: 'google',
  FACEBOOK: 'facebook',
  MICROSOFT: 'microsoft',
  DROPBOX: 'dropbox',
} as const;

type ObjectValues<T> = T[keyof T];

export type Providers = ObjectValues<typeof PROVIDER_NAMES>;

export const getAuthProvider = async (provider: Providers) => {
  switch (provider) {
    case PROVIDER_NAMES.GOOGLE:
      await GoogleAuth.initialize({
        android: {
          scopes: ['openid', 'email', 'profile'],
        },
        ios: {
          scopes: ['openid', 'email', 'profile'],
          clientId: `${process.env.GOOGLE_APP_GUID}.apps.googleusercontent.com`,
          redirectUrl: `com.googleusercontent.apps.${process.env.GOOGLE_APP_GUID}:/oauth2redirect/google`,
        },
      });
      return GoogleAuth;
    case PROVIDER_NAMES.FACEBOOK:
      await FacebookAuth.initialize({
        android: {
          scopes: ['public_profile', 'email'],
        },
        ios: {
          scopes: ['public_profile', 'email'],
          clientId: process.env.FACEBOOK_CLIENT_ID!,
          clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
          redirectUrl: `fb${process.env.FACEBOOK_CLIENT_ID!}://authorize/`,
        },
      });
      return FacebookAuth;
    case PROVIDER_NAMES.MICROSOFT:
      await MicrosoftAuth.initialize({
        android: {
          scopes: ['User.Read'],
          configFileName: 'ms_auth_config',
        },
        ios: {
          scopes: ['openid', 'profile', 'email', 'offline_access', 'User.Read'],
          clientId: process.env.MICROSOFT_CLIENT_ID!,
          redirectUrl: 'msauth.com.omh.auth.sample://auth/',
        },
      });
      return MicrosoftAuth;
    case PROVIDER_NAMES.DROPBOX:
      await DropboxAuth.initialize({
        android: {
          scopes: ['account_info.read', 'sharing.read'],
        },
        ios: {
          scopes: ['account_info.read', 'sharing.read'],
          clientId: process.env.DROPBOX_APP_KEY!,
          clientSecret: process.env.DROPBOX_APP_SECRET!,
          redirectUrl: 'com.omh.auth.sample://oauth/',
        },
      });
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
