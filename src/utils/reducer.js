const reducer = (state, action) => {
  switch (action.type) {
    case "LocalTimeUpdate":
      state = { ...state, localTime: action.payload };
      return state;
    case "TimerUpdate":
      state = { ...state, timer: action.payload };
      return state;
    default:
      return state;
  }
};
export default reducer;
