import React from 'react';
import {Alert, Button, StyleSheet, View} from 'react-native';

import {
  getAuthProvider,
  PROVIDER_NAMES,
  SignedInProviderContext,
} from '@/app/SignedInProvider';

export default function HomeScreen() {
  const {signInWithProvider} = React.useContext(SignedInProviderContext);

  async function onGoogleSignIn() {
    const googleAuthProvider = await getAuthProvider(PROVIDER_NAMES.GOOGLE);

    try {
      await googleAuthProvider.signIn();

      signInWithProvider(PROVIDER_NAMES.GOOGLE);
    } catch (error: any) {
      Alert.alert('Error', error?.message);
    }
  }

  async function onFacebookSignIn() {
    const facebookAuthProvider = await getAuthProvider(PROVIDER_NAMES.FACEBOOK);

    try {
      await facebookAuthProvider.signIn();

      signInWithProvider(PROVIDER_NAMES.FACEBOOK);
    } catch (error: any) {
      Alert.alert('Error', error?.message);
    }
  }

  async function onDropboxSignIn() {
    const dropboxAuthProvider = await getAuthProvider(PROVIDER_NAMES.DROPBOX);

    try {
      await dropboxAuthProvider.signIn();

      signInWithProvider(PROVIDER_NAMES.DROPBOX);
    } catch (error: any) {
      Alert.alert('Error', error?.message);
    }
  }

  async function onMicrosoftSignIn() {
    const microsoftAuthProvider = await getAuthProvider(
      PROVIDER_NAMES.MICROSOFT,
    );

    try {
      await microsoftAuthProvider.signIn();

      signInWithProvider(PROVIDER_NAMES.MICROSOFT);
    } catch (error: any) {
      Alert.alert('Error', error?.message);
    }
  }

  return (
    <View style={styles.container}>
      <Button
        onPress={onGoogleSignIn}
        title="Sign in with Google"
        testID="sign-in-google"
      />
      <Button
        onPress={onFacebookSignIn}
        title="Sign in with Facebook"
        testID="sign-in-facebook"
      />
      <Button
        onPress={onMicrosoftSignIn}
        title="Sign in with Microsoft"
        testID="sign-in-microsoft"
      />
      <Button
        onPress={onDropboxSignIn}
        title="Sign in with Dropbox"
        testID="sign-in-dropbox"
      />
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
