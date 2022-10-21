import { combineReducers } from "redux";
import modeReducer from "./setMode.js";
import rainReducer from "./setRain.js";

const rootReducer = combineReducers({
  setMode: modeReducer,
  setRain: rainReducer,
});

export default rootReducer;
