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
    <>
      <Navbar />
      <div style={{ minWidth: "375px" }}>
        <Home />
        <About />
        <Gallery />
        <Games />
        <Testimonials />
        <Contact />
      </div>
      <Footer />
    </>
  );
}
