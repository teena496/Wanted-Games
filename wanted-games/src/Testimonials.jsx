import { useState, useEffect } from "react";
import placeholderImage from "./assets/placeholder.svg";
import { games } from "./services";

export default function Testimonials() {
  const sampleGameData = [
    {
      id: 0,
      sort_id: 1,
      title: "",
      description_1: "",
      description_2: "",
      image_main_url: placeholderImage,
      image_1_url: placeholderImage,
      image_2_url: placeholderImage,
      image_3_url: placeholderImage,
      background_color: "",
      text_color: "",
      url: "",
    },
  ];

  const [gameData, setGameData] = useState([]);

  useEffect(() => {
    fetchGameData();
  }, []);

  const fetchGameData = async () => {
    try {
      const data = await games();
      setGameData(data.length ? data : sampleGameData);
    } catch (error) {
      setGameData(sampleGameData);
      console.error("Error fetching games", error);
    }
  };

  function getId(url) {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return match && match[2].length === 11 ? match[2] : null;
  }

  return (
    <div className="container">
      <div className="m-5 p-1">
        <h1 className="display-4 text-center m-5 fw-bold">Game Videos</h1>
        <div className="d-flex justify-content-evenly flex-wrap">
          {gameData.map((video) => {
            const videoId = getId(video.url);
            return (
              <>
                <iframe
                  key={video.id}
                  className="m-5"
                  width="560"
                  height="315"
                  src={
                    video.url
                      ? `//www.youtube.com/embed/${videoId}`
                      : placeholderImage
                  }
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
