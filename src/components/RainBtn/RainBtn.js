import className from "classnames/bind";
import style from "./RainBtn.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudRain } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useState, useRef } from "react";
import { setRain } from "../../redux/Action/actions";

const cx = className.bind(style);

function RainBtn() {
  const [rain, setRainHere] = useState(false);

  const audioRef = useRef();

  const dispatch = useDispatch();

  const handleRain = () => {
    setRainHere(!rain);
    rain ? dispatch(setRain("rain")) : dispatch(setRain("clear"));
    rain ? audioRef.current.play() : audioRef.current.pause();
    audioRef.current.volume = 0.3;
  };

  return (
    <button className={cx("wrapper")} onClick={handleRain}>
      <FontAwesomeIcon icon={faCloudRain} className={cx("rain")} />
      <audio ref={audioRef} loop src="/assets/noises/rain.mp3"></audio>
    </button>
  );
}

export default RainBtn;
