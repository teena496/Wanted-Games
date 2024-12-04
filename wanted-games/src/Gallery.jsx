import { useState, useEffect } from "react";
import Slider from "react-slick";
import { gallery } from "./services";
import placeholderImage from "./assets/placeholder.svg";

function Gallery() {
  const [galleryImages, setGalleryImages] = useState([]);
  const sampleGalleryData = [
    {
      id: 1,
      image_url: placeholderImage,
      sort_id: 1,
    },
    {
      id: 2,
      image_url: placeholderImage,
      sort_id: 2,
    },
    {
      id: 3,
      image_url: placeholderImage,
      sort_id: 3,
    },
  ];

  useEffect(() => {
    fetchGalleryData();
  }, []);

  const fetchGalleryData = async () => {
    try {
      const galleryData = await gallery();
      setGalleryImages(galleryData.length ? galleryData : sampleGalleryData);
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
              {galleryImages.map((image) => {
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

export default Gallery;
