import About from "./About";
import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import Carousel from "./Carousel";
import Games from "./Games";
import Footer from "./Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <main role="main" style={{ backgroundColor: "#D4CAF5" }}>
        <Home />
        <About />
        <Carousel />
      </main>
      <Games />
      <Footer />
    </div>
  );
}
