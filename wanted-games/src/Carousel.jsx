import { useState, useEffect } from "react";
import Slider from "react-slick";
import sliderImage1 from "./assets/slider-image-1.svg";
import sliderImage2 from "./assets/slider-image-2.svg";
import sliderImage3 from "./assets/slider-image-3.svg";
import sliderImage4 from "./assets/slider-image-4.svg";
import sliderImage5 from "./assets/slider-image-5.svg";
import sliderImage6 from "./assets/slider-image-6.svg";
import sliderImage7 from "./assets/slider-image-7.svg";
import { gallery } from "./services";

function Carousel() {
  const [galleryImages, setGalleryImages] = useState([]);
  const sampleGalleryData = [
    {
      id: 1,
      image_url: sliderImage1,
      sort_id: 1,
    },
    {
      id: 2,
      image_url: sliderImage2,
      sort_id: 2,
    },
    {
      id: 3,
      image_url: sliderImage3,
      sort_id: 3,
    },
    {
      id: 4,
      image_url: sliderImage4,
      sort_id: 4,
    },
    {
      id: 5,
      image_url: sliderImage5,
      sort_id: 5,
    },
    {
      id: 6,
      image_url: sliderImage6,
      sort_id: 6,
    },
    {
      id: 7,
      image_url: sliderImage7,
      sort_id: 7,
    },
  ];
  useEffect(() => {
    fetchGalleryData();
  }, []);

  const fetchGalleryData = async () => {
    try {
      const galleryData = await gallery();
      setGalleryImages(galleryData);
    } catch (error) {
      console.error("Error fetching gallery images", error);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div className="container">
      <div className="row m-lg-5 m-md-4 m-sm-1 ">
        <div className="col-lg-12 col-md-12 col-sm-12 ">
          <div className="slider-container ">
            <h3 className="display-4 text-center m-5">Gallery</h3>
            <Slider {...settings}>
              {galleryImages.length
                ? galleryImages.map((image) => {
                    return (
                      <img
                        key={image.id}
                        src={image.image_url}
                        alt="sliderImage"
                        width="100%"
                        height="auto"
                        loading="lazy"
                      />
                    );
                  })
                : sampleGalleryData.map((image) => {
                    return (
                      <img
                        key={image.id}
                        src={image.image_url}
                        alt="sliderImage"
                        width="100%"
                        height="auto"
                        loading="lazy"
                      />
                    );
                  })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
