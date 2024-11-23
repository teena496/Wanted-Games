import Slider from "react-slick";
import sliderImage1 from "./assets/slider-image-1.svg";
import sliderImage2 from "./assets/slider-image-2.svg";
import sliderImage3 from "./assets/slider-image-3.svg";
import sliderImage4 from "./assets/slider-image-4.svg";
import sliderImage5 from "./assets/slider-image-5.svg";
import sliderImage6 from "./assets/slider-image-6.svg";
import sliderImage7 from "./assets/slider-image-7.svg";

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img
            src={sliderImage7}
            alt="sliderImage7"
            width={1000}
            height={500}
          />
        </div>
        <div>
          <img
            src={sliderImage1}
            alt="sliderImage1"
            width={1000}
            height={500}
          />
        </div>
        <div>
          <img
            src={sliderImage2}
            alt="sliderImage2"
            width={1000}
            height={500}
          />
        </div>
        <div>
          <img
            src={sliderImage3}
            alt="sliderImage3"
            width={1000}
            height={500}
          />
        </div>
        <div>
          <img
            src={sliderImage4}
            alt="sliderImage4"
            width={1000}
            height={500}
          />
        </div>
        <div>
          <img
            src={sliderImage5}
            alt="sliderImage5"
            width={1000}
            height={500}
          />
        </div>
        <div>
          <img src={sliderImage6} alt="" width={1000} height={500} />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
