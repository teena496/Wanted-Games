export default function GameFeatures(props) {
  return (
    <div
      className="row g-4 py-5 row-cols-lg-3"
      style={{ backgroundColor: props.backgroundColor }}
    >
      <div
        className="feature col"
        style={{ backgroundColor: props.backgroundColor }}
      >
        <img
          className="featurette-image img-fluid mx-auto"
          alt="Game Time Icon"
          src={props.gameTimeIcon}
          height={90}
          width={90}
          style={{ backgroundColor: props.backgroundColor }}
        />
      </div>
      <div
        className="feature col"
        style={{ backgroundColor: props.backgroundColor }}
      >
        <img
          className="featurette-image img-fluid mx-auto"
          alt="Game Players Icon"
          src={props.gamePlayersIcon}
          height={90}
          width={90}
          style={{ backgroundColor: props.backgroundColor }}
        />
      </div>
      <div
        className="feature col"
        style={{ backgroundColor: props.backgroundColor }}
      >
        <img
          className="featurette-image img-fluid mx-auto"
          alt="Game Age Icon"
          src={props.gameAgeIcon}
          height={90}
          width={90}
          style={{ backgroundColor: props.backgroundColor }}
        />
      </div>
    </div>
  );
}
