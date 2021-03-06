import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha"
import { AnyAction } from "@reduxjs/toolkit";
import { ArgedPayloadAction, PayloadAction, Reducer } from "./abstract";
import { UserObject, UserProfileInput } from "../modules/auth";


export interface AuthCredentials {
  firebaseId: string;
  accessToken: string;
  refreshToken: string;
  user: UserObject;
}

export interface AuthState {
  isLoading: boolean;
  codeSent: boolean;
  codeVerified: boolean;
  authFlowComplete: boolean;
  verificationId: string;
  credentials: AuthCredentials;
};

export interface ConfirmCodeSentActionPayload {
  phoneNumber: string;
  verificationId: string;
};

export interface ConfirmCodeVerificationActionPayload extends AuthCredentials { };

export interface CompleteAuthFlowActionPayload extends UserObject { };

export interface InitPhoneSignInSagaArgs {
  phoneNumber: string;
  recaptchaVerifier: FirebaseRecaptchaVerifierModal;
};

export interface CheckVerificationCodeSagaArgs {
  code: string;
  verificationId: string;
};

export interface UpdateProfileSagaArgs extends UserProfileInput { };

export interface SkipOTPVerificationSagaArgs {
  phoneNumber: string;
};

export type ConfirmCodeSentAction = PayloadAction<ConfirmCodeSentActionPayload>;
export type ConfirmCodeVerificationAction = PayloadAction<ConfirmCodeVerificationActionPayload>;
export type CompleteAuthFlowAction = PayloadAction<CompleteAuthFlowActionPayload>;
export type InitPhoneSignInSagaAction = ArgedPayloadAction<InitPhoneSignInSagaArgs>;
export type CheckVerificationCodeSagaAction = ArgedPayloadAction<CheckVerificationCodeSagaArgs>;
export type UpdateProfileSagaAction = ArgedPayloadAction<UpdateProfileSagaArgs>;
export type SkipOTPVerificationSagaAction = ArgedPayloadAction<SkipOTPVerificationSagaArgs>;
export type AuthReducer<ActionType = AnyAction> = Reducer<AuthState, ActionType>
