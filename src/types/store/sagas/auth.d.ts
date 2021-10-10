import { UserProfile } from "../auth";
import { FirebaseAuthApplicationVerifier } from "expo-firebase-recaptcha"


export interface InitPhoneSignInSagaArgs {
  phoneNumber: string;
  recaptchaVerifier: FirebaseAuthApplicationVerifier;
};

export interface CheckVerificationCodeSagaArgs {
  code: string;
  verificationId: string;
};

export interface UpdateProfileSagaArgs extends Partial<UserProfile> {
  avatar?: FormDataEntryValue;
};

export type SagaArgs = Partial<InitPhoneSignInSagaArgs> & Partial<CheckVerificationCodeSagaArgs> & Partial<UpdateProfileSagaArgs>;
