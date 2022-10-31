const initState = {
  mixMode: false,
};

const mixModeReducer = (state = initState, action) => {
  switch (action.type) {
    case "setMixMode":
      return {
        ...state,
        mixMode: action.payload,
      };
    default:
      return state;
  }
};

export default mixModeReducer;
