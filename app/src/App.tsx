import "./App.css";
import FifthSection from "./FifthSection";
import FourthSection from "./FourthSection";
import Header from "./Header";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
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
        <SecondSection />
      </div>
      <ThirdSection />
      <div id="Projects" ref={projectsRef}>
        <FourthSection />
      </div>
      <div id="Contact" ref={contactRef}>
        <FifthSection />
      </div>
    </main>
  );
}

export default App;
