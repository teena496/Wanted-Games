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
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
  };
  return (
    <div className="container">
      <div className="row m-lg-5 m-md-4 m-sm-1 ">
        <div className="col-lg-12 col-md-12 col-sm-12 ">
          <div className="slider-container ">
            <Slider {...settings}>
              <div>
                <img
                  src={sliderImage7}
                  alt="sliderImage7"
                  width="100%"
                  height="auto"
                  loading="lazy"
                />
              </div>
              <div>
                <img
                  src={sliderImage1}
                  alt="sliderImage1"
                  width="100%"
                  height="auto"
                />
              </div>
              <div>
                <img
                  src={sliderImage2}
                  alt="sliderImage2"
                  width="100%"
                  height="auto"
                />
              </div>
              <div>
                <img
                  src={sliderImage3}
                  alt="sliderImage3"
                  width="100%"
                  height="auto"
                />
              </div>
              <div>
                <img
                  src={sliderImage4}
                  alt="sliderImage4"
                  width="100%"
                  height="auto"
                />
              </div>
              <div>
                <img
                  src={sliderImage5}
                  alt="sliderImage5"
                  width="100%"
                  height="auto"
                />
              </div>
              <div>
                <img
                  src={sliderImage6}
                  alt="sliderImage6"
                  width="100%"
                  height="auto"
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
