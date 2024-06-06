import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "~/components/Button";
import {
  faHouse,
  faListCheck,
  faPhone,
  faSignIn,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("wrapper")}>
          <img className={cx('logo')}
            src="https://i.ibb.co/CVNM2fF/132.png"
            alt="logo"
            />
      <div className={cx("inner")}>
        <div className={cx("actions", "actions-right")}>
          <Button href="https://www.chotnhanh.vn/" target="_blank" leftIcon={<FontAwesomeIcon icon={faHouse} />}>
            Trang chủ
          </Button>
          <Button href="#feature" leftIcon={<FontAwesomeIcon icon={faListCheck} />}>
            Tính năng
          </Button>
          <Button href="#questions" leftIcon={<FontAwesomeIcon icon={faListCheck} />}>
            Câu hỏi
          </Button>
          <Button href="https://www.facebook.com/chotnhanh.vn" target="_blank" leftIcon={<FontAwesomeIcon icon={faPhone} />}>Liên hệ</Button>
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
