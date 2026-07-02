import Navbar from "./components/layout/Navbar";

import Hero from "./components/home/Hero";
import About from "./components/home/About";
import Skills from "./components/home/Skills";
import Experience from "./components/home/Experience";
import Education from "./components/home/Education";
import Projects from "./components/home/Projects";
import Contact from "./components/home/Contact";

import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;