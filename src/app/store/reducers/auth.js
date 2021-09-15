import actionType from '@store/actions/auth';


const initialState = {
  isLoading: false,
  codeSent: false,
  codeVerified: false,
  credentials: {
    firebaseId: null,
    verificationId: null,
    accessToken: null,
    refreshToken: null,
    user: {
      phoneNumber: null,
    },
  },
};

export default (state = initialState, action) => {
  switch (action.type) {

    case actionType.TOGGLE_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading,
      };

    case actionType.CONFIRM_CODE_SENT:
      const { payload: { phoneNumber, verificationId } } = action;
      return {
        ...state,
        isLoading: false,
        codeSent: true,
        credentials: {
          ...state.credentials,
          verificationId,
          user: {
            ...state.credentials.user,
            phoneNumber,
          },
        },
      };

    case actionType.CONFIRM_CODE_VERIFICATION:
      const { payload: { firebaseId, user, accessToken, refreshToken } } = action;
      return {
        ...state,
        isLoading: false,
        codeVerified: true,
        credentials: {
          ...state.credentials,
          firebaseId,
          accessToken,
          refreshToken,
          user: {
            ...state.credentials.user,
            ...user,
          },
        },
      };

    default:
      return state;
  }
}
