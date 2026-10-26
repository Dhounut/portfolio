//DEVEN WEEDEN 2026
import ProjectCard from "./ProjectCard.jsx";
import { projects } from "../projects/index.js";
import "./css/Projects.css";

function Projects() {
  let featCnt = 0;

  return(
    <section id="projects">
      <div className="container">
        <div className="grid">
          {projects.map((proj) => {
            //featured cards alternate sides
            let side = "top";
            if(proj.featured){
              side = featCnt % 2 === 0 ? "right" : "left";
              featCnt++;
            }
            return <ProjectCard key={proj.slug} proj={proj} side={side}/>;
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
