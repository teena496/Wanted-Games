import { useState, useEffect } from "react";
import { about } from "./services";
import placeholderImage from "./assets/placeholder.svg";

export default function About() {
  const [aboutData, setAboutData] = useState([]);
  const sampleAboutData = {
    id: 1,
    image_url: placeholderImage,
    paragraph_1: "",
    paragraph_2: "",
    paragraph_3: "",
    sort_id: 1,
    title: "",
  };

  useEffect(() => {
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

  return (
    <div id="about" className="container mh-100">
      <div
        className="row p-md-5 p-sm-4 align-items-center rounded-3 border shadow-lg about-background-image"
        style={{
          backgroundImage: `url(${aboutData.image_url})`,
        }}
      >
        <div className="col-xl-6 col-lg-8 col-md-9 col-sm-10 col-12 offset-xl-3 offset-lg-2 offset-md-2 offset-sm-1 rounded-5 border shadow-lg">
          <h1 className="display-4 lh-1 text-center m-5 fw-bold">
            {aboutData.title}
          </h1>
          <p className="lead lh-base fs-4 m-5">{aboutData.paragraph_1}</p>
          <p className="lead lh-base fs-4 m-5">{aboutData.paragraph_2}</p>
          <p className="lead lh-base fs-4 m-5">{aboutData.paragraph_3}</p>
        </div>
      </div>
    </div>
  );
}
