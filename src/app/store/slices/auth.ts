import { createSlice } from "@reduxjs/toolkit";
import { AuthReducer, AuthState, User } from "@d/store";
import { InitUpdateProfileReducer } from "@d/reducers";


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
      id: null,
      phoneNumber: null,
      name: null,
      email: null,
      avatar: null,
      bio: null,
      dateJoined: null
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

const updateUserProfileReducer: AuthReducer = (state, action) => {
  const { payload: { user } } = action;
  state.isLoading = false;
  state.credentials.user = user;
  console.log(state)
}

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
    initUpdateProfile: {
      reducer: toggleLoading,
      prepare: (updateData: InitUpdateProfileReducer) => ({ payload: { args: { requestObj: updateData } } })
    },
    updateUserProfile: {
      reducer: updateUserProfileReducer,
      prepare: (user: User) => ({ payload: { user } })
    }
  }
});

export const {
  confirmCodeSent,
  confirmCodeVerification,
  initPhoneSignIn,
  verifyCode,
  initUpdateProfile,
  updateUserProfile,
} = AuthSlice.actions;

export default AuthSlice;
