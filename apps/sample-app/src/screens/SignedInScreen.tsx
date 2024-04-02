import React from 'react';
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from 'react-native';

import {
  getAccessToken,
  getUser,
  refreshAccessToken,
  revokeAccessToken,
  signOut,
  type OmhUserProfile,
} from '@omh/react-native-auth-google';

import {SignedInProviderContext} from '@/app/SignedInProvider';

export default function SignedInScreen() {
  const {signInWithProvider} = React.useContext(SignedInProviderContext);

  const [accessToken, setAccessToken] = React.useState<string | undefined>();
  const [userProfile, setUserProfile] = React.useState<
    OmhUserProfile | undefined
  >();

  React.useEffect(() => {
    onGetAccessToken();
    onGetUser();
  }, []);

  async function onGetAccessToken() {
    try {
      const currentAccessToken = await getAccessToken();

      setAccessToken(currentAccessToken);

      ToastAndroid.show('Get Access Token', ToastAndroid.SHORT);
    } catch (error: any) {
      Alert.alert('Error', error?.message);
    }
  }

  async function onGetUser() {
    try {
      const currentUserProfile = await getUser();

      setUserProfile(currentUserProfile);

      ToastAndroid.show('Get User', ToastAndroid.SHORT);
    } catch (error: any) {
      Alert.alert('Error', error?.message);
    }
  }

  async function onRefreshAccessToken() {
    try {
      const currentAccessToken = await refreshAccessToken();

      setAccessToken(currentAccessToken);

      ToastAndroid.show('Refresh Access Token', ToastAndroid.SHORT);
    } catch (error: any) {
      Alert.alert('Error', error?.message);
    }
  }

  async function onRevokeAccessToken() {
    try {
      await revokeAccessToken();

      ToastAndroid.show('Revoke Access Token', ToastAndroid.SHORT);
    } catch (error: any) {
      Alert.alert('Error', error?.message);
    }
  }

  async function onSignOut() {
    try {
      await signOut();

      signInWithProvider(null);

      ToastAndroid.show('Sign Out', ToastAndroid.SHORT);
    } catch (error: any) {
      Alert.alert('Error', error?.message);
    }
  }

  const profileImage =
    userProfile?.profileImage ??
    'https://www.btklsby.go.id/images/placeholder/avatar.png';

  return (
    <View style={styles.container}>
      <View style={styles.userProfileContainer}>
        <Image style={styles.userProfileImage} source={{uri: profileImage}} />

        <View style={styles.userProfileContents}>
          <Text>Name: {userProfile?.name}</Text>

          <Text>Surname: {userProfile?.surname}</Text>

          <Text>Email: {userProfile?.email}</Text>

          <Text>Token:</Text>
        </View>
      </View>

      <Text>{accessToken}</Text>

      <View style={styles.actionButtons}>
        <Button onPress={onGetAccessToken} title="Get access token" />

        <Button onPress={onGetUser} title="Get user" />

        <Button onPress={onRefreshAccessToken} title="Refresh access token" />

        <Button onPress={onRevokeAccessToken} title="Revoke access token" />

        <Button onPress={onSignOut} title="Sign out" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    rowGap: 5,
  },
  userProfileContainer: {
    flexDirection: 'row',
  },
  userProfileImage: {
    width: 100,
    aspectRatio: 1,
  },
  userProfileContents: {
    justifyContent: 'space-between',
    marginHorizontal: 5,
  },
  actionButtons: {
    marginTop: 'auto',
    alignItems: 'flex-start',
    rowGap: 7.5,
  },
});
