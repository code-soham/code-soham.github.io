import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Head from "./components/Head";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import Education from "./components/Edu";
import Projects from "./components/Projects";
import Aos from "aos";
import "aos/dist/aos.css";
function App() {
  Aos.init({
    duration: 1000,
    once: false,
  });
  return (
    <div className="bg-gray-300 h-screen">
      <Navbar />
      <div className="sub_section" id="home">
        <Head />
      </div>
      <div className="sub_section" id="about">
        <About />
      </div>
      <div className="sub_section" id="education">
        <Education />
      </div>
      <div className="sub_section" id="skills">
        <Skills />
      </div>
      <div className="sub_section" id="projects">
        <Projects />
      </div>
      <div className="sub_section" id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
export default App;
