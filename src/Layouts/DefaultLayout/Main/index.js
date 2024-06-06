import classNames from "classnames/bind";
import styles from "./Main.module.scss";

const cx = classNames.bind(styles);
function Main() {
  return (
    <>
      <div className={cx("wrapper")}>
        <nav className={cx("container")}>
          <div className={cx("section-container")}>
            <nav className={cx("section-title")}>
              <h4 className={cx("text-light")}></h4>
              <h4 className={cx("text-title")}>
                GIAO DIỆN HIỆN ĐẠI DỄ SỬ DỤNG
              </h4>
            </nav>
            <p className={cx("section-content")}>
              Giao diện thân thiện dễ sử dụng, tương thích với mọi thiết bị. Bạn
              có thể bắt đầu livestream chỉ với vài thao tác. Chúng tôi có đầy
              đủ các video hướng dẫn sử dụng dành cho bạn.
            </p>
            <button className={cx("main-btn")}>DÙNG NGAY MIỄN PHÍ</button>
          </div>
        </nav>
        <nav className={cx("image1")}>
          <img
            className={cx("image-container")}
            src="https://livechat.chotnhanh.vn/media/server/195e6d88-8b01-4fc0-b68d-6e1550ab37be.png"
            alt="hệ sinh thái"
          />
        </nav>
      </div>
      <div className={cx("wrapper")}>
        <nav className={cx("image2")}>
          <img
            className={cx("image-container")}
            src="https://livechat.chotnhanh.vn/media/server/16fde194-8796-4444-9ecd-661b922e3400.png"
            alt="hệ sinh thái"
          />
        </nav>
        <nav className={cx("container")}>
          <div className={cx("section-container")}>
            <nav className={cx("section-title")}>
              <h4 className={cx("text-light")}></h4>
              <h4 className={cx("text-title")}>CHỨC NĂNG ĐA DẠNG VÀ ỔN ĐỊNH</h4>
            </nav>
            <p className={cx("section-content")}>
              CHỨC NĂNG ĐA DẠNG VÀ ỔN ĐỊNH Tích hợp các chức năng Auto inbox
              lách luật tin nhắn sau 24h đến khách hàng cũ. Auto rep comment. Ẩn
              bình luận chống cướp đơn và nhiều tính năng khác... giúp bạn khai
              thác bán hàng trực tiếp và "Remarketing" hiệu quả cao. Tăng tỉ lệ
              chuyển đổi đến 80%. - Tích hợp sẵn hệ thống AI chatbot thông minh
              trả lời và tương tác với khách hàng như người dùng thật, không khô
              khan và nhàm chán như một số chatbot kịch bản trên thị trường.
              Giúp các chủ shop giữ chân khách hàng và tăng tỷ lệ quay lại mua
              hàng cao hơn.. .!
            </p>
            <button className={cx("main-btn")}>DÙNG NGAY MIỄN PHÍ</button>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Main;
