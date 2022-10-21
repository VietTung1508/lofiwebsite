import style from "./Board.module.scss";
import className from "classnames/bind";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMountainSun,
  faNoteSticky,
  faSliders,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons";

const cx = className.bind(style);

function Board() {
  const [openBoard, setOpenBoard] = useState(false);

  return (
    <>
      <div className={cx("wrapper", openBoard ? "open" : "")}>
        <div className={cx("wrapper-icon")}>
          <FontAwesomeIcon
            className={cx("icon")}
            icon={faSliders}
            onClick={() => {
              setOpenBoard(!openBoard);
            }}
          />
        </div>
        <div className={cx("wrapper-icon")}>
          <FontAwesomeIcon className={cx("icon")} icon={faStopwatch} />
        </div>

        <div className={cx("wrapper-icon")}>
          <FontAwesomeIcon className={cx("icon")} icon={faNoteSticky} />
        </div>

        <div className={cx("wrapper-icon")}>
          <FontAwesomeIcon className={cx("icon")} icon={faMountainSun} />
        </div>
      </div>

      {openBoard && (
        <div className={cx("board")}>
          <div className={cx("board-header")}>
            <h4>Mood</h4>
            <img src="/assets/images/favicon.png" />
          </div>
          <div className={cx("board-setMood")}>
            <div className={cx("mood")}>
              <h4>Sleepy</h4>
            </div>
            <div className={cx("mood")}>
              <img
                src="assets/images/saxophone.png"
                className={cx("saxIcon")}
              />
              <h4>Jazzy</h4>
            </div>
            <div className={cx("mood")}>
              <h4>Chill</h4>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Board;
