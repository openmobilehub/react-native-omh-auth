import type {AuthData} from '@openmobilehub/auth-core';
import axios from 'redaxios';

export default async function IOSGetUser(getAuthData: () => AuthData) {
  const authData = getAuthData();

  try {
    const request = await axios.get('https://graph.facebook.com/me', {
      params: {
        fields: 'first_name,last_name,email,picture',
        access_token: authData.accessToken,
      },
    });

    return {
      name: request.data.first_name,
      surname: request.data.last_name,
      email: request.data.email,
      profileImage: request.data.picture.data.url,
    };
  } catch (error: any) {
    if (error.data.error?.message) {
      throw new Error(error.data.error.message);
    } else {
      throw error;
    }
  }
}
