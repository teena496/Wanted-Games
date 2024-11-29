import GameFeatures from "./GameFeatures";

export default function GameDetails(props) {
  const gameDetailsOrderClass =
    props.sortId % 2 === 0 ? `order-md-1 col-md-7` : `order-md-2 col-md-6`;
  const gameImageOrderClass =
    props.sortId % 2 === 0 ? `order-md-2 col-md-5` : `order-md-1 col-md-6`;

  return (
    <div
      className="rounded-3 border shadow-lg my-5 py-5"
      style={{ backgroundColor: props.backgroundColor }}
    >
      <div
        className="row featurette m-3 p-3 m-md-5 p-md-5"
        style={{ backgroundColor: props.backgroundColor }}
      >
        <div
          className={`${gameDetailsOrderClass}`}
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
            className="lead lh-base fs-4"
            style={{
              backgroundColor: props.backgroundColor,
              color: props.textColor,
            }}
          >
            {props.gameDescription1}
          </p>
          <p
            className="lead lh-base fs-4"
            style={{
              backgroundColor: props.backgroundColor,
              color: props.textColor,
            }}
          >
            {props.gameDescription2}
          </p>

          <GameFeatures
            gameTimeIcon={props.gameTimeIcon}
            gamePlayersIcon={props.gamePlayersIcon}
            gameAgeIcon={props.gameAgeIcon}
            backgroundColor={props.backgroundColor}
          />
        </div>
        <div
          className={`${gameImageOrderClass}`}
          style={{ backgroundColor: props.backgroundColor }}
        >
          <img
            className="featurette-image img-fluid mx-auto"
            alt="Game Image"
            src={`data:image/png+xml;base64,${props.gameImage}`}
            // src={props.gameImage}
            width={450}
            height={450}
            style={{ backgroundColor: props.backgroundColor }}
          />
        </div>
      </div>
    </div>
  );
}
