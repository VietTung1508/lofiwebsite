const initState = {
  volume: 0,
};

const forestVolumeReducer = (state = initState, action) => {
  switch (action.type) {
    case "setForestVolume":
      return {
        ...state,
        volume: action.payload,
      };
    default:
      return state;
  }
};

export default forestVolumeReducer;
