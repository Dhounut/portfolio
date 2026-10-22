//DEVEN WEEDEN 2026
import LavaLamp from "./HeroCanvas";
import { useReveal } from "../useReveal.js";
import "./css/Contact.css";

function Contact() {
  const [ref, revealed] = useReveal(0.6);

  return(
    <section id="contact">
      <LavaLamp direction="in"></LavaLamp>
      <div className="shadow"></div>
      <div className="container" ref={ref} data-revealed={revealed}>
        <h2>CONTACT</h2>
        <div className="rule"></div>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/dew1" target="_blank">
              <span className="label">LinkedIn</span>
              <span className="detail">linkedin.com/in/dew1</span>
              <span className="arrow" aria-hidden="true">{">"}</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/Dhounut" target="_blank">
              <span className="label">GitHub</span>
              <span className="detail">github.com/Dhounut</span>
              <span className="arrow" aria-hidden="true">{">"}</span>
            </a>
          </li>
          <li>
            <a href="./resume.pdf" target="_blank">
              <span className="label">Resume</span>
              <span className="detail">PDF</span>
              <span className="arrow" aria-hidden="true">{">"}</span>
            </a>
          </li>
          <li>
            <a href="mailto:evertweeden@gmail.com">
              <span className="label">Email</span>
              <span className="detail">evertweeden@gmail.com</span>
              <span className="arrow" aria-hidden="true">{">"}</span>
            </a>
          </li>
        </ul>
      </div>
      <p className="credit">Designed & Developed by Deven Weeden, 2026</p>
    </section>
  );
}

export default Contact;
