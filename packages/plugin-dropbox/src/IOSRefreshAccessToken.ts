import {AuthData} from '@omh/react-native-auth-core';
import axios from 'redaxios';

export default async function IOSRefreshAccessToken(
  getAuthData: () => AuthData,
) {
  const authData = getAuthData();

  const formData = new FormData();

  formData.append('grant_type', 'refresh_token');
  formData.append('refresh_token', authData.refreshToken);
  formData.append('client_id', process.env.DROPBOX_CLIENT_ID!);
  formData.append('client_secret', process.env.DROPBOX_CLIENT_SECRET!);

  try {
    const refreshAccessTokenRequest = await axios.post(
      'https://api.dropboxapi.com/oauth2/token',
      formData,
    );

    const newAccessToken = refreshAccessTokenRequest.data.access_token;

    return newAccessToken;
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
