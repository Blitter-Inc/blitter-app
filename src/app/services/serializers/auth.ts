import {
  FetchUserProfilesRequestSerializer,
  FetchUserProfilesResponseSerializer,
  SignInRequestSerializer,
  SignInResponseSerializer,
  UpdateProfileRequestSerializer,
  UpdateProfileResponseSerializer,
} from "$types/services/api";


const generateFormData = (obj: Object) => {
  const formData = new FormData();
  Object.entries(obj).forEach(([key, value]: [string, FormDataEntryValue]) => {
    if (value) {
      formData.append(key, value);
    }
  });
  return formData;
};

export const signInRequestSerializer: SignInRequestSerializer = ({ phoneNumber, firebaseId }) => ({
  phone: phoneNumber,
  firebase_id: firebaseId,
});

export const signInResponseSerializer: SignInResponseSerializer = ({
  access_token: accessToken,
  refresh_token: refreshToken,
  user: { phone: phoneNumber, date_joined: dateJoined, ...userObj },
}) => ({
  accessToken,
  refreshToken,
  user: {
    ...userObj,
    phoneNumber,
    dateJoined,
  },
});

export const updateProfileRequestSerializer: UpdateProfileRequestSerializer = payload => {
  return generateFormData(payload);
};

export const updateProfileResponseSerializer: UpdateProfileResponseSerializer = ({
  phone: phoneNumber,
  date_joined: dateJoined,
  ...userObj
}) => ({
  ...userObj,
  phoneNumber,
  dateJoined,
});

export const fetchUserProfilesRequestSerializer: FetchUserProfilesRequestSerializer = payload => ({
  phone_numbers: payload.phoneNumbers,
});

export const fetchUserProfilesResponseSerializer: FetchUserProfilesResponseSerializer = body => {
  return Object.entries(body).reduce(
    (obj, [key, { phone: phoneNumber, date_joined: dateJoined, ...value }]) => ({
      ...obj,
      [key]: { ...value, phoneNumber, dateJoined },
    }),
    {},
  );
};
