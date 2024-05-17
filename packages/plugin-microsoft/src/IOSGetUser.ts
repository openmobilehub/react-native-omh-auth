import type {AuthData, OmhUserProfile} from '@openmobilehub/auth-core';
import axios from 'redaxios';

function blobToBase64(blob: Blob): Promise<string> {
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.readAsDataURL(blob);
  });
}

async function getUserPicture(pictureUrl: string, accessToken: string) {
  try {
    const {data} = await axios.get(pictureUrl, {
      auth: `Bearer ${accessToken}`,
      responseType: 'blob',
    });

    return await blobToBase64(data);
  } catch (error: any) {
    throw new Error("Couldn't fetch user picture.");
  }
}

export default async function IOSGetUser(
  getAuthData: () => AuthData,
): Promise<OmhUserProfile> {
  const authData = getAuthData();

  try {
    const {data: user} = await axios.get(
      'https://graph.microsoft.com/oidc/userinfo',
      {
        auth: `Bearer ${authData.accessToken}`,
      },
    );

    let picture: string | undefined;

    picture = await getUserPicture(user.picture, authData.accessToken);

    return {
      name: user.givenname,
      surname: user.familyname,
      email: user.email,
      profileImage: picture,
    };
  } catch (error: any) {
    if (error.data?.error?.message) {
      throw new Error(error.data.error.message);
    } else {
      throw error;
    }
  }
}
