import React from "react";
import classNames from "classnames/bind";
import styles from "./Nav.module.scss";
const cx = classNames.bind(styles);

function Nav() {
  return (
    <>
      <nav className={cx("nav")}>
        <h4 className={cx("title-container")}>
          hệ sinh thái toàn diện chốt nhanh software
        </h4>
        <p className={cx("line")}></p>
        <img
          className={cx("img-container")}
          src="https://livechat.chotnhanh.vn/media/server/85fed3ac-efea-437b-ab41-5fede58b603c.png"
          alt="hệ sinh thái"
        />
        <h4 className={cx("title")}>
          TỐI ĐA HÓA CHUYỂN ĐỔI - VỚI LIVE CHAT BẠN CÓ THỂ LIVESTREAM TỰ ĐỘNG
          CHỐT ĐƠN - CHATBOT HỖ TRỢ CÙNG 1 LÚC TRÊN NHIỀU TRANG FACEBOOK VÀ CSKH
          TỰ ĐỘNG . Hơn 10.000+ Cá nhân, Doanh nghiệp, Agency đang sử dụng Live
          Chat mỗi ngày để phát triển kênh bán hàng. Tích hợp tất cả trong 1 ứng
          dụng duy nhất . là công cụ hỗ trợ trong việc nhắn tin trên nền tảng
          Facebook Messenger giúp Tối ưu trải nghiệm . Tối đa năng suất lao động
          cho sự lên tới 80% . Sử dụng dễ dàng trên các thiết bị . Phân quyền và
          quản lý công việc không giới hạn số lượng nhân viên
        </h4>
      </nav>
      <div id="feature" className={cx("feature")}>
        <nav className={cx("nav")}>
          <h4 className={cx("title-container")}>
            những tính năng nổi bật của ngày trăm đơn
          </h4>
          <p className={cx("line")}></p>
        </nav>
        <div className={cx("feature-container")}>
          <div className={cx("feature-items")}>
            <nav className={cx("item")}>
              <h6 className={cx("content-item")}>CHATBOT TIN NHẮN</h6>
              <img
                className={cx("image-item")}
                src="https://livechat.chotnhanh.vn/media/server/12ba684e-a58d-435b-9d2a-3d131027f31a.png"
                alt="Chat bot"
              />
            </nav>
          </div>
          <div className={cx("feature-items")}>
            <nav className={cx("item")}>
              <h6 className={cx("content-item")}>AUTO INBOX</h6>
              <img
                className={cx("image-item")}
                src="https://livechat.chotnhanh.vn/media/server/12ba684e-a58d-435b-9d2a-3d131027f31a.png"
                alt="Chat bot"
              />
            </nav>
          </div>
          <div className={cx("feature-items")}>
            <nav className={cx("item")}>
              <h6 className={cx("content-item")}>TỰ ĐỘNG BÁN HÀNG</h6>
              <img
                className={cx("image-item")}
                src="https://livechat.chotnhanh.vn/media/server/12ba684e-a58d-435b-9d2a-3d131027f31a.png"
                alt="Chat bot"
              />
            </nav>
          </div>
        </div>
      </div>
      <button className={cx("main-btn")}>DÙNG NGAY MIỄN PHÍ</button>
      <div className={cx("benefit")}>
        <nav className={cx("nav")}>
          <h4 className={cx("title-container")}>
            LỢI ÍCH KHI SỬ DỤNG PHẦN MỀM NGÀY TRĂM ĐƠN
          </h4>
          <p className={cx("line")}></p>
        </nav>
        <div className={cx("benefit-container")}>
          <nav className={cx("benefit-1")}>
            <p className={cx("benefit-title")}>
              KẾT NỐI ĐÚNG KHÁCH HÀNG MỤC TIÊU
            </p>
            <img
              className={cx("benefit-image")}
              src="https://livechat.chotnhanh.vn/media/server/23c5123b-4049-45b5-8422-ed09b291700a.png"
              alt=""
            />
            <div></div>
            <p className={cx("benefit-content")}>
              Với tính năng hỗ trợ đăng và chốt đơn qua video Reels "HOT NHẤT
              HIỆN TẠI" .
              <br />
              - Phần mềm Live Chat sẽ giúp bạn tìm kiếm chính xác
              tệp khách hàng cho trang Fanpage của bạn.
              <br />
              - Tối ưu chi phí tiếp cận và tăng hiệu quả khai thác chuyển đổi cho quy trình bán hàng
              của bạn thông qua thuật toán trên nền tảng.
            </p>
          </nav>
          <div className={cx("benefit-2")}>
            <nav>
              <p className={cx("benefit-title")}>TIẾT KIỆM CHI PHÍ MARKETING</p>
              <p className={cx("benefit-content")}>
                Với các kênh Marketing trả phí (paid traffic) để có thể tìm kiếm
                1000-2000 khách hàng tiềm năng (leads).
                <br />
                Bạn cần phải chi rất
                nhiều tiền cho hoạt động chạy quảng cáo và chi phí lượng nhân
                viên. 
                <br />
                - Với Livechat bạn hoàn toàn có thể mở rộng hệ thống
                marketing bán hàng Free traffic.
                <br />
                - An tâm bàn giao hệ thống cho
                nhân sự mới với tính năng "Tạo và quản lý nhân viên"
              </p>
            </nav>
            <p className={cx("line-2")}></p>
            <nav>
              <p className={cx("benefit-title")}>TĂNG HIỆU QUẢ CÔNG VIỆC</p>
              <p className={cx("benefit-content")}>
                Với các tính năng AI công nghệ mới giúp giảm tình trạng hạn chế
                do thuật toán nền tảng.
                <br />
                - Giúp bạn quản lý CHAT nhiều Fanpage
                cùng lúc trên 1 màn hình duy nhất.
                <br />
                - Và bạn hoàn toàn có thể vừa
                CHAT vừa Upsale tệp khách hàng với các tệp nhãn gán sẵn Đồng
                thời tích hợp cả 2 tính năng gom đơn thủ công và tự động giúp
                tăng hiệu suất làm việc lên gấp nhiều lần.
              </p>
            </nav>
          </div>
          <nav className={cx("benefit-3")}>
            <p className={cx("benefit-title")}>
              TIẾT KIỆM THỜI GIAN LÀM VIỆC
            </p>
            <img
              className={cx("benefit-image")}
              src="https://livechat.chotnhanh.vn/media/server/4e00e181-a6d0-4c19-b85d-cc33a95683ae.png"
              alt=""
            />
            <p className={cx("benefit-content")}>
            Bán hàng hiệu quả trên livestream, thu hút được lượng khách hàng tiềm năng trên nhiều kênh cùng lúc, nhưng việc mất quá nhiều thời gian live stream đang là trở ngại mà nhiều người gặp phải.
            <br />
            - Để tiết kiệm thời gian và chi phí việc phát lại livestream đang là lựa chọn tốt nhất
            </p>
          </nav>
        </div>
      </div>
      <div id="questions" className={cx("questions")}>
      <nav className={cx("nav")}>
          <h4 className={cx("title-container")}>
            NHỮNG CÂU HỎI THƯỜNG GẶP KHI SỬ DỤNG PHẦN MỀM
          </h4>
          <p className={cx("line")}></p>
        </nav>
        <div className={cx("questions-container")}>
          <nav className={cx("questions-1")}>
            <h4 className={cx("questions-title")}>
              Làm thế nào để cài đặt Phần Mền Ngày Trăm Đơn ?
            </h4>
            <p className={cx("questions-content")}>
              Phần Mềm Ngày Trăm Đơn được thiết kế trên phiên bản website nên bạn không cần cài đặt và 
              chỉ cần đăng ký 1 tài khoản miễn phí là có thể sử dụng ngay trên mọi thiết bị. Nếu bạn không rành về máy tính,
              hãy để lại thông tin liên hệ, đội ngũ Chốt Nhanh Software sẽ hỗ trợ cài đặt từ xa trong vài phút. 
            </p>
          </nav>
          <nav className={cx("questions-2")}>
            <h4 className={cx("questions-title")}>
              Tôi có được dùng thử bản cao cấp của phần mềm Ngày Trăm Đơn không ?
            </h4>
            <p className={cx("questions-content")}>
              Bạn được dùng thử full tính năng ngay lần đầu tiên. Ngoài ra trong quá trình dùng thử,
              bạn sẽ được đội ngũ Chốt Nhanh Software hỗ trợ 1-1 tận tình. 
            </p>
          </nav>
          <nav className={cx("questions-3")}>
            <h4 className={cx("questions-title")}>
              Tôi có phải treo phần mềm khi sử dụng không ?
            </h4>
            <p className={cx("questions-content")}>
              không! Phần Mềm Ngày Trăm Đơn được thiết kế phiên bản website, giúp bạn liên tục 24/7
              mà không cần treo máy tính giúp bạn tiết kiệm 1 khoản đầu tư không nhỏ về thiết bị và điện. Giải
              quyết triệt để sự bất tiện của các phần mềm khác khi cài đặt trên các thiết bị cấu hình cao và gây khó khăn
              trong việc quản lý và giới hạn khả năng mở rộng trong mô hình quản lý nhân viên từ xa của doanh nghiệp bạn.  
            </p>
          </nav>
          <nav className={cx("questions-4")}>
            <h4 className={cx("questions-title")}>
              Phần mềm Ngày Trăm Đơn có an toàn cho tài khoản của tôi không ?
            </h4>
            <p className={cx("questions-content")}>
              Đây là câu hỏi nhiều khách hàng sử dụng quan tâm, việc đăng nhập và sử dụng tài khoản tại tất cả các công cụ của
              Chốt Nhanh Software luôn được bảo mật và an toàn. Chúng tôi cam kết bảo mật và không chia sẻ bất kỳ thông tin gì của khách hàng  
            </p>
          </nav>
          <nav className={cx("questions-5")}>
            <h4 className={cx("questions-title")}>
              Tôi có được hỗ trợ trong quá trình sử dụng không ?
            </h4>
            <p className={cx("questions-content")}>
              Cho dù là bạn đang dùng gói miễn phí hay trả phí của Chốt Nhanh Software. Hãy cứ yên tâm rằng đội ngũ Chốt Nhanh
              sẽ luôn hỗ trợ và đồng hành cùng bạn trong suốt quá trình sử dụng.
            </p>
          </nav>
        </div>
      <button className={cx("questions-btn")}>DÙNG NGAY MIỄN PHÍ</button>
      </div>
      <footer className={cx("footer")}>
        <div className={cx("footer-content")}>BY CHOT NHANH</div>
      </footer>
    </>
  );
}

export default Nav;
