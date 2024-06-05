import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "~/components/Button";
import { faListCheck, faPhone, faSignIn, faUserPlus } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx('actions', 'actions-right')}>
          <Button leftIcon={<FontAwesomeIcon icon={faListCheck} />}>
            Tính năng
          </Button>
          <Button leftIcon={<FontAwesomeIcon icon={faPhone} />}>
            Liên hệ
          </Button>
          <Button leftIcon={<FontAwesomeIcon icon={faSignIn} />}>
            Đăng nhập
          </Button>
          <Button leftIcon={<FontAwesomeIcon icon={faUserPlus} />}>
            Đăng ký
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
