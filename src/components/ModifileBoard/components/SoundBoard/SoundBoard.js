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
} from "../../../../redux/Action/actions";
import ReactAudioPlayer from "react-audio-player";

const cx = className.bind(style);

function SoundBoard() {
  const dispatch = useDispatch();

  const rainVolume = useSelector((state) => state.setRainVolume.volume);

  const mainVolume = useSelector((state) => state.setMainVolume.volume);

  const trafficVolume = useSelector((state) => state.setTrafficVolume.volume);

  const birdVolume = useSelector((state) => state.setBirdVolume.volume);

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

  const handleSleepyMood = () => {
    dispatch(setMood("sleppy"));
  };

  const handleJazzyMood = () => {
    dispatch(setMood("jazzy"));
  };

  const handleChillMood = () => {
    dispatch(setMood("chill"));
  };

  return (
    <div className={cx("board")}>
      <div className={cx("board-header")}>
        <h4>Mood</h4>
        <img src="/assets/images/favicon.png" />
      </div>
      <div className={cx("board-setMood")}>
        <div className={cx("mood")} onClick={handleSleepyMood}>
          <img
            className={cx("icon", mood === "sleppy" ? "active" : "")}
            src="assets/images/sleep.svg"
          />
          <h4>Sleepy</h4>
        </div>
        <div className={cx("mood")} onClick={handleJazzyMood}>
          <img
            src="assets/images/jazzy.svg"
            className={cx("icon", mood === "jazzy" ? "active" : "")}
          />
          <h4>Jazzy</h4>
        </div>
        <div className={cx("mood")} onClick={handleChillMood}>
          <img
            src="assets/images/chill.svg"
            className={cx("icon", mood === "chill" ? "active" : "")}
          />
          <h4>Chill</h4>
        </div>
      </div>

      <div className={cx("mainSoundRange")}>
        <img
          src="https://lofi-omega.vercel.app/static/media/volumemin.a7bf30f88fcb9de654d08d0868b2b75a.svg"
          className={cx("icon", "off")}
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
          src="https://lofi-omega.vercel.app/static/media/volumemax.93ab152910c0fe4211ba3788895cae79.svg"
          className={cx("icon", "on")}
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
                  backgroundImage:
                    "url('https://app.lofi.co/static/media/city.94c8d02a68d3a8d7464a0cf692381ed8.svg')",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundColor: "transparent",

                  width: "25px",
                  height: "25px",
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
                  backgroundImage:
                    "url('https://app.lofi.co/static/media/rain-city.ce03bde4b19d80f61cd0316d59f3dbab.svg')",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundColor: "transparent",

                  width: "25px",
                  height: "25px",
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
                  backgroundImage:
                    "url('https://app.lofi.co/static/media/bird.59f98018990764ffe88f09dd296771d7.svg')",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundColor: "transparent",

                  width: "25px",
                  height: "25px",
                },
                "& .MuiSlider-rail": {
                  color: "rgb(40, 40, 40)",
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SoundBoard;
