import {AuthData, OmhUserProfile} from '@omh/react-native-auth-core';

function blobToBase64(blob: Blob): Promise<string> {
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.readAsDataURL(blob);
  });
}

async function getUserPicture(pictureUrl: string, accessToken: string) {
  const pictureRequest = await fetch(pictureUrl, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const picture = await pictureRequest.blob();
  return await blobToBase64(picture);
}

export default async function getUser(
  getAuthData: () => AuthData,
): Promise<OmhUserProfile> {
  const authData = getAuthData();
  const userInfoRequest = await fetch(
    'https://graph.microsoft.com/oidc/userinfo',
    {
      headers: {
        Authorization: `Bearer ${authData.accessToken}`,
      },
    },
  );

  const user = await userInfoRequest.json();
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
