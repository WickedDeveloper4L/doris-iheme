import React from "react";
import "./App.css";
import About from "./components/container/About/About";
import Contact from "./components/container/Contact/Contact";
import Footer from "./components/container/Footer/Footer";
import Home from "./components/container/Home/Home";
import Skills from "./components/container/Skills/Skills";
import Navbar from "./components/Navbar/Navbar";
import { Typewriter } from "react-simple-typewriter";
import Portfolio from "./components/container/Portfolio/Portfolio";

const App = () => {
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="application">
          <h1 className="h1">
            <span className="typewriter">
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={["Social media manager", "Content creator", "Graphics designer", "Event planner"]}
                loop={5}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
        </div>
      ) : (
        <>
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Portfolio/>
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
