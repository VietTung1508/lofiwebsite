import className from "classnames/bind";
import style from "./TrafficBtn.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarSide } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCityTrafficVolume } from "../../redux/Action/actions";

const cx = className.bind(style);

function TrafficBtn({ isCafe = false }) {
  const [traffic, setTraffic] = useState(false);

  const dispatch = useDispatch();

  const trafficVolume = useSelector((state) => state.setTrafficVolume.volume);

  const audioRef = useRef();

  const handleTraffic = () => {
    setTraffic(!traffic);
    traffic ? audioRef.current.play() : audioRef.current.pause();
    trafficVolume === 0
      ? dispatch(setCityTrafficVolume(50))
      : dispatch(setCityTrafficVolume(0));
  };

  useEffect(() => {
    if (trafficVolume > 0) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }

    audioRef.current.volume = trafficVolume / 100;
  }, [trafficVolume]);

  return (
    <button className={cx("wrapper", { isCafe })} onClick={handleTraffic}>
      <FontAwesomeIcon icon={faCarSide} className={cx("car")} />
      <audio ref={audioRef} loop src="/assets/noises/city_traffic.mp3"></audio>
    </button>
  );
}

export default TrafficBtn;
