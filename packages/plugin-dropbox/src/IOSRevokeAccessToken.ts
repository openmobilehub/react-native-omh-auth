import type {AuthData} from '@openmobilehub/auth-core';
import axios from 'redaxios';

export default async function IOSRevokeAccessToken(
  getAuthData: () => AuthData,
) {
  const authData = getAuthData();

  try {
    await axios.post('https://api.dropboxapi.com/2/auth/token/revoke', null, {
      auth: `Bearer ${authData.accessToken}`,
    });
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
