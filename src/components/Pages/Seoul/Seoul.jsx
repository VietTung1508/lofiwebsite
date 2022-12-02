import styles from "./Seoul.module.scss";
import className from "classnames/bind";
import Navbar from "../../Navbar/Navbar";
import Board from "../../ModifileBoard/Board";
import Footer from "../../Footer/Footer";

import { useSelector } from "react-redux";
import RainBtn from "../../RainBtn/RainBtn.js";
import TrafficBtn from "../../TrafficBtn/TrafficBtn.js";
import BirdBtn from "../../BirdBtn/BirdBtn.js";
import AnimatedPage from "../../AnimatedPage/AnimatedPage";

const cx = className.bind(styles);

function Seoul() {
  const mode = useSelector((state) => state.setMode.mode);
  const rain = useSelector((state) => state.setRain.rain);

  const weather = `${mode}-${rain}`;

  return (
    <>
      <Navbar />
      <Board />
      <RainBtn isSeoul />

      <AnimatedPage>
        <>
          <video
            className={cx(weather === "day-clear" ? "videoOn" : "videoOff")}
            autoPlay
            loop
            muted
          >
            <source src="/assets/videos/seoulDay.mp4" type="video/mp4" />
          </video>
          <video
            className={cx(weather === "night-clear" ? "videoOn" : "videoOff")}
            autoPlay
            loop
            muted
          >
            <source src="/assets/videos/seoulNight.mp4" type="video/mp4" />
          </video>
          <video
            className={cx(weather === "night-rain" ? "videoOn" : "videoOff")}
            autoPlay
            loop
            muted
          >
            <source src="/assets/videos/seoulNightRain.mp4" type="video/mp4" />
          </video>
          <video
            className={cx(weather === "day-rain" ? "videoOn" : "videoOff")}
            autoPlay
            loop
            muted
          >
            <source src="/assets/videos/seoulDayRain.mp4" type="video/mp4" />
          </video>
        </>
      </AnimatedPage>
      <TrafficBtn isSeoul />
      <BirdBtn isSeoul />
      <Footer />
    </>
  );
}

export default Seoul;
