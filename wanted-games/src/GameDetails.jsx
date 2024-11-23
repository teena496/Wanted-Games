import GameFeatures from "./GameFeatures";

export default function GameDetails(props) {
  const gameDetailsOrderClass =
    props.id % 2 === 0 ? `order-md-2` : `order-md-1`;
  const gameImageOrderClass = props.id % 2 === 0 ? `order-md-1` : `order-md-2`;

  return (
    <div
      className="rounded-3 border shadow-lg "
      style={{ marginBottom: "100px", backgroundColor: props.backgroundColor }}
    >
      <br style={{ margin: "100px" }}></br>
      <div
        className="row featurette "
        style={{ margin: "100px", backgroundColor: props.backgroundColor }}
      >
        <div
          className={`col-md-6 game-details ${gameDetailsOrderClass}`}
          style={{ backgroundColor: props.backgroundColor }}
        >
          <h1
            className="featurette-heading fw-bold"
            style={{
              backgroundColor: props.backgroundColor,
              color: props.textColor,
            }}
          >
            {props.gameTitle}
          </h1>
          <p
            className="lead"
            style={{
              lineHeight: "1.5",
              fontSize: "1.5rem",
              backgroundColor: props.backgroundColor,
              color: props.textColor,
            }}
          >
            {props.gameDescription[0]}
          </p>
          <p
            className="lead"
            style={{
              lineHeight: "1.5",
              fontSize: "1.5rem",
              backgroundColor: props.backgroundColor,
              color: props.textColor,
            }}
          >
            {props.gameDescription[1]}
          </p>

          <GameFeatures
            gameTimeIcon={props.gameTimeIcon}
            gamePlayersIcon={props.gamePlayersIcon}
            gameAgeIcon={props.gameAgeIcon}
            backgroundColor={props.backgroundColor}
          />
        </div>
        <div
          className={`col-md-6 ${gameImageOrderClass}`}
          style={{ backgroundColor: props.backgroundColor }}
        >
          <img
            className="featurette-image img-fluid mx-auto"
            alt="400x400"
            src={props.gameImage}
            width={450}
            height={450}
            style={{ backgroundColor: props.backgroundColor }}
          />
        </div>
      </div>
    </div>
  );
}
