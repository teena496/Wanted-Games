import whatsappIcon from "./assets/whatsapp.svg";
import facebookIcon from "./assets/facebook.svg";
import instagramIcon from "./assets/instagram.svg";
import canadaFlag from "./assets/canada-flag.svg";
import ukraineFlag from "./assets/ukraine-flag.svg";

export default function Contact() {
  return (
    <div
      id="contact"
      className="my-5 rounded-3 border shadow-lg"
      style={{ backgroundColor: "#F8F8BC", margin: "40px" }}
    >
      <div className="p-5 text-center" style={{ backgroundColor: "#F8F8BC" }}>
        <div className="container py-5" style={{ backgroundColor: "#F8F8BC" }}>
          <h1
            className="text-body-emphasis fw-bold"
            style={{ backgroundColor: "#F8F8BC" }}
          >
            Contact Us
          </h1>
          <p
            className="col-lg-8 mx-auto lead text-start fw-bold"
            style={{ backgroundColor: "#F8F8BC" }}
          >
            Email:
          </p>
          <p
            className="col-lg-8 mx-auto lead text-start"
            style={{ backgroundColor: "#F8F8BC" }}
          >
            wanted.games.production@gmail.com
          </p>
          <p
            className="col-lg-8 mx-auto lead text-start fw-bold"
            style={{ backgroundColor: "#F8F8BC" }}
          >
            Phone number:
          </p>
          <p
            className="col-lg-8 mx-auto lead text-start"
            style={{ backgroundColor: "#F8F8BC" }}
          >
            <img
              src={canadaFlag}
              alt=""
              height={30}
              style={{ backgroundColor: "#F8F8BC", marginRight: "10px" }}
            />
            +14168187147
            <img
              src={ukraineFlag}
              alt=""
              height={30}
              style={{ backgroundColor: "#F8F8BC", marginLeft: "10px" }}
            />
            +380932662988
          </p>
          <ul
            className="nav col-md-12 justify-content-end list-unstyled d-flex"
            style={{ backgroundColor: "#F8F8BC" }}
          >
            <li className="ms-3" style={{ backgroundColor: "#F8F8BC" }}>
              <a
                className="text-body-secondary"
                href="#"
                style={{ backgroundColor: "#F8F8BC" }}
              >
                <img
                  src={whatsappIcon}
                  alt=""
                  style={{ backgroundColor: "#F8F8BC" }}
                />
              </a>
            </li>
            <li className="ms-3" style={{ backgroundColor: "#F8F8BC" }}>
              <a
                className="text-body-secondary"
                href="#"
                style={{ backgroundColor: "#F8F8BC" }}
              >
                <img
                  src={instagramIcon}
                  alt=""
                  style={{ backgroundColor: "#F8F8BC" }}
                />
              </a>
            </li>
            <li className="ms-3" style={{ backgroundColor: "#F8F8BC" }}>
              <a
                className="text-body-secondary"
                href="#"
                style={{ backgroundColor: "#F8F8BC" }}
              >
                <img
                  src={facebookIcon}
                  alt=""
                  color="black"
                  style={{ backgroundColor: "#F8F8BC" }}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
