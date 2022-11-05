const initState = {
  volume: 0,
};

const keyboardVolumeReducer = (state = initState, action) => {
  switch (action.type) {
    case "setKeyboardVolume":
      return {
        ...state,
        volume: action.payload,
      };
    default:
      return state;
  }
};

export default keyboardVolumeReducer;
