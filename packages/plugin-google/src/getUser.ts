import {AuthData} from '@omh/react-native-auth-core';

const GOOGLE_USERINFO_URL = 'https://www.googleapis.com/oauth2/v1/userinfo';

export default async function getUser(getAuthData: () => AuthData) {
  const authData = getAuthData();

  const userInfoRequest = await fetch(GOOGLE_USERINFO_URL, {
    headers: {
      Authorization: `Bearer ${authData.accessToken}`,
    },
  });

  const user = await userInfoRequest.json();

  return {
    name: user.given_name,
    surname: user.family_name,
    email: user.email,
    profileImage: user.picture,
  };
}
