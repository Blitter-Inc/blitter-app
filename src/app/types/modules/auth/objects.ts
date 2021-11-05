import { ImageSourcePropType } from "react-native";


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

export interface ContactObject extends UserProfile {
  phoneNumber: string;
  dateJoined: string;
};

export interface AvatarStateSourceValue {
  uri: string;
  fromState: boolean;
};

export interface AvatarSelectedSourceValue {
  uri: string;
  name: string;
  type: string;
};

export interface Profile extends Omit<Partial<UserProfile>, "avatar"> {
  avatar?: FormDataEntryValue | AvatarStateSourceValue | AvatarSelectedSourceValue | ImageSourcePropType;
};
