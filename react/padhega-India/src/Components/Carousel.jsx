import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BannerCarousel.css";

const images = [
  {
    id: 1,
    src: "../assets/Pic-1.png",
    alt: "",
  },
  {
    id: 2,
    src: "../assets/1-1.png",
    alt: "",
  },
  {
    id: 3,
    src: "../assets/2-1.png",
    alt: "",
  },
  {
    id: 4,
    src: "../assets/3-1.png",
    alt: "",
  },
  {
    id: 5,
    src: "../assets/4-1.png",
    alt: "",
  },
  {
    id: 6,
    src: "../assets/Refer-a-friend.png",
    alt: "",
  },
];

const BannerCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((slide, index) => (
          <div key={index} className="carousel-slide">
            <img src={slide.src} alt={slide.alt} className="carousel-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerCarousel;
