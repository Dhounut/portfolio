//DEVEN WEEDEN 2026
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "./Hero.jsx";
import About from "./About.jsx";
import MorphHeading from "./MorphHeading.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";

function Home() {
  const loc = useLocation();

  //navbar section, coming from a case study
  useEffect(() => {
    const id = loc.state && loc.state.scrollTo;
    if(!id){
      return;
    }
    const timer = setTimeout(() => {
      const sec = document.getElementById(id);
      if(sec){
        sec.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [loc.state]);

  return(
    <>
      <Hero/>
      <About/>
      <MorphHeading/>
      <Projects/>
      <Contact/>
    </>
  );
}

export default Home;
