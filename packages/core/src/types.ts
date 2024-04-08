export type BaseAuthConfig = {
  scopes: Array<string>;
};

export type OmhUserProfile = {
  name?: string;
  surname?: string;
  email?: string;
  profileImage?: string;
};
