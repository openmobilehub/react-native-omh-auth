import React from 'react';
import {Alert, Button, StyleSheet, View} from 'react-native';

import {
  getAuthProvider,
  PROVIDER_NAMES,
  SignedInProviderContext,
  type Providers,
} from '@/app/SignedInProvider';

export default function HomeScreen() {
  const {signInWithProvider} = React.useContext(SignedInProviderContext);

  async function onSignIn(PROVIDER_NAME: Providers) {
    try {
      const googleAuthProvider = await getAuthProvider(PROVIDER_NAME);

      await googleAuthProvider.signIn();

      signInWithProvider(PROVIDER_NAME);
    } catch (error: any) {
      Alert.alert('Error', error?.message);
    }
  }

  return (
    <View style={styles.container}>
      <Button
        onPress={() => onSignIn(PROVIDER_NAMES.GOOGLE)}
        title="Sign in with Google"
        testID="sign-in-google"
      />
      <Button
        onPress={() => onSignIn(PROVIDER_NAMES.FACEBOOK)}
        title="Sign in with Facebook"
        testID="sign-in-facebook"
      />
      <Button
        onPress={() => onSignIn(PROVIDER_NAMES.MICROSOFT)}
        title="Sign in with Microsoft"
        testID="sign-in-microsoft"
      />
      <Button
        onPress={() => onSignIn(PROVIDER_NAMES.DROPBOX)}
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
