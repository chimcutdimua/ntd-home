import React from "react";
import classNames from "classnames/bind";
import styles from "./Nav.module.scss";
const cx = classNames.bind(styles);

function Nav() {
  return (
    <nav className={cx("nav")}>
      <h1 className={cx('title-container')}>hệ sinh thái toàn diện chốt nhanh software</h1>
      <img className={cx('img-container')} src='https://livechat.chotnhanh.vn/media/server/85fed3ac-efea-437b-ab41-5fede58b603c.png' alt='hệ sinh thái' />
      <h4 className={cx('title')}>
        TỐI ĐA HÓA CHUYỂN ĐỔI - VỚI LIVE CHAT BẠN CÓ THỂ LIVESTREAM TỰ ĐỘNG CHỐT ĐƠN - CHATBOT HỖ TRỢ CÙNG 1 LÚC TRÊN NHIỀU TRANG FACEBOOK VÀ CSKH TỰ ĐỘNG . Hơn 10.000+ Cá nhân, Doanh nghiệp, Agency đang sử dụng Live Chat mỗi ngày để phát triển kênh bán hàng. Tích hợp tất cả trong 1 ứng dụng duy nhất . là công cụ hỗ trợ trong việc nhắn tin trên nền tảng Facebook Messenger giúp Tối ưu trải nghiệm . Tối đa năng suất lao động cho sự lên tới 80% . Sử dụng dễ dàng trên các thiết bị . Phân quyền và quản lý công việc không giới hạn số lượng nhân viên
      </h4>
    </nav>
  );
}

export default Nav;