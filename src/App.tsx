import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="antialiased">
      <Navbar />
      <Intro />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
