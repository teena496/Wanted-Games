import { useState, useEffect } from "react";
import placeholderImage from "./assets/placeholder.svg";
import { about, media } from "./services";

export default function Navbar() {
  const sampleMediaData = {
    id: 2,
    image_url: placeholderImage,
    label: "logo",
  };

  const sampleAboutData = {
    id: 1,
    image_url: placeholderImage,
    paragraph_1: "",
    paragraph_2: "",
    paragraph_3: "",
    sort_id: 1,
    title: "",
  };

  const [logoImage, setLogoImage] = useState([]);
  const [aboutData, setAboutData] = useState([]);

  useEffect(() => {
    fetchMediaData();
    fetchAboutData();
  }, []);

  const fetchAboutData = async () => {
    try {
      const data = await about();
      let aboutData = data.find((data) => data.sort_id === 1);
      setAboutData(aboutData);
    } catch (error) {
      setAboutData(sampleAboutData);
      console.error("Error fetching about data", error);
    }
  };

  const fetchMediaData = async () => {
    try {
      const data = await media();
      const logo = data.find((x) => x.label === "logo");
      setLogoImage(logo ? logo : sampleMediaData);
    } catch (error) {
      setLogoImage(sampleMediaData);
      console.error("Error fetching media data", error);
    }
  };
  return (
    <div className="p-3 m-0 border-0 m-0 ">
      <nav className="navbar navbar-expand-sm navbar-light fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={logoImage.image_url}
              alt="Wanted games logo"
              height={50}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggler"
            aria-controls="navbarToggler"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end align-center"
            id="navbarToggler"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
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
                  <h3>{aboutData.title}</h3>
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
        </div>
      </nav>
    </div>
  );
}
