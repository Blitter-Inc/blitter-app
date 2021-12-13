import { ImageSourcePropType } from "react-native";


export interface UserProfileObject {
  id: number;
  name: string;
  email?: string;
  bio?: string;
  avatar?: string;
};

export interface UserObject extends UserProfileObject {
  phoneNumber: string;
  dateJoined: string;
};

export interface AvatarSourceValue {
  uri: string;
  name?: string;
  type?: string;
  fromState?: boolean;
};

export interface UserProfileInput extends Omit<UserProfileObject, "id" | "avatar"> {
  avatar?: ImageSourcePropType | AvatarSourceValue;
};

export function isAvatarFormDataValue(object: any): boolean {
  return (object instanceof Object && 'uri' in object) && 'type' in object;
};
