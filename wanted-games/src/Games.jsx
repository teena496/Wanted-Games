import { useEffect, useState } from "react";
import GameDetails from "./GameDetails";
import { games } from "./services";
import gameAltarImage from "./assets/game-altar.svg";
import gameKoiImage from "./assets/game-koi.svg";
import gameGoblinsImage from "./assets/game-goblins.svg";
import gameLionImage from "./assets/game-lion.svg";
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
      image_main: gameKoiImage,
      image_1: koiTimeIcon,
      image_2: koiPlayersIcon,
      image_3: koiAgeIcon,
      background_color: "#C3F2E4",
      text_color: "#0C4E2A",
      gameLink: "https://boardgamegeek.com/boardgame/11865/koi-koi",
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
      image_main: gameGoblinsImage,
      image_1: goblinsTimeIcon,
      image_2: goblinsPlayersIcon,
      image_3: goblinsAgeIcon,
      background_color: "#D4CAF5",
      text_color: "#2E0636",
      gameLink: "http://gvsg.com.ua/",
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
      image_main: gameLionImage,
      image_1: lionTimeIcon,
      image_2: lionPlayersIcon,
      image_3: lionAgeIcon,
      background_color: "#F8F8BC",
      text_color: "#0C4E2A",
      gameLink: "https://tg.in.ua/boardgames/3565/lets-catch-lion",
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
      image_main: gameAltarImage,
      image_1: altarTimeIcon,
      image_2: altarPlayersIcon,
      image_3: altarAgeIcon,
      background_color: "#C3F2E4",
      text_color: "#093629",
      gameLink: "https://caersidi.net/Altar",
    },
  ];

  const [gameData, setGameData] = useState([]);

  useEffect(() => {
    fetchGameData();
  }, []);

  const fetchGameData = async () => {
    try {
      const data = await games();
      setGameData(data);
    } catch (error) {
      console.error("Error fetching games", error);
    }
  };

  return (
    <div id="games" className="container">
      <h1 className="display-4 text-center m-5 p-5">Our Games</h1>
      {gameData.length
        ? gameData.map((game) => {
            return (
              <>
                <GameDetails
                  key={game.id}
                  id={game.id}
                  sortId={game.sort_id}
                  gameTitle={game.title}
                  gameDescription1={game.description_1}
                  gameDescription2={game.description_2}
                  gameImage={`data:image/png+xml;base64,${game.image_main}`}
                  gameTimeIcon={`data:image/png+xml;base64,${game.image_1}`}
                  gamePlayersIcon={`data:image/png+xml;base64,${game.image_2}`}
                  gameAgeIcon={`data:image/png+xml;base64,${game.image_3}`}
                  backgroundColor={game.background_color}
                  textColor={game.text_color}
                  gameLink={game.gameLink}
                />
              </>
            );
          })
        : sampleGameData.map((game) => {
            return (
              <>
                <GameDetails
                  key={game.id}
                  id={game.id}
                  sortId={game.sort_id}
                  gameTitle={game.title}
                  gameDescription1={game.description_1}
                  gameDescription2={game.description_2}
                  gameImage={game.image_main}
                  gameTimeIcon={game.image_1}
                  gamePlayersIcon={game.image_2}
                  gameAgeIcon={game.image_3}
                  backgroundColor={game.background_color}
                  textColor={game.text_color}
                  gameLink={game.gameLink}
                />
              </>
            );
          })}
    </div>
  );
}
