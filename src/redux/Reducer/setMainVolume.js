const initState = {
  volume: 50,
};

export const mainVolumeReducer = (state = initState, action) => {
  switch (action.type) {
    case "setMainVolume":
      return {
        ...state,
        volume: action.payload,
      };
    default:
      return state;
  }
};
