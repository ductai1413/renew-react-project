export type UserProps = {
  icon: string;
  name: string;
  email: string;
  fullName: string;
};

export type UserProfileProps = UserProps & {
  userRole: string;
  addressName: string;
};
