export default (state = { temp: 0 }, actions) => {
  const { payload: { tempReducer: props } = { tempReducer: {} } } = actions;
  switch (actions.type) {
    case 'TEMP':
      return { ...state, ...props };
    default:
      return state;
  }
};
