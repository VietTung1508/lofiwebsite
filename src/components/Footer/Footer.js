import className from "classnames/bind";
import style from "./Footer.module.scss";
import { chill, sleppy, jazzy } from "../../data/songData";
import { useSelector } from "react-redux";

const cx = className.bind(style);

function Footer() {
  const currentSongIndex = useSelector(
    (state) => state.setCurrentSongIndex.currentSong
  );

  const mood = useSelector((state) => state.setMood.mood);

  const songs = mood === "chill" ? chill : mood === "sleppy" ? sleppy : jazzy;

  return (
    <div className={cx("wrapper")}>
      <p>
        Music name - <span>{songs[currentSongIndex].name}</span>{" "}
      </p>
    </div>
  );
}

export default Footer;
