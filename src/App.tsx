import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter basename="/">
      <div className="relative z-0 bg-primary flex">
        <Navbar />
        <div className="sticky top-0 bg-primary">
          <Hero />
        </div>
        <div className="bg-primary">
          <div className="relative z-2">
            <About />
          </div>
          <div className="relative z-0 h-full">
            <Contact />
          </div>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;