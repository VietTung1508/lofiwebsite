import style from "./Switch.module.scss";
import className from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setMode } from "../../redux/Action/actions";

const cx = className.bind(style);

function Switch() {
  const [day, setDay] = useState(false);

  const dispatch = useDispatch();

  const handleMode = () => {
    setDay(!day);
    day ? dispatch(setMode("day")) : dispatch(setMode("night"));
  };

  return (
    <label className={cx("switch")}>
      <FontAwesomeIcon icon={faSun} className={cx("sun")} />
      <input type="checkbox" onChange={handleMode} />
      <span className={cx("slider")} />
      <FontAwesomeIcon icon={faMoon} className={cx("moon")} />
    </label>
  );
}

export default Switch;
