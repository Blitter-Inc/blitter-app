import Axios from "axios";
import ENV from "@config/env";
import { AxiosRequestHandler } from "@d/axios";
import { UpdateProfileHandeler } from "@d/services/auth";
import { userDataSerializer } from "@services/serializer";
import { store } from "@store/index";
import { generateFormData } from "../serializer";


const URI = {
  signIn: () => "/user/login/",
  updateProfile: (id: number) => `/user/update/${id}/`
};

const requestHandler: AxiosRequestHandler = ({ url, ...config }) => Axios({
  ...config,
  url: `${ENV.API_BASE_URL}${url}`,
});

export const signIn = async ({ phoneNumber, firebaseId }) => {
  const {
    data: {
      user,
      access_token: accessToken,
      refresh_token: refreshToken,
    },
  } = await requestHandler({
    method: "post",
    url: URI.signIn(),
    data: {
      firebase_id: firebaseId,
      phone: phoneNumber,
    },
  });

  return { user, accessToken, refreshToken };
}

export const update: UpdateProfileHandeler = async ({ id, ...payload }) => {
  const { auth: { credentials: { accessToken } } } = store.getState()
  const { data } = await requestHandler({
    method: "patch",
    url: URI.updateProfile(id),
    data: generateFormData({ ...payload, avatar: { uri: payload.avatar, name: `${id}.jpg`, type: 'image/jpeg' } }),
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return userDataSerializer(data);
};
