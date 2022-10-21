const initState = {
  mode: "day",
};

const modeReducer = (state = initState, action) => {
  switch (action.type) {
    case "setMode":
      return {
        ...state,
        mode: action.payload,
      };
    default:
      return state;
  }
};

export default modeReducer;
