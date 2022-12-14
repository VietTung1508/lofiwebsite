import styles from "./Home.module.scss";
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

function Home() {
  const mode = useSelector((state) => state.setMode.mode);
  const rain = useSelector((state) => state.setRain.rain);

  const weather = `${mode}-${rain}`;

  return (
    <>
      <Navbar />
      <Board />
      <RainBtn />

      <AnimatedPage>
        <>
          <video
            className={cx(weather === "day-clear" ? "videoOn" : "videoOff")}
            autoPlay
            loop
            muted
          >
            <source src="/assets/videos/Day-sunny.mp4" type="video/mp4" />
          </video>
          <video
            className={cx(weather === "night-clear" ? "videoOn" : "videoOff")}
            autoPlay
            loop
            muted
          >
            <source src="/assets/videos/Night-clear.mp4" type="video/mp4" />
          </video>
          <video
            className={cx(weather === "night-rain" ? "videoOn" : "videoOff")}
            autoPlay
            loop
            muted
          >
            <source src="/assets/videos/Night-rainny.mp4" type="video/mp4" />
          </video>
          <video
            className={cx(weather === "day-rain" ? "videoOn" : "videoOff")}
            autoPlay
            loop
            muted
          >
            <source src="/assets/videos/Day-rainny.mp4" type="video/mp4" />
          </video>
        </>
      </AnimatedPage>
      <TrafficBtn />
      <BirdBtn />
      <Footer />
    </>
  );
}

export default Home;
