const initState = {
  currentSong: 0,
};

const setCurrentSongReducer = (state = initState, action) => {
  switch (action.type) {
    case "setCurrentSongIndex":
      return {
        ...state,
        currentSong: action.payload,
      };
    default:
      return state;
  }
};

export default setCurrentSongReducer;
