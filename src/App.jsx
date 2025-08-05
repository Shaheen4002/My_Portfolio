import { useRef } from "react";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import WhyChooseMe from "./sections/WhyChooseMe";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="overflow-x-hidden">
      <div className="min-h-screen bg-base-100 dark:bg-base-900 transition-colors duration-300">
        <Navbar
          scrollToSection={scrollToSection}
          refs={{ homeRef, aboutRef, projectsRef, contactRef }}
        />

        <main className="mx-auto w-full max-w-[1800px]">
          <div ref={homeRef}>
            <Home scrollToContact={() => scrollToSection(contactRef)} />
          </div>

          <div ref={aboutRef}>
            <About />
          </div>

          <div ref={projectsRef}>
            <Projects />
          </div>

          <div>
            <WhyChooseMe />
          </div>

          <div ref={contactRef}>
            <Contact />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
