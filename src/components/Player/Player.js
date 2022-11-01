import style from "./Player.module.scss";
import className from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef, useEffect } from "react";
import {
  faBackwardFast,
  faBars,
  faForwardFast,
  faPause,
  faPerson,
  faPlay,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";

import {
  faAddressBook,
  faExpand,
  faVolumeHigh,
  faVolumeLow,
  faVolumeXmark,
  faWindowMinimize,
} from "@fortawesome/free-solid-svg-icons";
import { chill, sleppy, jazzy } from "../../data/songData";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentSongIndex } from "../../redux/Action/actions";

const cx = className.bind(style);

const MENU_SETTING = [
  {
    icon: "https://app.lofi.co/icons/profile.svg",
    title: "Login",
  },
  {
    icon: "https://app.lofi.co/icons/pricing.svg",
    title: "Pricing",
  },
  {
    icon: "https://app.lofi.co/icons/settings_h.svg",
    title: "Settings",
  },
  {
    icon: "https://app.lofi.co/icons/message.svg",
    title: "Contact",
  },
  {
    icon: "https://app.lofi.co/icons/new/infos.svg",
    title: "How is Work",
  },
  {
    icon: "https://app.lofi.co/icons/new/faqs.svg",
    title: "Playlist",
  },
  {
    icon: "https://app.lofi.co/icons/share.svg",
    title: "Submit music",
  },
  {
    icon: "https://app.lofi.co/icons/about-us.svg",
    title: "About us",
  },
];

function Player() {
  const [pause, setPause] = useState(true);
  const [sound, setSound] = useState(true);

  const dispatch = useDispatch();

  const currentSongIndex = useSelector(
    (state) => state.setCurrentSongIndex.currentSong
  );

  const mainVolume = useSelector((state) => state.setMainVolume.volume);

  const mood = useSelector((state) => state.setMood.mood);

  const songs = mood === "chill" ? chill : mood === "sleppy" ? sleppy : jazzy;

  const audioRef = useRef();

  useEffect(() => {
    audioRef.current.volume = mainVolume / 100;
  }, [mainVolume]);

  const handlePre = () => {
    if (pause) return;

    let temp = currentSongIndex;
    temp--;

    if (temp < 0) {
      dispatch(setCurrentSongIndex(songs.length - 1));
    } else {
      dispatch(setCurrentSongIndex(temp));
    }
  };

  const handleNext = () => {
    if (pause) return;

    let temp = currentSongIndex;
    temp++;

    if (temp > songs.length - 1) {
      dispatch(setCurrentSongIndex(0));
    } else {
      dispatch(setCurrentSongIndex(temp));
    }
  };

  const handleFullScreen = () => {
    if (!window.screenTop && !window.screenY) {
      document.documentElement.requestFullscreen();
    } else {
      console.log("exit");
      document.exitFullscreen();
    }
  };

  const handlePause = () => {
    if (pause) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setPause(!pause);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={songs[currentSongIndex].src}
        autoPlay={!pause}
        loop
      ></audio>
      <div className="player-action">
        <button className={cx("wrap", "pre")} onClick={handlePre}>
          <FontAwesomeIcon icon={faBackwardFast} />
        </button>
        <button className={cx("wrap", "play")} onClick={handlePause}>
          <FontAwesomeIcon icon={pause ? faPlay : faPause} />
        </button>
        <button className={cx("wrap", "next")} onClick={handleNext}>
          <FontAwesomeIcon icon={faForwardFast} />
        </button>
      </div>
      <div className={cx("actions")}>
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

        <button className={cx("action-wrap")} onClick={handleFullScreen}>
          <FontAwesomeIcon icon={faExpand} className={cx("iconExpand")} />
        </button>

        <Tippy
          trigger="click"
          placement="bottom-end"
          render={(attrs) => (
            <div className="box" tabIndex="-1" {...attrs}>
              <div className={cx("menu-box")}>
                {MENU_SETTING.map((item, i) => (
                  <div key={i} className={cx("menu-item")}>
                    <img src={item.icon} className={cx("icon")} />
                    <h4>{item.title}</h4>
                  </div>
                ))}
              </div>
            </div>
          )}
        >
          <button className={cx("action-wrap")}>
            <FontAwesomeIcon icon={faBars} className={cx("iconMenu")} />
          </button>
        </Tippy>
      </div>
    </>
  );
}

export default Player;
