import { takeEvery } from 'redux-saga/effects';
import authActionType from '@store/actions/auth';
import {
  checkVerificationCode,
  initPhoneSignIn,
} from './auth';


export function* watchAuth() {
  yield takeEvery(authActionType.INIT_PHONE_SIGNIN, initPhoneSignIn);
  yield takeEvery(authActionType.CHECK_VERIFICATION_CODE, checkVerificationCode);
}
