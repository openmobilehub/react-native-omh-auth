import type {AuthConfig, AuthData} from '@openmobilehub/auth-core';
import axios from 'redaxios';

export default async function IOSRefreshAccessToken(
  getConfig: () => AuthConfig,
  getAuthData: () => AuthData,
) {
  const config = getConfig();
  const authData = getAuthData();

  try {
    const request = await axios.get(
      'https://graph.facebook.com/oauth/access_token',
      {
        params: {
          client_id: config.clientId,
          client_secret: config.clientSecret,
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
