import React, {useContext} from 'react';
import {Button, StyleSheet, View} from 'react-native';

import {
  getAccessToken,
  getUser,
  refreshAccessToken,
  revokeAccessToken,
  signOut,
} from '@omh/react-native-auth-google';

import {SignedInProviderContext} from '@/app/SignedInProvider';

export default function SignedInScreen() {
  const {signInWithProvider} = useContext(SignedInProviderContext);

  function onGetAccessToken() {
    getAccessToken().then(accessToken => console.log(accessToken));
  }

  function onGetUser() {
    getUser().then(userProfile => console.log(userProfile));
  }

  function onRefreshAccessToken() {
    refreshAccessToken().then(accessToken => console.log(accessToken));
  }

  function onRevokeAccessToken() {
    revokeAccessToken();
  }

  async function onSignOut() {
    await signOut();

    signInWithProvider(null);
  }

  return (
    <View style={styles.container}>
      <Button onPress={onGetAccessToken} title="Get access token" />

      <Button onPress={onGetUser} title="Get user" />

      <Button onPress={onRefreshAccessToken} title="Refresh access token" />

      <Button onPress={onRevokeAccessToken} title="Revoke access token" />

      <Button onPress={onSignOut} title="Sign out" />
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
