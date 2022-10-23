const initState = {
  volume: 0,
};

const rainVolumeReducer = (state = initState, action) => {
  switch (action.type) {
    case "setRainVolume":
      return {
        ...state,
        volume: action.payload,
      };
    default:
      return state;
  }
};

export default rainVolumeReducer;
