import { User, UserProfile, UpdateProfileSagaArgs } from "../../store";


export interface UserObject extends UserProfile {
  phone: string;
  date_joined: string;
};

export interface SignInRequestPayload {
  firebase_id: string;
  phone: string;
};

export interface SignInResponseBody {
  user: UserObject;
  access_token: string;
  refresh_token: string;
  is_new_user: boolean;
};

export interface SignInHandlerArgs {
  phoneNumber: string;
  firebaseId: string;
};

export interface SignInSerializedResponseBody {
  accessToken: string;
  refreshToken: string;
  user: User;
};

export interface UpdateProfileRequestPayload extends Omit<UpdateProfileSagaArgs, "id"> { };

export interface UpdateProfileResponseBody extends UserObject { };

export interface UpdateProfileHandlerArgs extends UpdateProfileSagaArgs {
  id: number;
};

export interface UpdateProfileSerializedResponseBody extends User { };

export type SignInRequestSerializer = (payload: SignInHandlerArgs) => SignInRequestPayload;
export type SignInResponseSerializer = (body: SignInResponseBody) => SignInSerializedResponseBody;
export type SignInHandler = (payload: SignInHandlerArgs) => Promise<SignInSerializedResponseBody>;
export type UpdateProfileRequestSerializer = (payload: UpdateProfileRequestPayload) => FormData;
export type UpdateProfileResponseSerializer = (body: UpdateProfileResponseBody) => UpdateProfileSerializedResponseBody;
export type UpdateProfileHandler = (payload: UpdateProfileHandlerArgs) => Promise<UpdateProfileSerializedResponseBody>;
