import {AuthData} from '@omh/react-native-auth-core';
import axios from 'redaxios';

export default async function IOSGetUser(getAuthData: () => AuthData) {
  const authData = getAuthData();

  try {
    const userRequest = await axios.get(
      'https://www.googleapis.com/oauth2/v1/userinfo',
      {
        auth: `Bearer ${authData.accessToken}`,
      },
    );

    return {
      name: userRequest.data.name,
      surname: userRequest.data.family_name,
      email: userRequest.data.email,
      profileImage: userRequest.data.picture,
    };
  } catch (error: any) {
    if (error.data.error?.message) {
      throw new Error(error.data.error.message);
    }
  }
}
