import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Skills from "./sections/Skills";
import ParticleBackground from "./components/ParticleBackground";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Services from "./sections/Services";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <ParticleBackground />
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Services />
      <Contact />
    </>
  );
}

export default App;