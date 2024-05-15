import {AuthData, OmhUserProfile} from '@openmobilehub/auth-core';
import axios from 'redaxios';

function blobToBase64(blob: Blob): Promise<string> {
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.readAsDataURL(blob);
  });
}

async function getUserPicture(pictureUrl: string, accessToken: string) {
  const {data} = await axios.get(pictureUrl, {
    responseType: 'blob',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return await blobToBase64(data);
}

export default async function IOSGetUser(
  getAuthData: () => AuthData,
): Promise<OmhUserProfile> {
  const authData = getAuthData();
  const {data: user} = await axios.get(
    'https://graph.microsoft.com/oidc/userinfo',
    {
      headers: {
        Authorization: `Bearer ${authData.accessToken}`,
      },
    },
  );

  let picture: string | undefined;

  try {
    picture = await getUserPicture(user.picture, authData.accessToken);
  } catch (e) {
    console.error('Error getting user picture:', e);
  }

  return {
    name: user.givenname,
    surname: user.familyname,
    email: user.email,
    profileImage: picture,
  };
}
