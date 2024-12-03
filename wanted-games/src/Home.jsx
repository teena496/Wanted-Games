import { useState, useEffect } from "react";
import homeImage from "./assets/home-image.png";
import instagramIcon from "./assets/instagram.svg";
import linkedinIcon from "./assets/linkedin.svg";
import facebookIcon from "./assets/facebook.svg";
import { social } from "./services";

export default function Home() {
  const homeTagline = "Unbox fun, Roll into Adventure!";
  const sampleSocialMedia = [
    {
      id: 1,
      image: instagramIcon,
      sort_id: 1,
      url: "https://www.instagram.com/wanted_games_ukr/",
    },
    {
      id: 2,
      image: facebookIcon,
      sort_id: 1,
      url: "https://www.facebook.com/wanted.games.ukr",
    },
    {
      id: 3,
      image: linkedinIcon,
      sort_id: 1,
      url: "https://www.linkedin.com",
    },
  ];
  const [socialMediaLinks, setSocialMediaLinks] = useState([]);
  // const [imageData, setImageData] = useState([]);

  useEffect(() => {
    fetchSocialData();
    // fetchMediaData();
  }, []);

  // const fetchMediaData = async () => {
  //   try {
  //     const data = await media();
  //     console.log("MEDIA", data);

  //     let backgroundImage = data.find((x) => x.label === "background-image");
  //     console.log(backgroundImage);
  //     setImageData(backgroundImage);
  //   } catch (error) {
  //     console.error("Error fetching media data", error);
  //   }
  // };

  const fetchSocialData = async () => {
    try {
      const data = await social();
      setSocialMediaLinks(data);
    } catch (error) {
      console.error("Error fetching social media data", error);
    }
  };

  const backgroundColor = "#C3F2E4";
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
          {/* <iframe
            src={gifImage}
            width="500"
            height="500"
            className="giphy-embed"
            allowFullScreen
          ></iframe> */}

          <img
            src={homeImage}
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
              {homeTagline}
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
            Follow us !
            <br />
            {socialMediaLinks.length
              ? socialMediaLinks.map((socialMedia) => {
                  return (
                    <>
                      <a
                        href={socialMedia.url}
                        style={{ backgroundColor: backgroundColor }}
                        target="_blank"
                      >
                        <img
                          className="m-3 m-sm-5"
                          src={`data:image/png+xml;base64,${socialMedia.image}`}
                          alt=""
                          style={{ backgroundColor: backgroundColor }}
                          width={45}
                          height={45}
                        />
                      </a>
                    </>
                  );
                })
              : sampleSocialMedia.map((socialMedia) => {
                  return (
                    <>
                      <a
                        href={socialMedia.url}
                        style={{ backgroundColor: backgroundColor }}
                        target="_blank"
                      >
                        <img
                          className="m-3 m-sm-5"
                          src={socialMedia.image}
                          alt=""
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
