import gameImage from "./assets/game-koi.svg";

export default function Home() {
  return (
    <div
      className="container "
      style={{
        marginTop: "100px",
        marginBottom: "100px",
        backgroundColor: "#D4CAF5",
      }}
    >
      <div
        className="row flex-lg-row-reverse align-items-center py-5"
        style={{
          backgroundColor: "#D4CAF5",
        }}
      >
        <div
          className="col-10 col-sm-8 col-lg-6"
          style={{
            backgroundColor: "#D4CAF5",
          }}
        >
          <img
            src={gameImage}
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="500"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6 p-5">
          <h2 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            “Some nice quotation in two lines”{" "}
          </h2>
          <p className="lead">
            Quickly design and customize responsive mobile-first sites with
            Bootstrap, the world’s most popular front-end open source toolkit,
            featuring Sass variables and mixins, responsive grid system,
            extensive prebuilt components, and powerful JavaScript plugins.
          </p>
        </div>
      </div>
    </div>
  );
}
