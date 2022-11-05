const initState = {
  volume: 0,
};

const windVolumeReducer = (state = initState, action) => {
  switch (action.type) {
    case "setWindVolume":
      return {
        ...state,
        volume: action.payload,
      };
    default:
      return state;
  }
};

export default windVolumeReducer;
