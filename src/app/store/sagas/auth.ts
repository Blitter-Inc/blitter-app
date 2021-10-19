import '@firebase/auth'
import { call, put } from 'redux-saga/effects';
import Firebase from '$config/firebase';
import { signIn, updateUser } from '$services/api';
import { SignInSerializedResponseBody, UpdateProfileSerializedResponseBody } from '$types/services/api';
import {
  CheckVerificationCodeSagaAction,
  InitPhoneSignInSagaAction,
  UpdateProfileSagaAction,
  CheckVerificationCodeSagaArgs,
  InitPhoneSignInSagaArgs,
  UpdateProfileSagaArgs,
} from '$types/store';
import { confirmCodeSent, confirmCodeVerification, completeAuthFlow } from '../slices/auth';


export function* initPhoneSignIn(action: InitPhoneSignInSagaAction) {
  const { phoneNumber, recaptchaVerifier }: InitPhoneSignInSagaArgs = action.payload.args;
  try {
    const authProvider = new Firebase.auth.PhoneAuthProvider();
    const verificationId: string = yield call([authProvider, authProvider.verifyPhoneNumber], phoneNumber, recaptchaVerifier);
    yield put(confirmCodeSent({ phoneNumber, verificationId }));
  } catch (e) {
    console.error(e);
  }
}

export function* checkVerificationCode(action: CheckVerificationCodeSagaAction) {
  const { code, verificationId }: CheckVerificationCodeSagaArgs = action.payload.args;
  try {
    const credential = Firebase.auth.PhoneAuthProvider.credential(verificationId, code);
    const auth = Firebase.auth();
    const { user: { uid: firebaseId, phoneNumber } } = yield call([auth, auth.signInWithCredential], credential);
    const authCredentials: SignInSerializedResponseBody = yield call(signIn, { phoneNumber, firebaseId });
    yield put(confirmCodeVerification({ firebaseId, ...authCredentials }));
  } catch (e) {
    console.error(e);
  }
};

export function* updateProfile(action: UpdateProfileSagaAction) {
  const requestObj: UpdateProfileSagaArgs = action.payload.args;
  try {
    const user: UpdateProfileSerializedResponseBody = yield call(updateUser, requestObj);
    yield put(completeAuthFlow(user));
  } catch (e) {
    console.error(e);
  }
};
