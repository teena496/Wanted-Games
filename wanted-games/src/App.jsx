import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Carousel from "./Carousel";
import Games from "./Games";
import Contact from "./Contact";

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Carousel />
      <Games />
      <Contact />
    </div>
  );
}
