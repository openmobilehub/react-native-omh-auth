import {AuthData} from '@omh/react-native-auth-core';
import axios from 'redaxios';

export default async function IOSGetUser(getAuthData: () => AuthData) {
  const authData = getAuthData();

  try {
    const userRequest = await axios.post(
      'https://api.dropboxapi.com/2/users/get_account',
      {
        account_id: authData.tokenAdditionalParameters?.account_id,
      },
      {
        auth: `Bearer ${authData.accessToken}`,
      },
    );

    return {
      name: userRequest.data.name.given_name,
      surname: userRequest.data.name.surname,
      email: userRequest.data.email,
      profileImage: userRequest.data.profile_photo_url,
    };
  } catch (error: any) {
    if (error.data.error?.['.tag']) {
      throw new Error(error.data.error['.tag']);
    } else if (error.data.error_description) {
      throw new Error(error.data.error_description);
    }
  }
}
