import actionType from '@store/actions/auth';


const initialState = {
  isLoading: false,
  codeSent: false,
  credentials: {
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

    default:
      return state;
  }
}
