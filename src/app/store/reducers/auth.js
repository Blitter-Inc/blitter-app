import actionType from '@store/actions/auth';


const initialState = {
  verificationId: null,
  accessToken: null,
  refreshToken: null,
  user: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_VERIFICATION_ID:
      const { payload: { verificationId } } = action;
      return {
        ...state,
        verificationId,
      };
    default:
      return state;
  }
}
