import React from "react";
import classNames from "classnames/bind";
import styles from "./Slideshow.module.scss";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

const cx = classNames.bind(styles);

function Slideshow() {
  const slideImages = [
    'https://progameguides.com/wp-content/uploads/2021/10/Apex_Legends_Wallpaper_High_Speed_Interstellar_Travel_Aint_Cheap.jpg?resize=1024%2C576',
    'https://progameguides.com/wp-content/uploads/2021/10/Apex_Legends_Wallpaper_Legacy_-_osamatographe.jpg?resize=1024%2C576',
    'https://progameguides.com/wp-content/uploads/2021/10/Apex_Legends_Wallpaper_Legacy_-_zonotaida.jpg?resize=1024%2C576',
];

  const slideProperties = {
    duration: 2000,
    transitionDuration: 500,
    autoplay: true,
    indicators: true,
    arrows: false,
  };

  return (
    <div className={cx("slideshow-container")}>
      <Slide {...slideProperties}>
        {slideImages.map((image, index) => (
          <div key={index} className={cx("each-slide")}>
            <div className={cx("image-container")}>
              <img className={cx("image")} src={image} alt={`slide${index + 1}`} />
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
}

export default Slideshow;