import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import useScrollPosition from "./hooks/useScrollPosition";
import { useState, useEffect } from "react";

function App() {
  
  const scrollPosition = useScrollPosition();
  const sections = document.querySelectorAll(".scroll-section");

  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const sectionBoundaries = [...sections].map((section) => {
      const top = section.offsetTop;
      const bottom = top + section.clientHeight;
      return { top, bottom };
    });

    const currentSection = sectionBoundaries.findIndex(
      (section) => scrollPosition >= section.top && scrollPosition < section.bottom
    );

    setActiveSection(currentSection);
  }, [scrollPosition]);

  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault();

      if (e.deltaY > 0) {
        if (activeSection < sections.length - 1) {
          sections[activeSection + 1].scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      } else {
        if (activeSection > 0) {
          sections[activeSection - 1].scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => window.removeEventListener("wheel", handleScroll);
  }, [activeSection]);

  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Header />
          <LandingSection />
          <ProjectsSection />
          <ContactMeSection />
          <Footer />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
