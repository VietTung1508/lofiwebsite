import { combineReducers } from "redux";
import modeReducer from "./setMode.js";
import rainReducer from "./setRain.js";
import { mainVolumeReducer } from "./setMainVolume.js";

const rootReducer = combineReducers({
  setMode: modeReducer,
  setRain: rainReducer,
  setMainVolume: mainVolumeReducer,
});

export default rootReducer;
