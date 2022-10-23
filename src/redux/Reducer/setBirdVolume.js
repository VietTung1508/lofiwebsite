const initState = {
  volume: 0,
};

const birdVolumeReducer = (state = initState, action) => {
  switch (action.type) {
    case "setBirdVolume":
      return {
        ...state,
        volume: action.payload,
      };
    default:
      return state;
  }
};

export default birdVolumeReducer;
