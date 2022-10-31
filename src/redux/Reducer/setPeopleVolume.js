const initState = {
  volume: 0,
};

const peopleVolumeReducer = (state = initState, action) => {
  switch (action.type) {
    case "setPeopleVolume":
      return {
        ...state,
        volume: action.payload,
      };
    default:
      return state;
  }
};

export default peopleVolumeReducer;
