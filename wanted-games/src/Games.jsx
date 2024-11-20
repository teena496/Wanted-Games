import gameKoiImage from "./assets/game-koi.svg";
import gameAltarImage from "./assets/game-altar.svg";
import GameFeatures from "./GameFeatures";
import gameGoblinsImage from "./assets/images/game-goblins.png";
import gameLionImage from "./assets/images/game-lion.jpeg";

export default function Games() {
  return (
    <div id="games" className="container marketing">
      <hr className="featurette-divider" style={{ margin: "100px" }} />
      <div className="row featurette">
        <div className="col-md-7 game-details">
          <h1 className="featurette-heading">Koi-Koi</h1>
          <p className="lead">
            {` Koi-Koi is a traditional Japanese card game played with Hanafuda
            cards, often enjoyed by two players. The goal is to create specific
            card combinations, called yaku, to earn points. The game consists of
            rounds where players alternately draw cards to match ones on the
            table, forming sets based on seasonal themes. A player can declare
            "Koi-Koi" to extend the round for a chance at higher scores, but it
            risks their opponent earning more points. It’s a strategic blend of
            matching, timing, and calculated risks, celebrated for its cultural
            significance and aesthetic beauty.`}
          </p>
          <GameFeatures />
        </div>
        <div className="col-md-5">
          <img
            className="featurette-image img-fluid mx-auto"
            alt="500x500"
            src={gameKoiImage}
          />
        </div>
      </div>
      <hr className="featurette-divider" style={{ margin: "100px" }} />
      <div className="row featurette">
        <div className="col-md-7 order-md-2 game-details">
          <h1 className="featurette-heading">Goblins vs Gnomes</h1>
          <p className="lead">
            Goblins vs Gnomes is a fast-paced, tactical board game where players
            control wacky goblin and gnome factions vying for dominance. Each
            turn involves deploying units, gathering resources, and using unique
            abilities to outwit opponents. The game emphasizes clever strategy,
            resource management, and unpredictable events, creating chaotic and
            fun battles. Suitable for competitive or casual play, it’s packed
            with humor and engaging gameplay.
          </p>
          <GameFeatures />
        </div>
        <div className="col-md-5 order-md-1">
          <img
            className="featurette-image img-fluid mx-auto"
            alt="500x500"
            src={gameGoblinsImage}
          />{" "}
        </div>
      </div>
      <hr className="featurette-divider" style={{ margin: "100px" }} />
      <div className="row featurette">
        <div className="col-md-7 game-details">
          <h1 className="featurette-heading">Let’s Catch the Lion </h1>
          <p className="lead">
            {`Let’s Catch the Lion! is a charming introductory board game based on
            Shogi (Japanese chess), designed for children. Players take turns
            moving animal-themed pieces on a 3x4 grid, aiming to capture the
            opponent's lion or achieve checkmate. Simplified rules and colorful
            designs make it easy to learn, while still offering strategic depth.
            It’s a delightful way to introduce kids to logical thinking and
            Japanese culture.`}
          </p>
          <GameFeatures />
        </div>
        <div className="col-md-5">
          <img
            className="featurette-image img-fluid mx-auto"
            alt="500x500"
            src={gameLionImage}
          />{" "}
        </div>
      </div>
      <hr className="featurette-divider" style={{ margin: "100px" }} />
      <div className="row featurette">
        <div className="col-md-7 order-md-2 game-details">
          <h1 className="featurette-heading">Altar: The War of Gods</h1>
          <p className="lead">
            Altar: The War of Gods is a strategic board game where players take
            on the roles of powerful deities vying for supremacy. Players summon
            mythical creatures, cast divine spells, and battle for control of
            sacred altars on a dynamic battlefield. The game combines resource
            management, tactical positioning, and asymmetric powers, offering
            deep strategic gameplay and high replayability. Perfect for fans of
            competitive and thematic experiences.
          </p>
          <GameFeatures />
        </div>
        <div className="col-md-5 order-md-1">
          <img
            className="featurette-image img-fluid mx-auto"
            alt="500x500"
            src={gameAltarImage}
          />{" "}
        </div>
      </div>
      <hr className="featurette-divider" style={{ margin: "100px" }} />
    </div>
  );
}
