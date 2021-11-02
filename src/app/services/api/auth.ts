import {
  FetchUserProfilesHandler,
  FetchUserProfilesRequestPayload,
  FetchUserProfilesResponseBody,
  SignInHandler,
  SignInRequestPayload,
  SignInResponseBody,
  UpdateProfileHandler,
  UpdateProfileResponseBody,
} from "$types/services/api";
import {
  fetchUserProfilesRequestSerializer,
  fetchUserProfilesResponseSerializer,
  signInRequestSerializer,
  signInResponseSerializer,
  updateProfileRequestSerializer,
  updateProfileResponseSerializer,
} from "$services/serializers";
import Client from "./client";


const URI = {
  signIn: () => "/user/login/",
  updateUser: () => "/user/update-profile/",
  fetchUserProfiles: () => "/user/fetch-profiles/",
};

export const signIn: SignInHandler = async args => {
  const { data } = await Client<SignInRequestPayload, SignInResponseBody>("post", URI.signIn(), signInRequestSerializer(args));
  return signInResponseSerializer(data);
};

export const updateUser: UpdateProfileHandler = async payload => {
  const { data } = await Client<FormData, UpdateProfileResponseBody>(
    "patch", URI.updateUser(),
    updateProfileRequestSerializer(payload),
    { headers: { "Content-Type": "multipart/form-data" } },
  );
  return updateProfileResponseSerializer(data);
};

export const fetchUserProfiles: FetchUserProfilesHandler = async payload => {
  const { data } = await Client<FetchUserProfilesRequestPayload, FetchUserProfilesResponseBody>(
    "post", URI.fetchUserProfiles(),
    fetchUserProfilesRequestSerializer(payload),
  );
  return fetchUserProfilesResponseSerializer(data);
};
