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
          alt="150x150"
          src={props.gameTimeIcon}
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
          alt="150x150"
          src={props.gamePlayersIcon}
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
          alt="150x150"
          src={props.gameAgeIcon}
          height={100}
          width={100}
          style={{ backgroundColor: props.backgroundColor }}
        />
      </div>
    </div>
  );
}
