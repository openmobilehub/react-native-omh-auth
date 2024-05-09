import {AuthData} from '@omh/react-native-auth-core';
import axios from 'redaxios';

export default async function IOSRevokeAccessToken(
  getAuthData: () => AuthData,
) {
  const authData = getAuthData();

  try {
    const {
      data: {id: userId},
    } = await axios.get('https://graph.facebook.com/me', {
      params: {
        access_token: authData.accessToken,
      },
    });

    await axios.delete(`https://graph.facebook.com/${userId}/permissions`, {
      params: {
        access_token: authData.accessToken,
      },
    });
  } catch (error: any) {
    if (error.data.error?.message) {
      throw new Error(error.data.error.message);
    } else {
      throw error;
    }
  }
}
