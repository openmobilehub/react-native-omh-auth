import type {AuthData} from '@openmobilehub/auth-core';
import axios from 'redaxios';

export default async function IOSGetUser(getAuthData: () => AuthData) {
  const authData = getAuthData();

  try {
    const request = await axios.post(
      'https://api.dropboxapi.com/2/users/get_account',
      {
        account_id: authData.tokenAdditionalParameters?.account_id,
      },
      {
        auth: `Bearer ${authData.accessToken}`,
      },
    );

    return {
      name: request.data.name.given_name,
      surname: request.data.name.surname,
      email: request.data.email,
      profileImage: request.data.profile_photo_url,
    };
  } catch (error: any) {
    if (error.data.error?.['.tag']) {
      throw new Error(error.data.error['.tag']);
    } else if (error.data.error_description) {
      throw new Error(error.data.error_description);
    } else if (error.data) {
      throw new Error(error.data);
    } else {
      throw error;
    }
  }
}
