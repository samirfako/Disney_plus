import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
// images
import sliderBadging from '../images/slider-badging.jpg';
import sliderScale from '../images/slider-scale.jpg';
import sliderBadag from '../images/slider-badag.jpg';
import sliderScales from '../images/slider-scales.jpg';
import './ImgSlider.scss';

const ImgSlider = (props) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
  };

  return (
    <Slider className="custom__slider" {...settings}>
      <div className="img__wrapper">
        <a>
          <img src={sliderBadging} alt="" />
        </a>
      </div>
      <div className="img__wrapper">
        <a>
          <img src={sliderScale} alt="" />
        </a>
      </div>
      <div className="img__wrapper">
        <a>
          <img src={sliderBadag} alt="" />
        </a>
      </div>
      <div className="img__wrapper">
        <a>
          <img src={sliderScales} alt="" />
        </a>
      </div>
    </Slider>
  );
};

export default ImgSlider;
