//DEVEN WEEDEN 2026
import {useState, useEffect, useRef} from "react";
//reveals once the top of the element passes this point on the screen
export function useReveal(point){
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;

    const stop = () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };

    const check = () => {
      if(el.getBoundingClientRect().top < window.innerHeight * point){
        setRevealed(true);
        stop();
      }
    };

    window.addEventListener("scroll", check);
    window.addEventListener("resize", check);
    check();

    return stop;
  }, [point]);

  return [ref, revealed];
}
