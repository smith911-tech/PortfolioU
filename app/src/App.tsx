import "./App.css";
import ContactSection from "./Contact-Section";
import ProjectsSection from "./Projects-Section";
import Header from "./Header";
import HeroSection from "./HeroSection";
import StacksSection from "./Stacks-Section";
import { useState, useEffect, useRef } from "react";
function App() {
  const [activeSection, setActiveSection] = useState(null);
  const homeRef = useRef<any>(null);
  const projectsRef = useRef<any>(null);
  const contactRef = useRef<any>(null);

  useEffect(() => {
    const sectionRefs = [
      { section: "Home", ref: homeRef },
      { section: "Projects", ref: projectsRef },
      { section: "Contact", ref: contactRef },
    ];

    const handleScroll = () => {
      for (const { section, ref } of sectionRefs) {
        if (ref.current) {
          const top = ref.current.getBoundingClientRect().top;
          if (top >= 0 && top < window.innerHeight) {
            setActiveSection(section as any);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <main className=" font-Inter">
      <Header activeSection={activeSection} />
      <div id="Home" ref={homeRef}>
        <HeroSection />
      </div>
      <StacksSection />
      <div id="Projects" ref={projectsRef}>
        <ProjectsSection />
      </div>
      <div id="Contact" ref={contactRef}>
        <ContactSection />
      </div>
    </main>
  );
}

export default App;
