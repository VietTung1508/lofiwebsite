import style from "./Player.module.scss";
import className from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef, useEffect } from "react";
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
import { chill } from "../../data/songData";
import ReactAudioPlayer from "react-audio-player";
import { useSelector } from "react-redux";

const cx = className.bind(style);

function Player() {
  const [pause, setPause] = useState(true);
  const [sound, setSound] = useState(true);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const mainVolume = useSelector((state) => state.setMainVolume.volume);

  const audioRef = useRef();

  useEffect(() => {
    audioRef.current.volume = mainVolume / 100;
  }, [mainVolume]);

  const handlePre = () => {
    if (pause) return;

    let temp = currentSongIndex;
    temp--;

    if (temp < 0) {
      setCurrentSongIndex(chill.length - 1);
    } else {
      setCurrentSongIndex(temp);
    }
  };

  const handleNext = () => {
    if (pause) return;

    let temp = currentSongIndex;
    temp++;

    if (temp > chill.length - 1) {
      setCurrentSongIndex(0);
    } else {
      setCurrentSongIndex(temp);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={chill[currentSongIndex].src}
        autoPlay={!pause}
        loop
      ></audio>
      <div className="player-action">
        <button className={cx("wrap", "pre")} onClick={handlePre}>
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
        <button className={cx("wrap", "next")} onClick={handleNext}>
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
      </div>
    </>
  );
}

export default Player;
