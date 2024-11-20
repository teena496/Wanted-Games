import collectionIcon from "./assets/collection.svg";
import peopleIcon from "./assets/people.svg";
import clockIcon from "./assets/clock-history.svg";

export default function GameFeatures() {
  return (
    <div className="row g-4 py-5 row-cols-lg-3">
      <div className="feature col">
        <img
          className="featurette-image img-fluid mx-auto"
          alt="150x150"
          src={collectionIcon}
          height={50}
          width={50}
        />
      </div>
      <div className="feature col">
        <img
          className="featurette-image img-fluid mx-auto"
          alt="150x150"
          src={peopleIcon}
          height={50}
          width={50}
        />
      </div>
      <div className="feature col">
        <img
          className="featurette-image img-fluid mx-auto"
          alt="150x150"
          src={clockIcon}
          height={50}
          width={50}
        />
      </div>
    </div>
  );
}
