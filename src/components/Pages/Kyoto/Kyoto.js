import styles from "./Kyoto.module.scss";
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

function Kyoto() {
  const mode = useSelector((state) => state.setMode.mode);

  const weather = `${mode}`;

  return (
    <>
      <Navbar />
      <Board />

      <AnimatedPage>
        <>
          <video
            className={cx(weather === "day" ? "videoOn" : "videoOff")}
            autoPlay
            loop
            muted
          >
            <source src="/assets/videos/kyotoDay.mp4" type="video/mp4" />
          </video>
          <video
            className={cx(weather === "night" ? "videoOn" : "videoOff")}
            autoPlay
            loop
            muted
          >
            <source src="/assets/videos/kyotoNight.mp4" type="video/mp4" />
          </video>
        </>
      </AnimatedPage>
      <TrafficBtn isKyoto />
      <BirdBtn isKyoto />
      <Footer />
    </>
  );
}

export default Kyoto;
