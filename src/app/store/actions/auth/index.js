import actionType from "./types";


export const checkVerificationCode = (code, verificationId) => ({
  type: actionType.CHECK_VERIFICATION_CODE,
  payload: {
    code,
    verificationId,
  },
});

export const initPhoneSignIn = (phoneNumber, recaptchaVerifier) => ({
  type: actionType.INIT_PHONE_SIGNIN,
  payload: {
    phoneNumber,
    recaptchaVerifier,
  },
});

export const setVerificationId = verificationId => ({
  type: actionType.SET_VERIFICATION_ID,
  payload: { verificationId },
});

export default actionType;
