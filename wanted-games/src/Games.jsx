import { useEffect, useState } from "react";
import GameDetails from "./GameDetails";
import { games } from "./services";
import placeholderImage from "./assets/placeholder.svg";

export default function Games() {
  const sampleGameData = [
    {
      id: 0,
      sort_id: 1,
      title: "Koi-Koi",
      description_1: `Koi-Koi is a traditional Japanese card game played with Hanafuda
            cards, often enjoyed by two players. The goal is to create specific
            card combinations, called yaku, to earn points. The game consists of
            rounds where players alternately draw cards to match ones on the
            table, forming sets based on seasonal themes.`,
      description_2: `A player can declare
            "Koi-Koi" to extend the round for a chance at higher scores, but it
            risks their opponent earning more points. It’s a strategic blend of
          matching, timing, and calculated risks, celebrated for its cultural
          significance and aesthetic beauty.`,
      image_main_url: placeholderImage,
      image_1_url: placeholderImage,
      image_2_url: placeholderImage,
      image_3_url: placeholderImage,
      background_color: "#C3F2E4",
      text_color: "#0C4E2A",
      url: "https://boardgamegeek.com/boardgame/11865/koi-koi",
    },
    {
      id: 1,
      sort_id: 2,
      title: "Goblins vs Gnomes",
      description_1: `Goblins vs Gnomes is a fast-paced, tactical board game where players
          control wacky goblin and gnome factions vying for dominance. Each
          turn involves deploying units, gathering resources, and using unique
          abilities to outwit opponents.`,
      description_2: ` The game emphasizes clever strategy,
          resource management, and unpredictable events, creating chaotic and
          fun battles. Suitable for competitive or casual play, it’s packed
          with humor and engaging gameplay.`,
      image_main_url: placeholderImage,
      image_1_url: placeholderImage,
      image_2_url: placeholderImage,
      image_3_url: placeholderImage,
      background_color: "#D4CAF5",
      text_color: "#2E0636",
      url: "http://gvsg.com.ua/",
    },
    {
      id: 2,
      sort_id: 3,
      title: "Let’s Catch the Lion",
      description_1: `Let’s Catch the Lion! is a charming introductory board game based on
          Shogi (Japanese chess), designed for children. Players take turns
          moving animal-themed pieces on a 3x4 grkey, aiming to capture the
          opponents lion or achieve checkmate.`,
      description_2: ` Simplified rules and colorful
          designs make it easy to learn, while still offering strategic depth.
          It’s a delightful way to introduce kkeys to logical thinking and
          Japanese culture.`,
      image_main_url: placeholderImage,
      image_1_url: placeholderImage,
      image_2_url: placeholderImage,
      image_3_url: placeholderImage,
      background_color: "#F8F8BC",
      text_color: "#0C4E2A",
      url: "https://tg.in.ua/boardgames/3565/lets-catch-lion",
    },
    {
      id: 3,
      sort_id: 4,
      title: "Altar : The War of Gods",
      description_1: `Altar: The War of Gods is a strategic board game where players take
            on the roles of powerful deities vying for supremacy. Players summon
            mythical creatures, cast divine spells, and battle for control of
            sacred altars on a dynamic battlefield.`,
      description_2: ` The game combines resource
            management, tactical positioning, and asymmetric powers, offering
            deep strategic gameplay and high replayability. Perfect for fans of
            competitive and thematic experiences.`,
      image_main_url: placeholderImage,
      image_1_url: placeholderImage,
      image_2_url: placeholderImage,
      image_3_url: placeholderImage,
      background_color: "#C3F2E4",
      text_color: "#093629",
      url: "https://caersidi.net/Altar",
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
    <div id="games" className="container">
      <h1 className="display-4 text-center m-5 p-5">Our Games</h1>
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
