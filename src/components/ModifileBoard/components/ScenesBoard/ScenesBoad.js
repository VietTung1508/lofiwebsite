import className from "classnames/bind";
import style from "./ScenesBoard.module.scss";
import { Link } from "react-router-dom";

const cx = className.bind(style);

function ScenesBoard() {
  return (
    <div className={cx("board")}>
      <div className={cx("container-board")}>
        <div className={cx("header")}>
          <h4>Scenes</h4>
        </div>
        <div className={cx("container")}>
          <div className={cx("scene")}>
            <Link to="/">
              <img src="/assets/images/chillVibe.png" alt="scene" />
            </Link>
          </div>
          <div className={cx("scene")}>
            <Link to="/cafe">
              <img src="/assets/images/bookCafe.png" alt="scene" />
            </Link>
          </div>
          <div className={cx("scene")}>
            <Link to="/kyoto">
              <img src="/assets/images/kyoto.png" alt="scene" />
            </Link>
          </div>
          <div className={cx("scene")}>
            <Link to="/newyork">
              <img src="/assets/images/NewYork.png" alt="scene" />
            </Link>
          </div>
          <div className={cx("scene", "premium")}>
            <img src="/assets/images/cafe.png" alt="scene" />
          </div>
          <div className={cx("scene", "premium")}>
            <img src="/assets/images/NorthernLight.png" alt="scene" />
          </div>
          <div className={cx("scene", "premium")}>
            <img src="/assets/images/forest.png" alt="scene" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScenesBoard;
