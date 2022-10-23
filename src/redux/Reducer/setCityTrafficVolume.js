const initState = {
  volume: 0,
};

const trafficVolumeReducer = (state = initState, action) => {
  switch (action.type) {
    case "setCityTraffic":
      return {
        ...state,
        volume: action.payload,
      };
    default:
      return state;
  }
};

export default trafficVolumeReducer;
