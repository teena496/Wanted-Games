import whatsappIcon from "./assets/whatsapp.svg";
import facebookIcon from "./assets/facebook.svg";
import instagramIcon from "./assets/instagram.svg";
import canadaFlag from "./assets/canada-flag.svg";
import ukraineFlag from "./assets/ukraine-flag.svg";

export default function Footer() {
  return (
    <div id="contact" className="my-5">
      <div className="p-5 text-center bg-body-tertiary">
        <div className="container py-5">
          <h1 className="text-body-emphasis">Contact Us</h1>
          <p className="col-lg-8 mx-auto lead text-start">Email:</p>
          <p className="col-lg-8 mx-auto lead text-start">
            wanted.games.production@gmail.com
          </p>
          <p className="col-lg-8 mx-auto lead text-start">Phone number:</p>
          <p className="col-lg-8 mx-auto lead text-start">
            <img src={canadaFlag} alt="" height={30} />
            +14168187147
            <img src={ukraineFlag} alt="" height={30} />
            +380932662988
          </p>
          <ul className="nav col-md-12 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a className="text-body-secondary" href="#">
                <img src={whatsappIcon} alt="" />
              </a>
            </li>
            <li className="ms-3">
              <a className="text-body-secondary" href="#">
                <img src={instagramIcon} alt="" />
              </a>
            </li>
            <li className="ms-3">
              <a className="text-body-secondary" href="#">
                <img src={facebookIcon} alt="" color="black" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
