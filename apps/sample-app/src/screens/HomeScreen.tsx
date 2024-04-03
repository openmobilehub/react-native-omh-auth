import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

import * as FacebookAuth from '@omh/react-native-auth-facebook';
import * as GoogleAuth from '@omh/react-native-auth-google';

import {SignedInProviderContext} from '@/app/SignedInProvider';

export default function HomeScreen() {
  const {signInWithProvider} = React.useContext(SignedInProviderContext);

  async function onGoogleSignIn() {
    await GoogleAuth.initialize(['openid', 'email', 'profile']);

    await GoogleAuth.signIn();

    signInWithProvider('google');
  }

  async function onFacebookSignIn() {
    await FacebookAuth.initialize(['public_profile', 'email']);

    await FacebookAuth.signIn();

    signInWithProvider('facebook');
  }

  return (
    <View style={styles.container}>
      <Button onPress={onGoogleSignIn} title="Sign in with Google" />
      <Button onPress={onFacebookSignIn} title="Sign in with Facebook" />
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
