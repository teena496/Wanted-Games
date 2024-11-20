import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gameKoiImage from "./assets/game-koi.svg";
import gameAltarImage from "./assets/game-altar.svg";
import gameGoblinsImage from "./assets/images/game-goblins.png";
import gameLionImage from "./assets/images/game-lion.jpeg";

function Carousel() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1186,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 875,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={gameKoiImage} alt="" width={400} height={400} />{" "}
        </div>
        <div>
          <img src={gameAltarImage} alt="" width={400} height={400} />{" "}
        </div>
        <div>
          <img src={gameGoblinsImage} alt="" width={400} height={400} />{" "}
        </div>
        <div>
          <img src={gameLionImage} alt="" width={400} height={400} />{" "}
        </div>
        <div>
          <img src={gameKoiImage} alt="" width={400} height={400} />{" "}
        </div>
        <div>
          <img src={gameAltarImage} alt="" width={400} height={400} />{" "}
        </div>
        <div>
          <img src={gameGoblinsImage} alt="" width={400} height={400} />{" "}
        </div>
        <div>
          <img src={gameLionImage} alt="" width={400} height={400} />{" "}
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
