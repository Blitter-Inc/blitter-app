import { takeEvery } from 'redux-saga/effects';
import {
  initPhoneSignIn as initPhoneSignInAction ,
  verifyCode as verifyCodeAction,
  initUpdateProfile as initUpdateProfileAction,
} from '../slices/auth';
import {
  checkVerificationCode,
  initPhoneSignIn,
  updateProfile,
} from './auth';


export function* watchAuth() {
  yield takeEvery(initPhoneSignInAction.type, initPhoneSignIn);
  yield takeEvery(verifyCodeAction.type, checkVerificationCode);
  yield takeEvery(initUpdateProfileAction.type, updateProfile);
};
