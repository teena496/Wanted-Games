import homeImage from "./assets/home-image.svg";
import instagramIcon from "./assets/instagram.svg";
import linkedinIcon from "./assets/linkedin.svg";
import facebookIcon from "./assets/facebook.svg";

export default function Home() {
  return (
    <div
      className="container rounded-4 border shadow-lg"
      style={{
        marginTop: "100px",
        marginBottom: "100px",
        backgroundColor: "#F8F8BC",
      }}
    >
      <div
        className="row flex-lg-row-reverse align-items-center py-5"
        style={{
          backgroundColor: "#F8F8BC",
          justifyContent: "center",
          borderRadius: "25px",
        }}
      >
        <div
          className="col-10 col-sm-8 col-lg-6"
          style={{
            backgroundColor: "#F8F8BC",
          }}
        >
          <img
            src={homeImage}
            className="d-block mx-lg-auto img-fluid shadow-lg"
            alt="Bootstrap Themes"
            width="500"
            height="500"
            loading="lazy"
            style={{
              borderRadius: "6%",
              transform: "translateX(1.25rem)",
              animation: "bounce 1s infinite",
            }}
          />
        </div>
        <div
          className="col-lg-6 p-5 "
          style={{
            backgroundColor: "#F8F8BC",
          }}
        >
          <p
            className="display-4 d-md-3 text-body-emphasis text-center lh-6 mb-1 cursor text-animation "
            style={{
              backgroundColor: "#F8F8BC",
              justifyContent: "center",
              lineHeight: 2,
              fontFamily: "Cinzel Decorative",
            }}
          >
            <div
              className="text-animation-inner"
              style={{
                backgroundColor: "#F8F8BC",
                justifyContent: "center",
                lineHeight: 2,
                fontFamily: "Cinzel Decorative",
              }}
            >
              Unbox fun,
            </div>
          </p>
          <p
            className="display-4 d-md-3 text-body-emphasis text-center lh-6 mb-1 cursor text-animation"
            style={{
              backgroundColor: "#F8F8BC",
              justifyContent: "center",
              lineHeight: 2,
              fontFamily: "Cinzel Decorative",
            }}
          >
            <div
              className="text-animation-inner"
              style={{
                backgroundColor: "#F8F8BC",
                justifyContent: "center",
                lineHeight: 2,
                fontFamily: "Cinzel Decorative",
              }}
            >
              Roll into Adventure!
            </div>
          </p>

          <h2
            className="display-6 d-md-3 text-body-emphasis text-center lh-6 mb-1 "
            style={{
              backgroundColor: "#F8F8BC",
              margin: "50px",
              fontFamily: "Cinzel",
            }}
          >
            Follow us !
            <br />
            <a
              href="https://www.instagram.com/wanted_games_ukr/"
              style={{ backgroundColor: "#F8F8BC" }}
              target="_blank"
            >
              <img
                src={instagramIcon}
                alt=""
                style={{ backgroundColor: "#F8F8BC", margin: "40px" }}
                width={45}
                height={45}
              />
              <img
                src={linkedinIcon}
                alt=""
                style={{ backgroundColor: "#F8F8BC", margin: "40px" }}
                width={45}
                height={45}
              />
              <img
                src={facebookIcon}
                alt=""
                style={{ backgroundColor: "#F8F8BC", margin: "40px" }}
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
