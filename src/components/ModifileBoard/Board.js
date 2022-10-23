import style from "./Board.module.scss";
import className from "classnames/bind";
import { useState } from "react";
import { setMainVolume } from "../../redux/Action/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGuitar,
  faMoon,
  faMountainSun,
  faMugSaucer,
  faNoteSticky,
  faSliders,
  faStopwatch,
  faVolumeHigh,
  faVolumeLow,
} from "@fortawesome/free-solid-svg-icons";

import { useDispatch, useSelector } from "react-redux";
import { Slider } from "@mui/material";

const cx = className.bind(style);

function Board() {
  const [openBoard, setOpenBoard] = useState(false);
  const dispatch = useDispatch();
  const mainVolume = useSelector((state) => state.setMainVolume.volume);

  const handleMainVolume = (e) => {
    dispatch(setMainVolume(e.target.value));
  };

  return (
    <>
      <div className={cx("wrapper", openBoard ? "open" : "")}>
        <div className={cx("wrapper-icon")}>
          <FontAwesomeIcon
            className={cx("icon")}
            icon={faSliders}
            onClick={() => {
              setOpenBoard(!openBoard);
            }}
          />
        </div>
        <div className={cx("wrapper-icon")}>
          <FontAwesomeIcon className={cx("icon")} icon={faStopwatch} />
        </div>

        <div className={cx("wrapper-icon")}>
          <FontAwesomeIcon className={cx("icon")} icon={faNoteSticky} />
        </div>

        <div className={cx("wrapper-icon")}>
          <FontAwesomeIcon className={cx("icon")} icon={faMountainSun} />
        </div>
      </div>

      {openBoard && (
        <div className={cx("board")}>
          <div className={cx("board-header")}>
            <h4>Mood</h4>
            <img src="/assets/images/favicon.png" />
          </div>
          <div className={cx("board-setMood")}>
            <div className={cx("mood")}>
              <img
                className={cx("icon")}
                src="https://lofi-omega.vercel.app/static/media/sleep.359d9b45c4ac83027ca135b89ed86495.svg"
              />
              <h4>Sleepy</h4>
            </div>
            <div className={cx("mood")}>
              <img
                src="https://lofi-omega.vercel.app/static/media/jazzy.a2e657b113ecbdb46ca62989b992ded4.svg"
                className={cx("icon")}
              />
              <h4>Jazzy</h4>
            </div>
            <div className={cx("mood")}>
              <img
                src="https://lofi-omega.vercel.app/static/media/chill.e2ab768a2be20208135054cc64015a0c.svg"
                className={cx("icon")}
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
              className={cx("volume-slider")}
              sx={{
                "& .MuiSlider-thumb": {
                  color: "#fff",
                  width: "18px",
                  height: "18px",
                },
                "& .MuiSlider-rail": {
                  color: "#4e5054",
                },
              }}
              onChange={handleMainVolume}
            />
            <img
              src="https://lofi-omega.vercel.app/static/media/volumemax.93ab152910c0fe4211ba3788895cae79.svg"
              className={cx("icon", "on")}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Board;
