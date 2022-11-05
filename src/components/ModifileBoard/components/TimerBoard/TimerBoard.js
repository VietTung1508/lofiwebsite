import style from "./TimerBoard.module.scss";
import className from "classnames/bind";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPause,
  faPenToSquare,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";

const cx = className.bind(style);

function TimerBoard() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [play, setPlay] = useState(false);
  const [isOn, setIsOn] = useState(false);

  let time = hours * 3600 + minutes * 60 + seconds;

  const min = minutes < 10 ? `0${minutes}` : minutes;
  const h = hours < 10 ? `0${hours}` : hours;
  const sec = seconds < 10 ? `0${seconds}` : seconds;

  let timer = useRef();

  useEffect(() => {
    timer.current = setInterval(() => {
      if (!play) {
        return;
      }
      if (time === 0) {
        setIsOn(false);
        setPlay(false);
        setSeconds(0);
        clearInterval(timer);
        return;
      }

      const hour = Math.floor(time / 3600);
      const minute = Math.floor(time / 60) % 60;
      const second = time % 60;

      setSeconds(second);
      setMinutes(minute);
      setHours(hour);
      time--;
    }, 1000);
    return () => clearInterval(timer.current);
  }, [play]);

  const handleMinute = (e) => {
    setMinutes(e.target.value);
  };

  const handleSecond = (e) => {
    setSeconds(e.target.value);
  };

  const handleHours = (e) => {
    setHours(e.target.value);
  };

  return (
    <div className={cx("board")}>
      <div className={cx("header")}>
        <h4>Timer</h4>
      </div>
      <div className={cx("container")}>
        {!isOn && (
          <>
            <div className={cx("timer")}>
              <input
                value={hours}
                onChange={handleHours}
                type="number"
                min="0"
                max="60"
              />
              <h5>Hours</h5>
            </div>
            <span className={cx("divider")}>:</span>
            <div className={cx("timer")}>
              <input
                value={minutes}
                onChange={handleMinute}
                type="number"
                min="0"
                max="60"
              />
              <h5>Minutes</h5>
            </div>
            <span className={cx("divider2")}>:</span>

            <div className={cx("timer")}>
              <input
                value={seconds}
                onChange={handleSecond}
                type="number"
                min="0"
                max="60"
              />
              <h5>Seconds</h5>
            </div>
          </>
        )}
        {isOn && (
          <>
            <div className={cx("timer")}>
              <h4>{h}</h4>
              <h5>Hours</h5>
            </div>
            <span className={cx("divider", isOn ? "none" : "")}>:</span>
            <div className={cx("timer")}>
              <h4>{min}</h4>
              <h5>Minutes</h5>
            </div>
            <span className={cx("divider2", isOn ? "none" : "")}>:</span>
            <div className={cx("timer")}>
              <h4>{sec}</h4>
              <h5>Seconds</h5>
            </div>
          </>
        )}
      </div>

      <div className={cx("action")}>
        <button
          className={cx("play")}
          onClick={() => {
            setIsOn(true);
            setPlay(!play);
            !play && clearInterval(timer);
          }}
        >
          <FontAwesomeIcon icon={!play ? faPlay : faPause} />
        </button>
        <button
          className={cx("edit")}
          onClick={() => {
            setIsOn(false);
            setSeconds(0);
            setHours(0);
            setMinutes(0);
            clearInterval(timer);
            setPlay(false);
          }}
        >
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
      </div>
    </div>
  );
}

export default TimerBoard;
