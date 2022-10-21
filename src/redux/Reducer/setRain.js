const initState = {
  rain: "clear",
};

const rainReducer = (state = initState, action) => {
  switch (action.type) {
    case "setRain":
      return {
        ...state,
        rain: action.payload,
      };
    default:
      return state;
  }
};

export default rainReducer;
