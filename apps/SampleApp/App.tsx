import * as React from 'react';
import {} from 'react-native';

import {StyleSheet, View, Text} from 'react-native';
import {multiply} from '@omh-auth/plugin-google';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    multiply(3, 2).then(setResult);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
