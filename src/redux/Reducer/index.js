import { combineReducers } from "redux";
import modeReducer from "./setMode.js";
import rainReducer from "./setRain.js";
import mainVolumeReducer from "./setMainVolume.js";
import rainVolumeReducer from "./setRainVolume.js";
import trafficVolumeReducer from "./setCityTrafficVolume.js";
import birdVolumeReducer from "./setBirdVolume";
import setMoodReducer from "./setMood.js";
import setCurrentSongReducer from "./setCurrentSongindex.js";

const rootReducer = combineReducers({
  setMode: modeReducer,
  setRain: rainReducer,
  setMainVolume: mainVolumeReducer,
  setRainVolume: rainVolumeReducer,
  setTrafficVolume: trafficVolumeReducer,
  setBirdVolume: birdVolumeReducer,
  setMood: setMoodReducer,
  setCurrentSongIndex: setCurrentSongReducer,
});

export default rootReducer;
