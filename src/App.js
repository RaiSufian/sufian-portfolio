import "./App.css";
import { useEffect } from "react";
import Navbar from "./layout/Navbar";
import Hero from "./components/Hero";
import Aos from "aos";
import Skills from "./components/skills";
import "aos/dist/aos.css";
import Services from "./components/services";
import Project from "./components/project";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Skills />
      <Services />
      <Project />
      <footer className="p-3 text-center">
        <h6 className="mb-3">JOHN ALEX</h6>
        <p>codeaprogram © All CopyRights Reserved 2022</p>
      </footer>
    </div>
  );
}

export default App;
