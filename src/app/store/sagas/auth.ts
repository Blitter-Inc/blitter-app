import '@firebase/auth'
import Firebase from '@config/firebase';
import { call, put } from 'redux-saga/effects';
import { signIn } from '@services/api';
import { confirmCodeSent, confirmCodeVerification } from '@store/actions/auth';


export function* initPhoneSignIn({ payload: { phoneNumber, recaptchaVerifier } }) {
  try {
    const authProvider = new Firebase.auth.PhoneAuthProvider();
    const verificationId = yield call([authProvider, authProvider.verifyPhoneNumber], phoneNumber, recaptchaVerifier);
    yield put(confirmCodeSent(phoneNumber, verificationId));
  } catch (e) {
    console.error(e);
  }
}

export function* checkVerificationCode({ payload: { code, verificationId } }) {
  try {
    const credential = Firebase.auth.PhoneAuthProvider.credential(verificationId, code);
    const auth = Firebase.auth();
    const authRes = yield call([auth, auth.signInWithCredential], credential);
    const { user: { uid: firebaseId, phoneNumber } } = authRes;
    const apiRes = yield call(signIn, { phoneNumber, firebaseId });
    yield put(confirmCodeVerification({firebaseId, ...apiRes}));
  } catch (e) {
    console.error(e);
  }
}
