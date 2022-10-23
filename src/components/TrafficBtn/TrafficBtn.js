import className from "classnames/bind";
import style from "./TrafficBtn.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarSide } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef } from "react";

const cx = className.bind(style);

function TrafficBtn() {
  const [traffic, setTraffic] = useState(false);

  const audioRef = useRef();

  const handleTraffic = () => {
    setTraffic(!traffic);
    traffic ? audioRef.current.play() : audioRef.current.pause();
    audioRef.current.volume = 0.4;
  };

  return (
    <button className={cx("wrapper")} onClick={handleTraffic}>
      <FontAwesomeIcon icon={faCarSide} className={cx("car")} />
      <audio ref={audioRef} loop src="/assets/noises/city_traffic.mp3"></audio>
    </button>
  );
}

export default TrafficBtn;
