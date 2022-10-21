import style from "./Player.module.scss";
import className from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef } from "react";
import {
  faBackwardFast,
  faForwardFast,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import {
  faAddressBook,
  faExpand,
  faVolumeHigh,
  faVolumeLow,
  faVolumeXmark,
  faWindowMinimize,
} from "@fortawesome/free-solid-svg-icons";
import { jazzy } from "../../data/songData";

const cx = className.bind(style);

function Player() {
  const [pause, setPause] = useState(true);
  const [sound, setSound] = useState(true);

  const audioRef = useRef();
  return (
    <>
      <div className="player-action">
        <button className={cx("wrap", "pre")}>
          <FontAwesomeIcon icon={faBackwardFast} />
        </button>
        <button
          className={cx("wrap", "play")}
          onClick={() => {
            if (pause) {
              audioRef.current.play();
            } else {
              audioRef.current.pause();
            }
            setPause(!pause);
          }}
        >
          <FontAwesomeIcon icon={pause ? faPlay : faPause} />
        </button>
        <button className={cx("wrap", "next")}>
          <FontAwesomeIcon icon={faForwardFast} />
        </button>
      </div>
      <div className={cx("actions")}>
        <Tippy content="Mute all" arrow={false}>
          <button
            className={cx("action-wrap")}
            onClick={() => {
              setSound(!sound);
              audioRef.current.muted = sound;
            }}
          >
            <FontAwesomeIcon
              icon={!sound ? faVolumeXmark : faVolumeLow}
              className={cx("iconVolume")}
            />
          </button>
        </Tippy>

        <button
          className={cx("action-wrap")}
          onClick={() => {
            if (!window.screenTop && !window.screenY) {
              document.documentElement.requestFullscreen();
            } else {
              console.log("exit");
              document.exitFullscreen();
            }
          }}
        >
          <FontAwesomeIcon icon={faExpand} className={cx("iconExpand")} />
        </button>
        <audio ref={audioRef} src={jazzy[1].src} loop></audio>
      </div>
    </>
  );
}

export default Player;
