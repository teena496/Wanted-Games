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
          src={`data:image/png+xml;base64,${props.gameTimeIcon}`}
          // src={props.gameTimeIcon}
          height={100}
          width={100}
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
          src={`data:image/png+xml;base64,${props.gamePlayersIcon}`}
          // src={props.gamePlayersIcon}
          height={100}
          width={100}
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
          src={`data:image/png+xml;base64,${props.gameAgeIcon}`}
          // src={props.gameAgeIcon}
          height={100}
          width={100}
          style={{ backgroundColor: props.backgroundColor }}
        />
      </div>
    </div>
  );
}
