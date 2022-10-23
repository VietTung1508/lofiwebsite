import style from "./Board.module.scss";
import className from "classnames/bind";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faEarthAmerica,
  faMountainSun,
  faNoteSticky,
  faRectangleList,
  faSliders,
  faStopwatch,
  faVolleyball,
} from "@fortawesome/free-solid-svg-icons";
import SoundBoard from "./components/SoundBoard/SoundBoard";
import { Slider } from "@mui/material";

const cx = className.bind(style);

function Board() {
  const [openBoard, setOpenBoard] = useState(false);
  const [moreMenu, setMoreMenu] = useState(false);

  return (
    <>
      <div
        className={cx(
          "wrapper",
          openBoard ? "open" : "",
          moreMenu ? "more" : ""
        )}
      >
        <div className={cx("wrapper-icon")}>
          <FontAwesomeIcon
            className={cx("icon", openBoard ? "active" : "")}
            icon={faSliders}
            onClick={() => {
              setOpenBoard(!openBoard);
            }}
          />
        </div>
        <div className={cx("wrapper-icon")}>
          <FontAwesomeIcon className={cx("icon")} icon={faVolleyball} />
        </div>

        <div className={cx("wrapper-icon")}>
          <FontAwesomeIcon className={cx("icon")} icon={faEarthAmerica} />
        </div>

        <div className={cx("wrapper-icon")}>
          <FontAwesomeIcon
            className={cx("icon")}
            icon={faBookOpen}
            onClick={() => {
              setMoreMenu(!moreMenu);
            }}
          />
        </div>
        <div className={cx(moreMenu ? "openTool" : "closeTool")}>
          <div className={cx("wrapper-menu-icon", "top")}>
            <FontAwesomeIcon className={cx("icon")} icon={faStopwatch} />
          </div>
          <div className={cx("wrapper-menu-icon")}>
            <FontAwesomeIcon className={cx("icon")} icon={faNoteSticky} />
          </div>
          <div className={cx("wrapper-menu-icon")}>
            <FontAwesomeIcon className={cx("icon")} icon={faRectangleList} />
          </div>
        </div>
      </div>

      {openBoard && <SoundBoard />}
    </>
  );
}

export default Board;
