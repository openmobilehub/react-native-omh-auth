import {AuthData} from '@openmobilehub/auth-core';
import axios from 'redaxios';

export default async function IOSGetUser(getAuthData: () => AuthData) {
  const authData = getAuthData();

  try {
    const request = await axios.get(
      'https://www.googleapis.com/oauth2/v1/userinfo',
      {
        auth: `Bearer ${authData.accessToken}`,
      },
    );

    return {
      name: request.data.name,
      surname: request.data.family_name,
      email: request.data.email,
      profileImage: request.data.picture,
    };
  } catch (error: any) {
    if (error.data.error?.message) {
      throw new Error(error.data.error.message);
    } else {
      throw error;
    }
  }
}
