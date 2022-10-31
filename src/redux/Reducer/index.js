import { combineReducers } from "redux";
import modeReducer from "./setMode.js";
import rainReducer from "./setRain.js";
import mainVolumeReducer from "./setMainVolume.js";
import rainVolumeReducer from "./setRainVolume.js";
import trafficVolumeReducer from "./setCityTrafficVolume.js";
import birdVolumeReducer from "./setBirdVolume";
import setMoodReducer from "./setMood.js";
import setCurrentSongReducer from "./setCurrentSongindex.js";
import mixModeReducer from "./setMixMode.js";
import campfireVolumeReducer from "./setCampfireVolume.js";
import forestVolumeReducer from "./setForestVolume";
import oceanVolumeReducer from "./setOceanVolume";
import peopleVolumeReducer from "./setPeopleVolume";
import summerStormVolumeReducer from "./setSummerStormVolume";

const rootReducer = combineReducers({
  setMode: modeReducer,
  setRain: rainReducer,
  setMainVolume: mainVolumeReducer,
  setRainVolume: rainVolumeReducer,
  setTrafficVolume: trafficVolumeReducer,
  setBirdVolume: birdVolumeReducer,
  setMood: setMoodReducer,
  setCurrentSongIndex: setCurrentSongReducer,
  setMixMode: mixModeReducer,
  setCampfireVolume: campfireVolumeReducer,
  setForestVolume: forestVolumeReducer,
  setPeopleVolume: peopleVolumeReducer,
  setOceanVolume: oceanVolumeReducer,
  setSummerStormVolume: summerStormVolumeReducer,
});

export default rootReducer;
