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
            <p>Hello! I'm Deven Weeden, a senior studying Human-Centered Computing at The Rochester Institute of Technology, with minors in Web Development and Psychology. I'm a web developer and designer, most of my work is in React and JavaScript.</p>
            <p>I've worked on academic and personal projects involving dynamic content, API consumption, and interactive UI components, such as a Chrome extension with an animated character and an iOS app built in Swift. As a Student Marketing Specialist I also wrote a PowerShell script that sped up the photo tagging process.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
