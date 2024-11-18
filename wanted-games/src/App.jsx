import wantedGamesLogo from "./assets/logo.png";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="/">
          <img src={wantedGamesLogo} className="logo" alt="Wanted games logo" />
        </a>
      </div>
    </>
  );
}

export default App;
