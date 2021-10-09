import Axios from 'axios';
import ENV from '@config/env';
import { UpdateProfileHandeler } from '@d/services/auth';
import { userDataSerializer } from '@services/serializer';


const URI = {
  signIn: () => '/user/login/',
  updateProfile: () => '/user/update/'
};

const requestHandler = (method, uri, data = {}) => {
  const url = `${ENV.API_BASE_URL}${uri}`;
  return Axios({ method, url, data });
}

export const signIn = async ({ phoneNumber, firebaseId }) => {
  const {
    data: {
      user,
      access_token: accessToken,
      refresh_token: refreshToken,
    },
  } = await requestHandler('post', URI.signIn(), {
    firebase_id: firebaseId,
    phone: phoneNumber,
  });

  return { user, accessToken, refreshToken };
}

export const update: UpdateProfileHandeler = async ({
  id,
  ...payload
}) => {
  const { data } = await requestHandler(
    "post",
    `${URI.updateProfile}/${id}/`,
    payload
  );
  const response = userDataSerializer(data)
  return response;
};
