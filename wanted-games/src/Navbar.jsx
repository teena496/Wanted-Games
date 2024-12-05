import styles from "./Navbar.module.css";
import { useState, useEffect } from "react";
import placeholderImage from "./assets/placeholder.svg";
import { about, media } from "./services";

function Navbar() {
  const [isActive, setIsActive] = useState(false);

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

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
  };

  return (
    <div className="App" style={{ position: "sticky", top: 0, zIndex: 1 }}>
      <header className="App-header">
        <nav className={`${styles.navbar}`}>
          <a href="#" className={`${styles.logo}`}>
            <img
              src={logoImage.image_url}
              alt="Wanted games logo"
              height={50}
            />
          </a>
          <div></div>
          <ul className={`${styles.navMenu} ${isActive ? styles.active : ""}`}>
            <li onClick={removeActive}>
              <a href="#about" className={`${styles.navLink}`}>
                <h3>{aboutData.title}</h3>
              </a>
            </li>
            <li onClick={removeActive}>
              <a href="#games" className={`${styles.navLink}`}>
                <h3>Games</h3>
              </a>
            </li>
            <li onClick={removeActive}>
              <a href="#contact" className={`${styles.navLink}`}>
                <h3>Contact Us</h3>
              </a>
            </li>
          </ul>
          <div
            className={`${styles.hamburger} ${isActive ? styles.active : ""}`}
            onClick={toggleActiveClass}
          >
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
        </nav>
      </header>
    </div>
  );
}
export default Navbar;
