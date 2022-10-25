import Navbar from "../../Navbar/Navbar";
import Board from "../../ModifileBoard/Board";
import Footer from "../../Footer/Footer";
import { useSelector } from "react-redux";
import BirnBtn from "../../BirdBtn/BirdBtn";
import RainBtn from "../../RainBtn/RainBtn";
import TrafficBtn from "../../TrafficBtn/TrafficBtn";
import styles from "./CafeShop.module.scss";
import className from "classnames/bind";
import AnimatedPage from "../../AnimatedPage/AnimatedPage";

const cx = className.bind(styles);

function CafeShop() {
  const mode = useSelector((state) => state.setMode.mode);
  const rain = useSelector((state) => state.setRain.rain);

  const weather = `${mode}-${rain}`;

  return (
    <>
      <Navbar />
      <Board />
      <AnimatedPage>
        <>
          <video
            className={cx(weather === "day-clear" ? "videoOn" : "videoOff")}
            autoPlay
            loop
            muted
          >
            <source src="/assets/videos/CafeDay.mp4" type="video/mp4" />
          </video>
          <video
            className={cx(weather === "night-clear" ? "videoOn" : "videoOff")}
            autoPlay
            loop
            muted
          >
            <source src="/assets/videos/CafeNight.mp4" type="video/mp4" />
          </video>
          <video
            className={cx(weather === "night-rain" ? "videoOn" : "videoOff")}
            autoPlay
            loop
            muted
          >
            <source src="/assets/videos/CafeRainyNight.mp4" type="video/mp4" />
          </video>
          <video
            className={cx(weather === "day-rain" ? "videoOn" : "videoOff")}
            autoPlay
            loop
            muted
          >
            <source src="/assets/videos/CafeRainyDay.mp4" type="video/mp4" />
          </video>
        </>
      </AnimatedPage>
      <Footer />
      <BirnBtn isCafe />
      <RainBtn isCafe />
      <TrafficBtn isCafe />
    </>
  );
}

export default CafeShop;
