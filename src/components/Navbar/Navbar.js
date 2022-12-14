import styles from "./Navbar.module.scss";
import className from "classnames/bind";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Switch from "../Switch/Switch";

import "tippy.js/dist/tippy.css";
import Player from "../Player/Player";

const cx = className.bind(styles);

function Navbar() {
  const date = new Date();
  const [hour, setHour] = useState(
    date.getHours() > 12 ? date.getHours() - 12 : date.getHours()
  );
  const [minute, setMinute] = useState(date.getMinutes());

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setMinute(date.getMinutes());
      setHour(date.getHours() > 12 ? date.getHours() - 12 : date.getHours());
    }, 30000);
  }, [minute]);

  return (
    <nav className={cx("wrapper")}>
      <div className={cx("logo")}>
        <Link to="/">
          <img src="/assets/images/logo.gif" alt="Logo" />
        </Link>
      </div>
      <div className={cx("actions")}>
        <div className={cx("clockBox")}>
          <span>
            <p>{`${hour >= 10 ? hour : `0${hour}`}:${
              minute >= 10 ? minute : `0${minute}`
            } ${date.getHours() < 12 ? "AM" : "PM"}`}</p>
          </span>
        </div>

        <Switch />

        <Player />
      </div>
    </nav>
  );
}

export default Navbar;
