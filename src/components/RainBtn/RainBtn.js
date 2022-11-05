import className from "classnames/bind";
import style from "./RainBtn.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudRain } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { setRain, setRainVolume } from "../../redux/Action/actions";
import { useState, useRef, useEffect } from "react";

const cx = className.bind(style);

function RainBtn({ isCafe = false, isKyoto = false, isNewYork = false }) {
  const [rain, setRainHere] = useState(false);

  const rainVolume = useSelector((state) => state.setRainVolume.volume);

  const audioRef = useRef();

  const dispatch = useDispatch();

  const handleRain = () => {
    setRainHere(!rain);
    rain ? dispatch(setRain("rain")) : dispatch(setRain("clear"));
    rain ? audioRef.current.play() : audioRef.current.pause();
    rainVolume === 0 ? dispatch(setRainVolume(50)) : dispatch(setRainVolume(0));
  };

  useEffect(() => {
    if (rainVolume > 0) {
      audioRef.current.play();
      dispatch(setRain("rain"));
    } else {
      audioRef.current.pause();
      dispatch(setRain("clear"));
    }

    audioRef.current.volume = rainVolume / 100;
  }, [rainVolume]);

  return (
    <button
      className={cx("wrapper", { isCafe, isKyoto, isNewYork })}
      onClick={handleRain}
    >
      <FontAwesomeIcon icon={faCloudRain} className={cx("rain")} />
      <audio ref={audioRef} loop src="/assets/noises/rain.mp3"></audio>
    </button>
  );
}

export default RainBtn;
