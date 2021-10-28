import { takeEvery } from "redux-saga/effects";
import {
  initPhoneSignIn as initPhoneSignInAction,
  verifyCode as verifyCodeAction,
  updateProfile as updateProfileAction,
  skipOTPVerification as skipOTPVerificationAction,
} from "../slices/auth";
import {
  checkVerificationCode,
  initPhoneSignIn,
  updateProfile,
  skipOTPVerification,
} from "./auth";


export function* watchAuth() {
  yield takeEvery(initPhoneSignInAction.type, initPhoneSignIn);
  yield takeEvery(verifyCodeAction.type, checkVerificationCode);
  yield takeEvery(updateProfileAction.type, updateProfile);
  yield takeEvery(skipOTPVerificationAction.type, skipOTPVerification);
};
