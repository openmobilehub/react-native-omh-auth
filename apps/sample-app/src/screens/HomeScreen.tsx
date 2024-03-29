import React, {useContext} from 'react';
import {Button, StyleSheet, View} from 'react-native';

import {initialize, signIn} from '@omh/react-native-auth-google';

import {SignedInProviderContext} from '@/app/SignedInProvider';

export default function HomeScreen() {
  const {signInWithProvider} = useContext(SignedInProviderContext);

  async function onGoogleSignIn() {
    await initialize();

    await signIn();

    signInWithProvider('google');
  }

  return (
    <View style={styles.container}>
      <Button onPress={onGoogleSignIn} title="Sign in with Google" />
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
