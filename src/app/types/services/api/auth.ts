import { ContactObject, User, UserProfile } from "../../modules/auth"
import { UpdateProfileSagaArgs } from "../../store";


export interface UserAPIObject extends UserProfile {
  phone: string;
  date_joined: string;
};

export interface SignInRequestPayload {
  firebase_id: string;
  phone: string;
};

export interface SignInResponseBody {
  user: UserAPIObject;
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

export interface UpdateProfileResponseBody extends UserAPIObject { };

export interface UpdateProfileHandlerArgs extends UpdateProfileSagaArgs { };

export interface UpdateProfileSerializedResponseBody extends User { };

export interface FetchUserProfilesRequestPayload {
  phone_numbers: string[];
};

export interface FetchUserProfilesResponseBody {
  [id: string]: UserAPIObject;
};

export interface FetchUserProfilesHandlerArgs {
  phoneNumbers: string[];
};

export interface FetchUserProfilesSerializedResponseBody {
  [id: string]: ContactObject;
};

export type SignInRequestSerializer = (payload: SignInHandlerArgs) => SignInRequestPayload;
export type SignInResponseSerializer = (body: SignInResponseBody) => SignInSerializedResponseBody;
export type SignInHandler = (payload: SignInHandlerArgs) => Promise<SignInSerializedResponseBody>;
export type UpdateProfileRequestSerializer = (payload: UpdateProfileRequestPayload) => FormData;
export type UpdateProfileResponseSerializer = (body: UpdateProfileResponseBody) => UpdateProfileSerializedResponseBody;
export type UpdateProfileHandler = (payload: UpdateProfileHandlerArgs) => Promise<UpdateProfileSerializedResponseBody>;
export type FetchUserProfilesRequestSerializer = (payload: FetchUserProfilesHandlerArgs) => FetchUserProfilesRequestPayload;
export type FetchUserProfilesResponseSerializer = (body: FetchUserProfilesResponseBody) => FetchUserProfilesSerializedResponseBody;
export type FetchUserProfilesHandler = (payload: FetchUserProfilesHandlerArgs) => Promise<FetchUserProfilesSerializedResponseBody>;
