import {AuthData} from '@omh/react-native-auth-core';
import axios from 'redaxios';

export default async function IOSRefreshAccessToken(
  getAuthData: () => AuthData,
) {
  const authData = getAuthData();

  try {
    const request = await axios.get(
      'https://graph.facebook.com/oauth/access_token',
      {
        params: {
          client_id: process.env.FACEBOOK_APP_ID!,
          client_secret: process.env.FACEBOOK_APP_SECRET!,
          grant_type: 'fb_exchange_token',
          fb_exchange_token: authData.accessToken,
        },
      },
    );

    return request.data.access_token;
  } catch (error: any) {
    if (error.data.error?.message) {
      throw new Error(error.data.error.message);
    } else {
      throw error;
    }
  }
}
