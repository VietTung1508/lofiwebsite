import style from "./Board.module.scss";
import className from "classnames/bind";
import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faEarthAmerica,
  faNoteSticky,
  faSliders,
  faStopwatch,
  faVolleyball,
} from "@fortawesome/free-solid-svg-icons";
import SoundBoard from "./components/SoundBoard/SoundBoard";
import ScenesBoard from "./components/ScenesBoard/ScenesBoad";
import TemplateBoard from "./components/TemplateBoard/TemplateBoard";
import { useSelector } from "react-redux";
import Tippy from "@tippyjs/react";
import ToDoList from "./components/ToDoListBoard/ToDoListBoard";
import GitHubIcon from "@mui/icons-material/GitHub";
import GitHub from "@mui/icons-material/GitHub";

const cx = className.bind(style);

function Board() {
  const [openBoard, setOpenBoard] = useState(false);
  const [moreMenu, setMoreMenu] = useState(false);
  const [openScenes, setOpenScenes] = useState(false);
  const [openTemplate, setOpenTemplate] = useState(false);
  const [openTodo, setOpenTodo] = useState(false);

  const peopleRef = useRef();

  const campfireRef = useRef();

  const summerStormRef = useRef();

  const forestRef = useRef();

  const oceanRef = useRef();

  const handleOpenScenes = (e) => {
    e.stopPropagation();
    setOpenScenes(!openScenes);
    setOpenBoard(false);
    setMoreMenu(false);
    setOpenTemplate(false);
    setOpenTodo(false);
  };

  const handleOpenBoard = (e) => {
    e.stopPropagation();
    setOpenBoard(!openBoard);
    setOpenScenes(false);
    setMoreMenu(false);
    setOpenTemplate(false);
    setOpenTodo(false);
  };

  const handleOpenTemplate = (e) => {
    e.stopPropagation();
    setOpenTemplate(!openTemplate);
    setOpenBoard(false);
    setOpenScenes(false);
    setMoreMenu(false);
    setOpenTodo(false);
  };

  const handleTodoList = () => {
    setOpenTodo(!openTodo);
  };

  const oceanVolume = useSelector((state) => state.setOceanVolume.volume);

  const peopleVolume = useSelector((state) => state.setPeopleVolume.volume);

  const campfireVolume = useSelector((state) => state.setCampfireVolume.volume);

  const summerStormVolume = useSelector(
    (state) => state.setSummerStormVolume.volume
  );

  const forestVolume = useSelector((state) => state.setForestVolume.volume);

  useEffect(() => {
    if (peopleVolume > 0) {
      peopleRef.current.play();
    } else {
      peopleRef.current.pause();
    }

    peopleRef.current.volume = peopleVolume / 100;
  }, [peopleVolume]);

  useEffect(() => {
    if (oceanVolume > 0) {
      oceanRef.current.play();
    } else {
      oceanRef.current.pause();
    }

    oceanRef.current.volume = oceanVolume / 100;
  }, [oceanVolume]);

  useEffect(() => {
    if (campfireVolume > 0) {
      campfireRef.current.play();
    } else {
      campfireRef.current.pause();
    }

    campfireRef.current.volume = campfireVolume / 100;
  }, [campfireVolume]);

  useEffect(() => {
    if (summerStormVolume > 0) {
      summerStormRef.current.play();
    } else {
      summerStormRef.current.pause();
    }

    summerStormRef.current.volume = summerStormVolume / 100;
  }, [summerStormVolume]);

  useEffect(() => {
    if (forestVolume > 0) {
      forestRef.current.play();
    } else {
      forestRef.current.pause();
    }

    forestRef.current.volume = forestVolume / 100;
  }, [forestVolume]);

  return (
    <>
      <div
        className={cx(
          "wrapper",
          openBoard ? "open" : "",
          moreMenu ? "more" : ""
        )}
      >
        <Tippy content="Sounds Board" placement="left" arrow={false}>
          <div className={cx("wrapper-icon")}>
            <FontAwesomeIcon
              className={cx("icon", openBoard ? "active" : "")}
              icon={faSliders}
              onClick={handleOpenBoard}
            />
          </div>
        </Tippy>

        <Tippy content="Playlist" placement="left" arrow={false}>
          <div className={cx("wrapper-icon")}>
            <FontAwesomeIcon
              className={cx("icon", openTemplate ? "active" : "")}
              icon={faVolleyball}
              onClick={handleOpenTemplate}
            />
          </div>
        </Tippy>

        <Tippy content="Scenes Board" placement="left" arrow={false}>
          <div className={cx("wrapper-icon")}>
            <FontAwesomeIcon
              className={cx("icon", openScenes ? "active" : "")}
              icon={faEarthAmerica}
              onClick={handleOpenScenes}
            />
          </div>
        </Tippy>

        <Tippy content="Toolkits" placement="left" arrow={false}>
          <div className={cx("wrapper-icon")}>
            <FontAwesomeIcon
              className={cx("icon", moreMenu ? "active" : "")}
              icon={faBookOpen}
              onClick={() => {
                setMoreMenu(!moreMenu);
                setOpenBoard(false);
                setOpenScenes(false);
                setOpenTemplate(false);
                setOpenTodo(false);
              }}
            />
          </div>
        </Tippy>

        <div className={cx(moreMenu ? "openTool" : "closeTool")}>
          <Tippy content="Timer" placement="left" arrow={false}>
            <div className={cx("wrapper-menu-icon", "top")}>
              <FontAwesomeIcon className={cx("icon")} icon={faStopwatch} />
            </div>
          </Tippy>
          <Tippy content="ToDoList" placement="left" arrow={false}>
            <div className={cx("wrapper-menu-icon")}>
              <FontAwesomeIcon
                className={cx("icon")}
                icon={faNoteSticky}
                onClick={handleTodoList}
              />
            </div>
          </Tippy>
          <Tippy content="Source Code" placement="left" arrow={false}>
            <div className={cx("wrapper-menu-icon")}>
              <div className={cx("git")}>
                <a
                  href="https://github.com/VietTung1508/lofiwebsite"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <GitHub />
                </a>
              </div>
            </div>
          </Tippy>
        </div>
      </div>

      {openBoard && <SoundBoard />}
      {openScenes && <ScenesBoard />}
      {openTemplate && <TemplateBoard />}
      {moreMenu && openTodo && <ToDoList />}

      <audio ref={peopleRef} loop src="/assets/noises/people.mp3"></audio>
      <audio ref={oceanRef} loop src="/assets/noises/ocean.mp3"></audio>
      <audio ref={campfireRef} loop src="/assets/noises/campfire.mp3"></audio>
      <audio
        ref={summerStormRef}
        loop
        src="/assets/noises/summerStorm.mp3"
      ></audio>
      <audio ref={forestRef} loop src="/assets/noises/forestNight.mp3"></audio>
    </>
  );
}

export default Board;
