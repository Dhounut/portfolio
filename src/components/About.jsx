//DEVEN WEEDEN 2026
import portrait from "../assets/me.png";
import { useReveal } from "../useReveal.js";
import "./css/About.css";

function About() {
  const [ref, revealed] = useReveal(0.6);

  return(
    <section id="about" ref={ref} data-revealed={revealed}>
      <div className="container">
        <div className="row">
          <div className="photo">
            <img src={portrait} alt="Deven Weeden"/>
          </div>
          <div className="text">
            <p>Hello! I'm Deven Weeden, a senior studying Human-Centered Computing at The Rochester Institute of Technology, with minors in Web Development and Psychology. I'm a web developer and designer, with a user-centered minset.</p>
            <p>I like being part of both the design and the development processes, figuring out what people actually need and then building it. Understanding how people think and what gets in their way makes it much easier to build something they will actually enjoy using.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
