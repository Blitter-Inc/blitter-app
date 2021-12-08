import { takeEvery } from "redux-saga/effects";
import {
  initPhoneSignIn as initPhoneSignInAction,
  verifyCode as verifyCodeAction,
  updateProfile as updateProfileAction,
  skipOTPVerification as skipOTPVerificationAction,
} from "../slices/auth";
import {
  addBill as addBillAction,
  initializeApp as initializeAppAction,
} from "../slices/cache";
import {
  checkVerificationCode,
  initPhoneSignIn,
  updateProfile,
  skipOTPVerification,
} from "./auth";
import {
  addBill,
  initializeApp,
} from "./cache";


export function* watchAuth() {
  yield takeEvery(initPhoneSignInAction.type, initPhoneSignIn);
  yield takeEvery(verifyCodeAction.type, checkVerificationCode);
  yield takeEvery(updateProfileAction.type, updateProfile);
  yield takeEvery(skipOTPVerificationAction.type, skipOTPVerification);
  yield takeEvery(initializeAppAction.type, initializeApp);
  yield takeEvery(addBillAction, addBill);
};
