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

export const confirmCodeSent = (phoneNumber, verificationId) => ({
  type: actionType.CONFIRM_CODE_SENT,
  payload: {
    phoneNumber,
    verificationId,
  },
});

export const confirmCodeVerification = (payload) => ({
  type: actionType.CONFIRM_CODE_VERIFICATION,
  payload,
});

export const toggleLoading = () => ({
  type: actionType.TOGGLE_LOADING,
});

export default actionType;
