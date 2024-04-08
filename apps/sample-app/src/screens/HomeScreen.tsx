import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

import {
  getAuthProvider,
  PROVIDER_NAMES,
  SignedInProviderContext,
} from '@/app/SignedInProvider';

export default function HomeScreen() {
  const {signInWithProvider} = React.useContext(SignedInProviderContext);

  async function onGoogleSignIn() {
    const googleAuthProvider = await getAuthProvider(PROVIDER_NAMES.GOOGLE);

    await googleAuthProvider.signIn();

    signInWithProvider(PROVIDER_NAMES.GOOGLE);
  }

  async function onFacebookSignIn() {
    const facebookAuthProvider = await getAuthProvider(PROVIDER_NAMES.FACEBOOK);

    await facebookAuthProvider.signIn();

    signInWithProvider(PROVIDER_NAMES.FACEBOOK);
  }

  async function onDropboxSignIn() {
    const dropboxAuthProvider = await getAuthProvider(PROVIDER_NAMES.DROPBOX);

    await dropboxAuthProvider.signIn();

    signInWithProvider(PROVIDER_NAMES.DROPBOX);
  }

  async function onMicrosoftSignIn() {
    const microsoftAuthProvider = await getAuthProvider(
      PROVIDER_NAMES.MICROSOFT,
    );

    await microsoftAuthProvider.signIn();

    signInWithProvider(PROVIDER_NAMES.MICROSOFT);
  }

  return (
    <View style={styles.container}>
      <Button onPress={onGoogleSignIn} title="Sign in with Google" />
      <Button onPress={onFacebookSignIn} title="Sign in with Facebook" />
      <Button onPress={onDropboxSignIn} title="Sign in with Dropbox" />
      <Button onPress={onMicrosoftSignIn} title="Sign in with Microsoft" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 20,
  },
});
