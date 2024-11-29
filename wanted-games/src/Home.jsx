import homeImage from "./assets/home-image.png";
// import gifImage from "./assets/gif.webp";

import instagramIcon from "./assets/instagram.svg";
import linkedinIcon from "./assets/linkedin.svg";
import facebookIcon from "./assets/facebook.svg";

export default function Home() {
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
            className="display-4 d-md-3 text-body-emphasis text-center lh-6 mb-1 cursor text-animation "
            style={{
              backgroundColor: backgroundColor,
              justifyContent: "center",
              lineHeight: 2,
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
              Unbox fun,
            </div>
          </div>
          <div
            className="display-4 d-md-3 text-body-emphasis text-center lh-6 mb-1 cursor"
            style={{
              backgroundColor: backgroundColor,
              justifyContent: "center",
              lineHeight: 2,
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
              Roll into Adventure!
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
            <a
              href="https://www.instagram.com/wanted_games_ukr/"
              style={{ backgroundColor: backgroundColor }}
              target="_blank"
            >
              <img
                className="m-3 m-sm-5"
                src={instagramIcon}
                alt=""
                style={{ backgroundColor: backgroundColor }}
                width={45}
                height={45}
              />
              <img
                className="m-3 m-sm-5"
                src={linkedinIcon}
                alt=""
                style={{ backgroundColor: backgroundColor }}
                width={45}
                height={45}
              />
              <img
                className="m-3 m-sm-5"
                src={facebookIcon}
                alt=""
                style={{ backgroundColor: backgroundColor }}
                width={45}
                height={45}
              />
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
}
