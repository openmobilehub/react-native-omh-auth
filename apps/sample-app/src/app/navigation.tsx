import React, {useContext} from 'react';

import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SignedInProviderContext} from '@/app/SignedInProvider';
import HomeScreen from '@/screens/HomeScreen';
import SignedInScreen from '@/screens/SignedInScreen';

export type RootStackParamList = {
  Home: undefined;
  SignedIn: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

function RootStack() {
  const {signedInProvider} = useContext(SignedInProviderContext);
  const signedInProviderName = signedInProvider
    ? signedInProvider.charAt(0).toUpperCase() + signedInProvider.slice(1)
    : '';

  return (
    <Stack.Navigator>
      {!signedInProvider ? (
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Sign in'}}
        />
      ) : (
        <Stack.Screen
          name="SignedIn"
          component={SignedInScreen}
          options={{
            title: signedInProviderName,
          }}
        />
      )}
    </Stack.Navigator>
  );
}

export default function RootNavigationContainer() {
  return (
    <NavigationContainer theme={MyTheme}>
      <RootStack />
    </NavigationContainer>
  );
}
