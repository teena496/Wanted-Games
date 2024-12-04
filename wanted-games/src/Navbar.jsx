import { useState, useEffect } from "react";
import wantedGamesLogo from "../logo.png";
import { media } from "./services";

export default function Navbar() {
  const sampleMediaData = {
    id: 2,
    image_url: wantedGamesLogo,
    label: "logo",
  };

  const [logoImage, setLogoImage] = useState([]);

  useEffect(() => {
    fetchMediaData();
  }, []);

  const fetchMediaData = async () => {
    try {
      const data = await media();
      const logo = data.find((x) => x.label === "logo");
      setLogoImage(logo ? logo : sampleMediaData);
    } catch (error) {
      console.error("Error fetching media data", error);
    }
  };
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-light fixed-top">
        <a className="navbar-brand" href="#">
          <img src={logoImage.image_url} alt="Wanted games logo" height={50} />
        </a>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a
                className="nav-link fs-4 fw-bold"
                href="#about"
                style={{
                  textDecoration: "none",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  textTransform: "uppercase",
                }}
              >
                <h3>About Us</h3>
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link fs-4 fw-bold"
                href="#games"
                style={{
                  textDecoration: "none",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  textTransform: "uppercase",
                }}
              >
                <h3>Games</h3>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link fs-4 fw-bold"
                href="#contact"
                style={{
                  textDecoration: "none",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  textTransform: "uppercase",
                }}
              >
                <h3>Contact Us</h3>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
