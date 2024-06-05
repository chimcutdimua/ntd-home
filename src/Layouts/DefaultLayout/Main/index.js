import classNames from "classnames/bind";
import styles from "./Main.module.scss";
import MyImage1 from "~/assests/images/img1.jpg";
import MyImage2 from "~/assests/images/img2.jpg";

const cx = classNames.bind(styles);
function Main() {
  const contentAndImages = [
    {
      type: "content",
      content: "mạnh mẽ duy nhất trên thị trường",
      text: "Giao diện thân thiện dễ sử dụng, tương thích với mọi thiết bị. Bạn có thể bắt đầu livestream chỉ với vài thao tác. Chúng tôi có đầy đủ các video hướng dẫn sử dụng dành cho bạn.",
    },
    { type: "image", src: MyImage1 },
    { type: "image", src: MyImage2 },
    {
      type: "content",
      content: "chức năng đa dạng và ổn định",
      text: 'Tích hợp các chức năng Auto inbox lách luật tin nhắn sau 24h đến khách hàng cũ.Auto rep comment. Ẩn bình luận chống cướp đơn và nhiều tính năng khác... giúp bạn khai thác bán hàng trực tiếp và "Remarketing" hiệu quả cao. Tăng tỉ lệ chuyển đổi đến 80%.- Tích hợp sẵn hệ thống AI chatbot thông minh trả lời và tương tác với khách hàng như người dùng thật, không khô khan và nhàm chán như một số chatbot kịch bản trên thị trường. Giúp các chủ shop giữ chân khách hàng và tăng tỷ lệ quay lại mua hàng cao hơn.. .!',
    },
    // Thêm các phần tử nội dung và ảnh khác tại đây
  ];

  return (
    <div className={cx("column")}>
      {contentAndImages.map((item, index) => {
        if (item.type === "content") {
          return (
            <div className={cx("content")} key={index}>
              <h4 className={cx("title-content")}>{item.content}</h4>
              <p>{item.text}</p>
            </div>
          );
        } else if (item.type === "image") {
          return (
            <div className={cx("image")} key={index}>
              <img className={cx("image-item")} src={item.src} alt="Ảnh" />
              <button className={cx('main-btn')}>DÙNG NGAY MIỄN PHÍ</button>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default Main;
