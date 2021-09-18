import { createSlice } from "@reduxjs/toolkit";
import { AuthReducer, AuthState } from "@d/store";


const name = "auth";

const initialState: AuthState = {
  isLoading: false,
  codeSent: false,
  codeVerified: false,
  credentials: {
    firebaseId: null,
    verificationId: null,
    accessToken: null,
    refreshToken: null,
    user: {
      phoneNumber: null,
    },
  },
};

const toggleLoading: AuthReducer = state => {
  state.isLoading = !state.isLoading;
};

const confirmCodeSentReducer: AuthReducer = (state, action) => {
  const { payload: { phoneNumber, verificationId } } = action;
  state.isLoading = false;
  state.codeSent = true;
  state.credentials.verificationId = verificationId;
  state.credentials.user.phoneNumber = phoneNumber;
};

const confirmCodeVerificationReducer: AuthReducer = (state, action) => {
  const { payload: { firebaseId, accessToken, refreshToken, user } } = action;
  state.isLoading = false;
  state.codeVerified = true;
  state.credentials = {
    ...state.credentials,
    firebaseId,
    accessToken,
    refreshToken,
    user,
  };
};

const AuthSlice = createSlice({
  name,
  initialState,
  reducers: {
    confirmCodeSent: {
      reducer: confirmCodeSentReducer,
      prepare: (phoneNumber: string, verificationId: string) => ({ payload: { phoneNumber, verificationId } }),
    },
    confirmCodeVerification: {
      reducer: confirmCodeVerificationReducer,
      prepare: (firebaseId, apiRes) => ({ payload: { firebaseId, ...apiRes } }),
    },
    initPhoneSignIn: {
      reducer: toggleLoading,
      prepare: (phoneNumber: string, recaptchaVerifier) => ({ payload: { args: { phoneNumber, recaptchaVerifier } } }),
    },
    verifyCode: {
      reducer: toggleLoading,
      prepare: (code, verificationId) => ({ payload: { args: { code, verificationId } } }),
    },
  }
});

export const {
  confirmCodeSent,
  confirmCodeVerification,
  initPhoneSignIn,
  verifyCode,
} = AuthSlice.actions;

export default AuthSlice;
