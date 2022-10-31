const initState = {
  volume: 0,
};

const campfireVolumeReducer = (state = initState, action) => {
  switch (action.type) {
    case "setCampFireVolume":
      return {
        ...state,
        volume: action.payload,
      };
    default:
      return state;
  }
};

export default campfireVolumeReducer;
