import canadaFlag from "./assets/canada-flag.svg";
import ukraineFlag from "./assets/ukraine-flag.svg";
import instagramIcon from "./assets/instagram.svg";
import linkedinIcon from "./assets/linkedin.svg";
import facebookIcon from "./assets/facebook.svg";

export default function Contact() {
  return (
    <div id="contact" className="container">
      <div className="d-flex justify-content-center align-items-center rounded-3 border shadow-lg contact-background-image">
        <div className="d-flex flex-column p-5 m-5 rounded-5 border shadow-lg">
          <h1 className="display-4 lh-1 text-center m-5 fw-bold">Contact Us</h1>
          <p className="lead lh-6 fs-4 m-4 fw-bold">Email : </p>
          <p className="lead lh-6 fs-4 m-4">
            wanted.games.production@gmail.com
          </p>
          <p className="lead lh-6 fs-4 m-4 fw-bold">
            Follow us :
            <img
              src={linkedinIcon}
              alt=""
              height={30}
              style={{ marginLeft: "20px" }}
            />
            <img
              src={instagramIcon}
              alt=""
              height={30}
              style={{ marginLeft: "20px" }}
            />
            <img
              src={facebookIcon}
              alt=""
              height={30}
              style={{ marginLeft: "20px" }}
            />
          </p>
          <p className="lead lh-6 fs-4 m-4 fw-bold">Phone Number :</p>
          <div className="lead lh-6 fs-4 m-4 d-flex justify-content-between flex-wrap">
            <div>
              <img className="mx-2" src={canadaFlag} alt="" height={30} />
              +1 416 818 7147
            </div>
            <div>
              <img className="mx-2" src={ukraineFlag} alt="" height={30} />
              +38 093 266 2988
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
