export interface UserProfile {
  id: number;
  name: string;
  email?: string;
  bio?: string;
  avatar?: string;
};

export interface User extends Partial<UserProfile> {
  phoneNumber: string;
  dateJoined: string;
};
