import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import Header from "./Header";
import Slideshow from "./Slideshow";
import Main from "./Main";
import Nav from "./Nav";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <Slideshow />
        <div className={cx("content")}>
          <Main />
          <div className={cx("sidebar")}>
            <Nav />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
