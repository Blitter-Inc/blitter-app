import '@firebase/auth'
import Firebase from '@config/firebase';
import { call, put } from 'redux-saga/effects';
import { setVerificationId } from '@store/actions/auth';


export function* initPhoneSignIn({ payload: { phoneNumber, recaptchaVerifier } }) {
  try {
    const authProvider = new Firebase.auth.PhoneAuthProvider();
    const verificationId = yield call([authProvider, authProvider.verifyPhoneNumber], phoneNumber, recaptchaVerifier);
    yield put(setVerificationId(verificationId));
    console.log(verificationId);
  } catch (e) {
    console.error(e);
  }
}

export function* checkVerificationCode({payload: {code, verificationId}}) {
  try {
    const credential = Firebase.auth.PhoneAuthProvider.credential(verificationId, code);
    console.log('CREDENTIAL:', credential);
    const auth = Firebase.auth();
    const res = yield call([auth, auth.signInWithCredential], credential);
    console.log(res);
  } catch (e) {
    console.error(e);
  }
}
