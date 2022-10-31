const initState = {
  volume: 0,
};

const summerStormVolumeReducer = (state = initState, action) => {
  switch (action.type) {
    case "setSummerStormVolume":
      return {
        ...state,
        volume: action.payload,
      };
    default:
      return state;
  }
};

export default summerStormVolumeReducer;
