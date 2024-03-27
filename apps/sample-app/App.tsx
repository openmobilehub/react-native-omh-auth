import * as React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

import {login} from '@omh/react-native-auth-google';

export default function App() {
  const [loggedIn, setLoggedIn] = React.useState<boolean>(false);

  function onGoogleLogin() {
    login().then(() => setLoggedIn(true));
  }

  return (
    <View style={styles.container}>
      <Text>Logged in: {loggedIn.toString()}</Text>

      <Button onPress={onGoogleLogin} title="Google Login" />
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
