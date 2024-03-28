import * as React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

import {signIn} from '@omh/react-native-auth-google';

export default function App() {
  const [signedIn, setSignedIn] = React.useState<boolean>(false);

  function onGoogleSignIn() {
    signIn().then(() => setSignedIn(true));
  }

  return (
    <View style={styles.container}>
      <Text>Signed in: {signedIn.toString()}</Text>

      <Button onPress={onGoogleSignIn} title="Google Sign in" />
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
