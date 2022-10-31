const initState = {
  volume: 0,
};

const oceanVolumeReducer = (state = initState, action) => {
  switch (action.type) {
    case "setOceanVolume":
      return {
        ...state,
        volume: action.payload,
      };
    default:
      return state;
  }
};

export default oceanVolumeReducer;
