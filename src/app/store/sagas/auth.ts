import '@firebase/auth'
import { call, put } from 'redux-saga/effects';
import Firebase from '@config/firebase';
import { Action } from '@d/store';
import { signIn } from '@services/api';
import { fetchSagaArgs } from './helpers';
import { confirmCodeSent, confirmCodeVerification, updateUserProfile } from '../slices/auth';
import { update } from '@services/api/auth';
import { UpdateProfileResponse } from '@d/services/auth';


export function* initPhoneSignIn(action: Action) {
  const { phoneNumber, recaptchaVerifier } = fetchSagaArgs(action);
  try {
    const authProvider = new Firebase.auth.PhoneAuthProvider();
    const verificationId = yield call([authProvider, authProvider.verifyPhoneNumber], phoneNumber, recaptchaVerifier);
    yield put(confirmCodeSent(phoneNumber, verificationId));
  } catch (e) {
    console.error(e);
  }
}

export function* checkVerificationCode(action: Action) {
  const { code, verificationId } = fetchSagaArgs(action);
  try {
    const credential = Firebase.auth.PhoneAuthProvider.credential(verificationId, code);
    const auth = Firebase.auth();
    const authRes = yield call([auth, auth.signInWithCredential], credential);
    const { user: { uid: firebaseId, phoneNumber } } = authRes;
    const apiRes = yield call(signIn, { phoneNumber, firebaseId });
    yield put(confirmCodeVerification(firebaseId, apiRes));
  } catch (e) {
    console.error(e);
  }
}

export function* updateProfile(action: Action) {
  const { requestObj } = fetchSagaArgs(action);
  try {
    const apiRes: UpdateProfileResponse = yield call(update, requestObj)
    yield put(updateUserProfile(apiRes))
  } catch (e) {
    console.log(e)
  }
}
