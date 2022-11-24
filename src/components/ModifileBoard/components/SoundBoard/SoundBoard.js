import { Slider } from "@mui/material";
import className from "classnames/bind";
import style from "./SoundBoard.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  setMainVolume,
  setRainVolume,
  setCityTrafficVolume,
  setBirdVolume,
  setMood,
  setMixMode,
  setCampFireVolume,
  setOceanVolume,
  setSummerStormVolume,
  setPeopleVolume,
  setForestVolume,
  setWindVolume,
  setWindowRainVolume,
  setKeyboardVolume,
} from "../../../../redux/Action/actions";

const cx = className.bind(style);

function SoundBoard() {
  const dispatch = useDispatch();

  const mixMode = useSelector((state) => state.setMixMode.mixMode);

  const rainVolume = useSelector((state) => state.setRainVolume.volume);

  const mainVolume = useSelector((state) => state.setMainVolume.volume);

  const trafficVolume = useSelector((state) => state.setTrafficVolume.volume);

  const birdVolume = useSelector((state) => state.setBirdVolume.volume);

  const oceanVolume = useSelector((state) => state.setOceanVolume.volume);

  const peopleVolume = useSelector((state) => state.setPeopleVolume.volume);

  const campfireVolume = useSelector((state) => state.setCampfireVolume.volume);

  const summerStormVolume = useSelector(
    (state) => state.setSummerStormVolume.volume
  );

  const forestVolume = useSelector((state) => state.setForestVolume.volume);

  const windVolume = useSelector((state) => state.setWindVolume.volume);

  const keyboardVolume = useSelector((state) => state.setKeyboardVolume.volume);

  const windowRainVolume = useSelector(
    (state) => state.setWindowrainVolume.volume
  );

  const mood = useSelector((state) => state.setMood.mood);

  const handleRainVolume = (e) => {
    dispatch(setRainVolume(e.target.value));
  };

  const handleMainVolume = (e) => {
    dispatch(setMainVolume(e.target.value));
  };

  const handleTrafficVolume = (e) => {
    dispatch(setCityTrafficVolume(e.target.value));
  };

  const handleBirdVolume = (e) => {
    dispatch(setBirdVolume(e.target.value));
  };

  const handleOceanVolume = (e) => {
    dispatch(setOceanVolume(e.target.value));
  };

  const handleCampfireVolume = (e) => {
    dispatch(setCampFireVolume(e.target.value));
  };

  const handleSummerStormVolume = (e) => {
    dispatch(setSummerStormVolume(e.target.value));
  };

  const handlePeopleVolume = (e) => {
    dispatch(setPeopleVolume(e.target.value));
  };

  const handleForestVolume = (e) => {
    dispatch(setForestVolume(e.target.value));
  };

  const handleKeyboardVolume = (e) => {
    dispatch(setKeyboardVolume(e.target.value));
  };

  const handleWindVolume = (e) => {
    dispatch(setWindVolume(e.target.value));
  };

  const handleWindowRainVolume = (e) => {
    dispatch(setWindowRainVolume(e.target.value));
  };

  const handleSleepyMood = () => {
    dispatch(setMood("sleppy"));
  };

  const handleJazzyMood = () => {
    dispatch(setMood("jazzy"));
  };

  const handleChillMood = () => {
    dispatch(setMood("chill"));
  };

  const handleMixMode = () => {
    dispatch(setMixMode(!mixMode));
  };

  return (
    <div className={cx("board", mixMode ? "openMix" : "")}>
      <div className={cx("board-header")}>
        <h4>Mood</h4>
        <img src="/assets/images/favicon.png" alt="logo" />
      </div>
      <div className={cx("board-setMood")}>
        <div className={cx("mood")} onClick={handleSleepyMood}>
          <img
            className={cx("icon", mood === "sleppy" ? "active" : "")}
            src="assets/images/sleep.svg"
            alt="sleep"
          />
          <h4>Sleepy</h4>
        </div>
        <div className={cx("mood")} onClick={handleJazzyMood}>
          <img
            src="assets/images/jazzy.svg"
            alt="jazzy"
            className={cx("icon", mood === "jazzy" ? "active" : "")}
          />
          <h4>Jazzy</h4>
        </div>
        <div className={cx("mood")} onClick={handleChillMood}>
          <img
            src="assets/images/chill.svg"
            alt="mood"
            className={cx("icon", mood === "chill" ? "active" : "")}
          />
          <h4>Chill</h4>
        </div>
      </div>

      <div className={cx("mainSoundRange")}>
        <img
          src="/assets/images/soundoff.svg"
          className={cx("icon", "off")}
          alt=""
        />
        <Slider
          value={mainVolume}
          onChange={handleMainVolume}
          className={cx("volume-slider")}
          sx={{
            "& .MuiSlider-thumb": {
              color: "#fff",
              width: "15px",
              height: "15px",
            },
            "& .MuiSlider-rail": {
              color: "rgb(40, 40, 40)",
            },
          }}
        />
        <img
          src="/assets/images/soundon.svg"
          className={cx("icon", "on")}
          alt=""
        />
      </div>
      <div className={cx("sounds")}>
        <h4 className={cx("sounds-title")}>Sounds</h4>
        <div className={cx("sounds-container")}>
          <div className={cx("sound")}>
            <h5 className={cx("sound-title")}>City traffic</h5>
            <Slider
              value={trafficVolume}
              onChange={handleTrafficVolume}
              className={cx("volume-slider")}
              sx={{
                "& .MuiSlider-thumb": {
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",

                  width: "23px",
                  height: "22px",
                },
                "& .MuiSlider-rail": {
                  color: "rgb(40, 40, 40)",
                },
              }}
            />
          </div>
          <div className={cx("sound")}>
            <h5 className={cx("sound-title")}>City Rain</h5>
            <Slider
              onChange={handleRainVolume}
              value={rainVolume}
              className={cx("volume-slider")}
              sx={{
                "& .MuiSlider-thumb": {
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  width: "23px",
                  height: "22px",
                },
                "& .MuiSlider-rail": {
                  color: "rgb(40, 40, 40)",
                },
              }}
            />
          </div>
          <div className={cx("sound")}>
            <h5 className={cx("sound-title")}>Bird Chirping</h5>

            <Slider
              value={birdVolume}
              onChange={handleBirdVolume}
              className={cx("volume-slider")}
              sx={{
                "& .MuiSlider-thumb": {
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",

                  width: "23px",
                  height: "22px",
                },
                "& .MuiSlider-rail": {
                  color: "rgb(40, 40, 40)",
                },
              }}
            />
          </div>
          {mixMode && (
            <>
              <div className={cx("sound")}>
                <h5 className={cx("sound-title")}>Ocean Wave</h5>

                <Slider
                  value={oceanVolume}
                  onChange={handleOceanVolume}
                  className={cx("volume-slider")}
                  sx={{
                    "& .MuiSlider-thumb": {
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",

                      width: "23px",
                      height: "22px",
                    },
                    "& .MuiSlider-rail": {
                      color: "rgb(40, 40, 40)",
                    },
                  }}
                />
              </div>
              <div className={cx("sound")}>
                <h5 className={cx("sound-title")}>Campfire</h5>

                <Slider
                  value={campfireVolume}
                  onChange={handleCampfireVolume}
                  className={cx("volume-slider")}
                  sx={{
                    "& .MuiSlider-thumb": {
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      width: "23px",
                      height: "22px",
                    },
                    "& .MuiSlider-rail": {
                      color: "rgb(40, 40, 40)",
                    },
                  }}
                />
              </div>
              <div className={cx("sound")}>
                <h5 className={cx("sound-title")}>Summer Storm</h5>

                <Slider
                  value={summerStormVolume}
                  onChange={handleSummerStormVolume}
                  className={cx("volume-slider")}
                  sx={{
                    "& .MuiSlider-thumb": {
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",

                      width: "23px",
                      height: "22px",
                    },
                    "& .MuiSlider-rail": {
                      color: "rgb(40, 40, 40)",
                    },
                  }}
                />
              </div>
              <div className={cx("sound")}>
                <h5 className={cx("sound-title")}>Cafe</h5>

                <Slider
                  value={peopleVolume}
                  onChange={handlePeopleVolume}
                  className={cx("volume-slider")}
                  sx={{
                    "& .MuiSlider-thumb": {
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",

                      width: "23px",
                      height: "22px",
                    },
                    "& .MuiSlider-rail": {
                      color: "rgb(40, 40, 40)",
                    },
                  }}
                />
              </div>
              <div className={cx("sound")}>
                <h5 className={cx("sound-title")}>Wind</h5>

                <Slider
                  value={windVolume}
                  onChange={handleWindVolume}
                  className={cx("volume-slider")}
                  sx={{
                    "& .MuiSlider-thumb": {
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      width: "23px",
                      height: "22px",
                    },
                    "& .MuiSlider-rail": {
                      color: "rgb(40, 40, 40)",
                    },
                  }}
                />
              </div>
              <div className={cx("sound")}>
                <h5 className={cx("sound-title")}>Windown Rain</h5>

                <Slider
                  value={windowRainVolume}
                  onChange={handleWindowRainVolume}
                  className={cx("volume-slider")}
                  sx={{
                    "& .MuiSlider-thumb": {
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      width: "23px",
                      height: "22px",
                    },
                    "& .MuiSlider-rail": {
                      color: "rgb(40, 40, 40)",
                    },
                  }}
                />
              </div>
              <div className={cx("sound")}>
                <h5 className={cx("sound-title")}>Keyboard</h5>

                <Slider
                  value={keyboardVolume}
                  onChange={handleKeyboardVolume}
                  className={cx("volume-slider")}
                  sx={{
                    "& .MuiSlider-thumb": {
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      width: "23px",
                      height: "22px",
                    },
                    "& .MuiSlider-rail": {
                      color: "rgb(40, 40, 40)",
                    },
                  }}
                />
              </div>
              <div className={cx("sound")}>
                <h5 className={cx("sound-title")}>Forest Night</h5>

                <Slider
                  value={forestVolume}
                  onChange={handleForestVolume}
                  className={cx("volume-slider")}
                  sx={{
                    "& .MuiSlider-thumb": {
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      width: "23px",
                      height: "22px",
                    },
                    "& .MuiSlider-rail": {
                      color: "rgb(40, 40, 40)",
                    },
                  }}
                />
              </div>
              <div className={cx("sound")}>
                <h5 className={cx("sound-title")}>Bird Chirping</h5>

                <Slider
                  value={birdVolume}
                  onChange={handleBirdVolume}
                  className={cx("volume-slider")}
                  sx={{
                    "& .MuiSlider-thumb": {
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      width: "23px",
                      height: "22px",
                    },
                    "& .MuiSlider-rail": {
                      color: "rgb(40, 40, 40)",
                    },
                  }}
                />
              </div>
            </>
          )}
          <div
            className={cx("mixMode", mixMode ? "openMixMode" : "")}
            onClick={handleMixMode}
          >
            {!mixMode && <p>Mix Mode</p>}
            {mixMode && <p>Normal Mode</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SoundBoard;
