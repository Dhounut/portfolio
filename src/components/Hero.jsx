//DEVEN WEEDEN 2026
import {useState, useEffect, useRef} from "react";
import LavaLamp from "./HeroCanvas";
import { scrollProgress } from "../scrollProgress.js";
import "./css/Hero.css";

function Hero() {
  const NAME = "Deven Weeden";
  const [count, setCount] = useState(0);
  const isTyping = count < NAME.length;
  useEffect(() => {
    let index = 0;
    let timer;
    const type = () => {
      if(index < NAME.length){
        index++;
        setCount(index);
        timer = setTimeout(type, 100);
      }
    };
    timer = setTimeout(type, 350);
    return () => clearTimeout(timer);
  }, []);

  const [limit, setLimit] = useState(NAME.length);
  const [prog, setProg] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const untype = () => {
      const progress = scrollProgress(ref.current, 0.4);
      setLimit(Math.floor(NAME.length * (1 - progress)));
      setProg(progress);
      setScrolled(window.scrollY > 120);
    };

    window.addEventListener("scroll", untype);
    window.addEventListener("resize", untype);
    untype();

    return () => {
      window.removeEventListener("scroll", untype);
      window.removeEventListener("resize", untype);
    };
  }, []);

  const vis = Math.min(count, limit);
  return(
    <section id="hero" ref={ref}>
      <LavaLamp></LavaLamp>
      <div className="shadow"></div>
      <div className="container">
        <h1>{NAME.slice(0,vis)}<span data-typing={isTyping}></span></h1>
        <div className="intro" style={{opacity: 1 - prog * 1.5}}>
          <p className="role">Web Developer/Designer</p>
        </div>
      </div>
      <button
        className="cue"
        data-hidden={scrolled}
        onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}
        aria-label="Scroll down"
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="square">
          <polyline points="5 9 12 16 19 9"/>
        </svg>
      </button>
    </section>
  );
}

export default Hero;
