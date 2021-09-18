import { takeEvery } from 'redux-saga/effects';
import {
  initPhoneSignIn as initPhoneSignInAction ,
  verifyCode as verifyCodeAction,
} from '../slices/auth';
import {
  checkVerificationCode,
  initPhoneSignIn,
} from './auth';


export function* watchAuth() {
  yield takeEvery(initPhoneSignInAction.type, initPhoneSignIn);
  yield takeEvery(verifyCodeAction.type, checkVerificationCode);
};
