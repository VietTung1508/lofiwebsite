import className from "classnames/bind";
import style from "./BirdBtn.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDove } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBirdVolume } from "../../redux/Action/actions";

const cx = className.bind(style);

function BirnBtn() {
  const [bird, setBird] = useState(false);

  const dispatch = useDispatch();

  const birdVolume = useSelector((state) => state.setBirdVolume.volume);

  const audioRef = useRef();

  const handleTraffic = () => {
    setBird(!bird);
    bird ? audioRef.current.play() : audioRef.current.pause();
    birdVolume === 0 ? dispatch(setBirdVolume(50)) : dispatch(setBirdVolume(0));
  };

  useEffect(() => {
    if (birdVolume > 0) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }

    audioRef.current.volume = birdVolume / 100;
  }, [birdVolume]);

  return (
    <button className={cx("wrapper")} onClick={handleTraffic}>
      <FontAwesomeIcon icon={faDove} className={cx("bird")} />
      <audio ref={audioRef} loop src="/assets/noises/birds.mp3"></audio>
    </button>
  );
}

export default BirnBtn;
