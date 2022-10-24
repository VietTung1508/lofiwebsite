const initState = {
  mood: "chill",
};

const setMoodReducer = (state = initState, action) => {
  switch (action.type) {
    case "setMood":
      return {
        ...state,
        mood: action.payload,
      };
    default:
      return state;
  }
};

export default setMoodReducer;
