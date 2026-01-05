import React from "react";
import Navbar from "./shared/Navbar";
import About from "./page/About";
import Contact from "./page/Contact";
import Footer from "./shared/Footer";
import Hero from "./page/Hero";
import Skills from "./page/Skill";
import Projects from "./page/Project";
import Experience from "./page/Experience";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
