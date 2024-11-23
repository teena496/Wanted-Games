import gameAltarImage from "./assets/game-altar.svg";
import gameKoiImage from "./assets/game-koi.svg";
import gameGoblinsImage from "./assets/game-goblins.svg";
import gameLionImage from "./assets/game-lion.svg";
import { useEffect, useState } from "react";
import GameDetails from "./GameDetails";
import koiTimeIcon from "./assets/koi-time.svg";
import koiPlayersIcon from "./assets/koi-players.svg";
import koiAgeIcon from "./assets/koi-age.svg";
import lionTimeIcon from "./assets/lion-time.svg";
import lionPlayersIcon from "./assets/lion-players.svg";
import lionAgeIcon from "./assets/lion-age.svg";
import goblinsTimeIcon from "./assets/goblins-time.svg";
import goblinsPlayersIcon from "./assets/goblins-players.svg";
import goblinsAgeIcon from "./assets/goblins-age.svg";
import altarTimeIcon from "./assets/altar-time.svg";
import altarPlayersIcon from "./assets/altar-players.svg";
import altarAgeIcon from "./assets/altar-age.svg";

export default function Games() {
  const sampleGameData = [
    {
      id: 0,
      title: "Koi-Koi",
      body: [
        `Koi-Koi is a traditional Japanese card game played with Hanafuda
              cards, often enjoyed by two players. The goal is to create specific
              card combinations, called yaku, to earn points. The game consists of
              rounds where players alternately draw cards to match ones on the
              table, forming sets based on seasonal themes.`,
        `A player can declare
              "Koi-Koi" to extend the round for a chance at higher scores, but it
              risks their opponent earning more points. It’s a strategic blend of
            matching, timing, and calculated risks, celebrated for its cultural
            significance and aesthetic beauty.`,
      ],
      image: gameKoiImage,
      gameTimeIcon: koiTimeIcon,
      gamePlayersIcon: koiPlayersIcon,
      gameAgeIcon: koiAgeIcon,
      backgroundColor: "#FFCECE",
      textColor: "#562222",
    },
    {
      id: 1,
      title: "Goblins vs Gnomes",
      body: [
        `Goblins vs Gnomes is a fast-paced, tactical board game where players
          control wacky goblin and gnome factions vying for dominance. Each
          turn involves deploying units, gathering resources, and using unique
          abilities to outwit opponents.`,
        ` The game emphasizes clever strategy,
          resource management, and unpredictable events, creating chaotic and
          fun battles. Suitable for competitive or casual play, it’s packed
          with humor and engaging gameplay.`,
      ],
      image: gameGoblinsImage,
      gameTimeIcon: goblinsTimeIcon,
      gamePlayersIcon: goblinsPlayersIcon,
      gameAgeIcon: goblinsAgeIcon,
      backgroundColor: "#D4CAF5",
      textColor: "#2E0636",
    },
    {
      id: 2,
      title: "Let’s Catch the Lion",
      body: [
        `Let’s Catch the Lion! is a charming introductory board game based on
          Shogi (Japanese chess), designed for children. Players take turns
          moving animal-themed pieces on a 3x4 grkey, aiming to capture the
          opponents lion or achieve checkmate.`,
        ` Simplified rules and colorful
          designs make it easy to learn, while still offering strategic depth.
          It’s a delightful way to introduce kkeys to logical thinking and
          Japanese culture.`,
      ],
      image: gameLionImage,
      gameTimeIcon: lionTimeIcon,
      gamePlayersIcon: lionPlayersIcon,
      gameAgeIcon: lionAgeIcon,
      backgroundColor: "#F8F8BC",
      textColor: "#0C4E2A",
    },
    {
      id: 3,
      title: "Altar : The War of Gods",
      body: [
        `Altar: The War of Gods is a strategic board game where players take
            on the roles of powerful deities vying for supremacy. Players summon
            mythical creatures, cast divine spells, and battle for control of
            sacred altars on a dynamic battlefield.`,
        ` The game combines resource
            management, tactical positioning, and asymmetric powers, offering
            deep strategic gameplay and high replayability. Perfect for fans of
            competitive and thematic experiences.`,
      ],
      image: gameAltarImage,
      gameTimeIcon: altarTimeIcon,
      gamePlayersIcon: altarPlayersIcon,
      gameAgeIcon: altarAgeIcon,
      backgroundColor: "#C3F2E4",
      textColor: "#093629",
    },
  ];

  const [games, setGames] = useState([]);

  useEffect(() => {
    fetchGameData();
  }, []);

  const fetchGameData = async () => {
    // const response = await fetch("http://localhost:3000/api/content");
    // const data = await response.json();
    // setGames(data);
    setGames(sampleGameData);
  };

  return (
    <div id="games" className="container ">
      {games.map((game) => {
        return (
          <GameDetails
            key={game.id}
            id={game.id}
            gameTitle={game.title}
            gameDescription={game.body}
            gameImage={game.image ? game.image : null}
            gameTimeIcon={game.gameTimeIcon}
            gamePlayersIcon={game.gamePlayersIcon}
            gameAgeIcon={game.gameAgeIcon}
            backgroundColor={game.backgroundColor}
            textColor={game.textColor}
          />
        );
      })}
    </div>
  );
}
