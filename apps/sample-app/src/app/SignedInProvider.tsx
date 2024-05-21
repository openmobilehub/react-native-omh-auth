import React from 'react';
import {Platform} from 'react-native';

import DropboxAuth from '@openmobilehub/auth-dropbox';
import FacebookAuth from '@openmobilehub/auth-facebook';
import GoogleAuth from '@openmobilehub/auth-google';
import MicrosoftAuth from '@openmobilehub/auth-microsoft';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const PROVIDER_NAMES = {
  GOOGLE: 'google',
  FACEBOOK: 'facebook',
  MICROSOFT: 'microsoft',
  DROPBOX: 'dropbox',
} as const;

type ObjectValues<T> = T[keyof T];

export type Providers = ObjectValues<typeof PROVIDER_NAMES>;

export async function getAuthProvider(provider: Providers) {
  switch (provider) {
    case PROVIDER_NAMES.GOOGLE:
      if (Platform.OS === 'ios' && !process.env.GOOGLE_CLIENT_ID) {
        throw new Error('`GOOGLE_CLIENT_ID` not set in .env');
      }

      await GoogleAuth.initialize({
        android: {
          scopes: ['openid', 'profile', 'email'],
        },
        ios: {
          scopes: ['openid', 'profile', 'email'],
          clientId: process.env.GOOGLE_CLIENT_ID,
          redirectUrl: `com.googleusercontent.apps.${
            process.env.GOOGLE_CLIENT_ID?.split('.')[0]
          }:/oauth2redirect/google`,
        },
      });
      return GoogleAuth;
    case PROVIDER_NAMES.FACEBOOK:
      if (Platform.OS === 'ios' && !process.env.FACEBOOK_CLIENT_ID) {
        throw new Error('`FACEBOOK_CLIENT_ID` not set in .env');
      } else if (Platform.OS === 'ios' && !process.env.FACEBOOK_CLIENT_SECRET) {
        throw new Error('`FACEBOOK_CLIENT_SECRET` not set in .env');
      }

      await FacebookAuth.initialize({
        android: {
          scopes: ['public_profile', 'email'],
        },
        ios: {
          scopes: ['public_profile', 'email'],
          clientId: process.env.FACEBOOK_CLIENT_ID,
          clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
          redirectUrl: `fb${process.env.FACEBOOK_CLIENT_ID}://authorize/`,
        },
      });
      return FacebookAuth;
    case PROVIDER_NAMES.MICROSOFT:
      if (Platform.OS === 'ios' && !process.env.MICROSOFT_CLIENT_ID) {
        throw new Error('`MICROSOFT_CLIENT_ID` not set in .env');
      }

      await MicrosoftAuth.initialize({
        android: {
          scopes: ['User.Read'],
          configFileName: 'ms_auth_config',
        },
        ios: {
          scopes: ['User.Read', 'openid', 'profile', 'email', 'offline_access'],
          clientId: process.env.MICROSOFT_CLIENT_ID,
          redirectUrl: 'msauth.com.omh.auth.sample://auth/',
        },
      });
      return MicrosoftAuth;
    case PROVIDER_NAMES.DROPBOX:
      if (Platform.OS === 'ios' && !process.env.DROPBOX_CLIENT_ID) {
        throw new Error('`DROPBOX_CLIENT_ID` not set in .env');
      } else if (Platform.OS === 'ios' && !process.env.DROPBOX_CLIENT_SECRET) {
        throw new Error('`DROPBOX_CLIENT_SECRET` not set in .env');
      }

      await DropboxAuth.initialize({
        android: {
          scopes: ['account_info.read', 'sharing.read'],
        },
        ios: {
          scopes: ['account_info.read', 'sharing.read'],
          clientId: process.env.DROPBOX_CLIENT_ID,
          clientSecret: process.env.DROPBOX_CLIENT_SECRET,
          redirectUrl: 'com.omh.auth.sample://oauth',
        },
      });
      return DropboxAuth;
  }
}

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
