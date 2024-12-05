import { useEffect, useState } from "react";
import GameDetails from "./GameDetails";
import { games } from "./services";
import placeholderImage from "./assets/placeholder.svg";

export default function Games() {
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

  return (
    <div id="games" className="container pt-2">
      <h1 className="display-4 text-center m-5 p-5 fw-bold">Our Games</h1>
      {gameData.map((game) => {
        return (
          <>
            <GameDetails
              key={`game-${game.id}`}
              id={game.id}
              sortId={game.sort_id}
              gameTitle={game.title}
              gameDescription1={game.description_1}
              gameDescription2={game.description_2}
              gameImage={game.image_main_url}
              gameTimeIcon={game.image_1_url}
              gamePlayersIcon={game.image_2_url}
              gameAgeIcon={game.image_3_url}
              backgroundColor={game.background_color}
              textColor={game.text_color}
              gameLink={game.url}
            />
          </>
        );
      })}
    </div>
  );
}
