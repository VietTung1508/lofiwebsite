const initState = {
  volume: 0,
};

const windownRainVolumeReducer = (state = initState, action) => {
  switch (action.type) {
    case "setWindowRainVolume":
      return {
        ...state,
        volume: action.payload,
      };
    default:
      return state;
  }
};

export default windownRainVolumeReducer;
