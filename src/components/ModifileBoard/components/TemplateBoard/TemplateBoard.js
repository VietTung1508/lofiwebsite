import styles from "./Template.module.scss";
import className from "classnames/bind";

const cx = className.bind(styles);

function Template() {
  return (
    <div className={cx("board")}>
      <div className={cx("header")}>
        <h4>Playlists</h4>
      </div>
      <div className={cx("playlists")}>
        <div className={cx("playlist")}>
          <img src="https://lofi-omega.vercel.app/assets/img/playlist/chill.svg" />
        </div>
        <div className={cx("playlist")}>
          <img src="https://lofi-omega.vercel.app/assets/img/playlist/focus.svg" />
        </div>
        <div className={cx("playlist")}>
          <img src="https://lofi-omega.vercel.app/assets/img/playlist/sleep.svg" />
        </div>
      </div>
      <div className={cx("template")}>
        <h4>Templates</h4>
        <p>You don't have any template save</p>
      </div>
    </div>
  );
}

export default Template;
