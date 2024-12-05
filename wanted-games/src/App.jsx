import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Gallery from "./Gallery";
import Games from "./Games";
import Contact from "./Contact";
import Footer from "./Footer";
import Testimonials from "./Testimonials";

export default function App() {
  return (
    <div style={{ minWidth: "375px" }}>
      <Navbar />
      <Home />
      <About />
      <Gallery />
      <Games />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
