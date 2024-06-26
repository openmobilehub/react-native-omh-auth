import type {AuthConfig, AuthData} from '@openmobilehub/auth-core';
import axios from 'redaxios';

export default async function IOSRefreshAccessToken(
  getConfig: () => AuthConfig,
  getAuthData: () => AuthData,
) {
  const config = getConfig();
  const authData = getAuthData();

  const formData = new FormData();

  formData.append('grant_type', 'refresh_token');
  formData.append('refresh_token', authData.refreshToken);
  formData.append('client_id', config.clientId);
  formData.append('client_secret', config.clientSecret!);

  try {
    const request = await axios.post(
      'https://api.dropboxapi.com/oauth2/token',
      formData,
    );

    const accessToken = request.data.access_token;

    const accessTokenExpirationDate = new Date(
      Date.now() + request.data.expires_in * 1000,
    ).toISOString();

    return {accessToken, accessTokenExpirationDate};
  } catch (error: any) {
    if (error.data.error?.['.tag']) {
      throw new Error(error.data.error['.tag']);
    } else if (error.data.error_description) {
      throw new Error(error.data.error_description);
    } else {
      throw error;
    }
  }
}
