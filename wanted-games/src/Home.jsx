import { useState, useEffect } from "react";
import { social, home } from "./services";
import placeholderImage from "./assets/placeholder.svg";

export default function Home() {
  const backgroundColor = "#C3F2E4";
  const sampleHomeData = [
    {
      id: 1,
      sort_id: 1,
      image_url: placeholderImage,
      header: "Unbox fun, Roll into Adventure!",
      paragraph_1: "",
      paragraph_2: "",
    },
  ];

  const sampleSocialMedia = [
    {
      id: 1,
      image_url: placeholderImage,
      sort_id: 1,
      url: "https://www.instagram.com/wanted_games_ukr/",
    },
    {
      id: 2,
      image_url: placeholderImage,
      sort_id: 2,
      url: "https://www.facebook.com/wanted.games.ukr",
    },
    {
      id: 3,
      image_url: placeholderImage,
      sort_id: 3,
      url: "https://www.linkedin.com/company/wanted-games-ukraine/",
    },
  ];

  const [socialMediaLinks, setSocialMediaLinks] = useState([]);
  const [homeData, setHomeData] = useState([]);

  useEffect(() => {
    fetchSocialData();
    fetchHomeData();
  }, []);

  const fetchHomeData = async () => {
    try {
      const data = await home();
      setHomeData(data.length ? data : sampleHomeData);
    } catch (error) {
      console.error("Error fetching home data", error);
    }
  };

  const fetchSocialData = async () => {
    try {
      const data = await social();
      setSocialMediaLinks(data.length ? data : sampleSocialMedia);
    } catch (error) {
      console.error("Error fetching social media data", error);
    }
  };

  return (
    <div
      className="container rounded-4 border shadow-lg"
      style={{
        marginTop: "75px",
        marginBottom: "100px",
        backgroundColor: backgroundColor,
      }}
    >
      <div
        className="row flex-lg-row-reverse align-items-center py-5"
        style={{
          backgroundColor: backgroundColor,
          justifyContent: "center",
          borderRadius: "25px",
        }}
      >
        <div
          className="col-10 col-sm-8 col-lg-6 "
          style={{
            backgroundColor: backgroundColor,
          }}
        >
          <img
            src={homeData[0]?.image_url}
            className="d-block img-fluid shadow-lg "
            alt="HomeImage"
            width="500"
            height="500"
            loading="lazy"
            style={{
              borderRadius: "6%",
              backgroundColor: backgroundColor,
            }}
          />
        </div>
        <div
          className="col-lg-6 p-5 "
          style={{
            backgroundColor: backgroundColor,
          }}
        >
          <div
            className="display-4 d-md-3 text-body-emphasis text-center lh-base mb-1 cursor"
            style={{
              backgroundColor: backgroundColor,
              justifyContent: "center",
              fontFamily: "Cinzel Decorative",
            }}
          >
            <div
              style={{
                backgroundColor: backgroundColor,
                justifyContent: "center",
                lineHeight: 2,
                fontFamily: "Cinzel Decorative",
              }}
            >
              {homeData[0]?.header}
            </div>
            <div
              style={{
                backgroundColor: backgroundColor,
                justifyContent: "center",
                lineHeight: 2,
                fontFamily: "Cinzel Decorative",
              }}
            >
              {homeData[0]?.paragraph_1}
            </div>
            <div
              style={{
                backgroundColor: backgroundColor,
                justifyContent: "center",
                lineHeight: 2,
                fontFamily: "Cinzel Decorative",
              }}
            >
              {homeData[0]?.paragraph_2}
            </div>
          </div>
          <h2
            className="display-6 d-md-3 text-body-emphasis text-center lh-6 mb-1 "
            style={{
              backgroundColor: backgroundColor,
              margin: "50px",
              fontFamily: "Cinzel",
            }}
          >
            Follow Us!
            <br />
            {socialMediaLinks.map((socialMedia, index) => {
              return (
                <>
                  <a
                    key={`social-media-link-${index}`}
                    href={socialMedia.url}
                    style={{ backgroundColor: backgroundColor }}
                    target="_blank"
                  >
                    <img
                      key={`social-media-image-${index}`}
                      className="m-3 m-sm-5"
                      src={socialMedia.image_url}
                      alt="Social Media Image"
                      style={{ backgroundColor: backgroundColor }}
                      width={45}
                      height={45}
                    />
                  </a>
                </>
              );
            })}
          </h2>
        </div>
      </div>
    </div>
  );
}
