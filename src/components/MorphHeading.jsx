//DEVEN WEEDEN 2026
import {useState, useEffect, useRef} from "react";
import { clamp } from "../scrollProgress.js";
import "./css/MorphHeading.css";

const FROM = "ABOUT ME";
const TO = "PROJECTS";
const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//scroll range
const START = 0.33;
const END = 0.75;
//letter jumble timing
const STAGGER = 0.05;
const SCRAMBLE = 0.33;

//each letter scrambles on a delay
function morphAt(prog){
  let out = "";
  for(let i = 0; i < TO.length; i++){
    const lcl = (prog - i * STAGGER) / SCRAMBLE;
    if(lcl <= 0){
      out += FROM[i];
    } else if(lcl >= 1 || FROM[i] === TO[i]){
      out += TO[i];
    } else{
      out += LETTERS[Math.floor(Math.random() * LETTERS.length)];
    }
  }
  return out;
}

function MorphHeading(){
  const ref = useRef(null);
  const [label, setLabel] = useState(FROM);

  useEffect(() => {
    const update = () => {
      const rect = ref.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const prog = (vh - rect.top) / (rect.height + vh);
      const morph = clamp((prog - START) / (END - START));
      ref.current.style.setProperty("--morph", morph);
      setLabel(morphAt(morph));
    };

    window.addEventListener("scroll", update);
    window.addEventListener("resize", update);
    update();

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return(
    <div className="morph-frame" ref={ref}>
      <div className="container morph" data-blue={label === TO} aria-hidden="true">{label}</div>
    </div>
  );
}

export default MorphHeading;
