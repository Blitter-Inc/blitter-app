import Axios from 'axios';
import ENV from '@config/env';


const URI = {
  signIn: () => '/user/login/',
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
