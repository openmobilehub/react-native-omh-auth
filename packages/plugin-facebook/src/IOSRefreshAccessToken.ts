import type {AuthData} from '@openmobilehub/auth-core';
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
          client_id: process.env.FACEBOOK_CLIENT_ID!,
          client_secret: process.env.FACEBOOK_CLIENT_SECRET!,
          grant_type: 'fb_exchange_token',
          fb_exchange_token: authData.accessToken,
        },
      },
    );

    const accessToken = request.data.access_token;

    const accessTokenExpirationDate = new Date(
      Date.now() + request.data.expires_in * 1000,
    ).toISOString();

    return {accessToken, accessTokenExpirationDate};
  } catch (error: any) {
    if (error.data.error?.message) {
      throw new Error(error.data.error.message);
    } else {
      throw error;
    }
  }
}
