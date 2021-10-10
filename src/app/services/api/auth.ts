import {
  SignInHandler,
  SignInRequestPayload,
  SignInResponseBody,
  UpdateProfileHandler,
  UpdateProfileResponseBody,
} from "@d/services/api";
import {
  signInRequestSerializer,
  signInResponseSerializer,
  updateProfileRequestSerializer,
  updateProfileResponseSerializer,
} from "@services/serializers";
import Client from "./client";


const URI = {
  signIn: () => "/user/login/",
  updateProfile: (id: number) => `/user/update/${id}/`
};

export const signIn: SignInHandler = async (args) => {
  const { data } = await Client<SignInRequestPayload, SignInResponseBody>("post", URI.signIn(), signInRequestSerializer(args));
  return signInResponseSerializer(data);
};

export const update: UpdateProfileHandler = async ({ id, ...payload }) => {
  const { data } = await Client<FormData, UpdateProfileResponseBody>(
    "patch", URI.updateProfile(id),
    updateProfileRequestSerializer(payload),
    { headers: { "Content-Type": "multipart/form-data" } },
  );
  return updateProfileResponseSerializer(data);
};
