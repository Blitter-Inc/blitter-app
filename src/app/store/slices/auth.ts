import { createSlice } from "@reduxjs/toolkit";
import {
  AuthReducer,
  AuthState,
  CheckVerificationCodeSagaArgs,
  CompleteAuthFlowAction,
  CompleteAuthFlowActionPayload,
  ConfirmCodeSentAction,
  ConfirmCodeSentActionPayload,
  ConfirmCodeVerificationAction,
  ConfirmCodeVerificationActionPayload,
  InitPhoneSignInSagaArgs,
  UpdateProfileSagaArgs,
} from "$types/store";


const name = "auth";

const initialState: AuthState = {
  isLoading: false,
  codeSent: false,
  codeVerified: false,
  authFlowComplete: false,
  verificationId: "",
  credentials: {
    firebaseId: "",
    accessToken: "",
    refreshToken: "",
    user: {
      id: 0,
      phoneNumber: "",
      name: "",
      email: "",
      avatar: "",
      bio: "",
      dateJoined: "",
    },
  },
};

const toggleLoading: AuthReducer = state => {
  state.isLoading = !state.isLoading;
};

const confirmCodeSentReducer: AuthReducer<ConfirmCodeSentAction> = (state, action) => {
  const { payload: { phoneNumber, verificationId } } = action;
  state.isLoading = false;
  state.codeSent = true;
  state.verificationId = verificationId;
  state.credentials.user.phoneNumber = phoneNumber;
};

const confirmCodeVerificationReducer: AuthReducer<ConfirmCodeVerificationAction> = (state, action) => {
  const { payload: credentials } = action;
  state.isLoading = false;
  state.codeVerified = true;
  state.credentials = credentials;
};

const completeAuthFlowReducer: AuthReducer<CompleteAuthFlowAction> = (state, action) => {
  const { payload: user } = action;
  state.isLoading = false;
  state.authFlowComplete = true;
  state.credentials.user = user;
};

const AuthSlice = createSlice({
  name,
  initialState,
  reducers: {
    confirmCodeSent: {
      reducer: confirmCodeSentReducer,
      prepare: (payload: ConfirmCodeSentActionPayload) => ({ payload }),
    },
    confirmCodeVerification: {
      reducer: confirmCodeVerificationReducer,
      prepare: (payload: ConfirmCodeVerificationActionPayload) => ({ payload }),
    },
    initPhoneSignIn: {
      reducer: toggleLoading,
      prepare: (args: InitPhoneSignInSagaArgs) => ({ payload: { args } }),
    },
    updateProfile: {
      reducer: toggleLoading,
      prepare: (args: UpdateProfileSagaArgs) => ({ payload: { args } }),
    },
    completeAuthFlow: {
      reducer: completeAuthFlowReducer,
      prepare: (payload: CompleteAuthFlowActionPayload) => ({ payload }),
    },
    verifyCode: {
      reducer: toggleLoading,
      prepare: (args: CheckVerificationCodeSagaArgs) => ({ payload: { args } }),
    },
  }
});

export const {
  confirmCodeSent,
  confirmCodeVerification,
  initPhoneSignIn,
  verifyCode,
  updateProfile,
  completeAuthFlow,
} = AuthSlice.actions;

export default AuthSlice;
