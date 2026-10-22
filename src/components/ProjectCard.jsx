//DEVEN WEEDEN 2026
import { Link } from "react-router-dom";
import { useReveal } from "../useReveal.js";

function ProjectCard({proj, side}){
  const [ref, revealed] = useReveal(0.85);

  return(
    <Link
      className="project"
      ref={ref}
      to={"/projects/" + proj.slug}
      data-featured={proj.featured}
      data-accent={proj.accent}
      data-side={side}
      data-revealed={revealed}
    >
      <div className="frame">
        {proj.cover && (
          <>
            <div className="wash" style={{backgroundImage: `url(${proj.cover})`}}></div>
            <img className="art" src={proj.cover} alt={proj.coverAlt}/>
          </>
        )}
      </div>
      <div className="body">
        <h3>{proj.title}</h3>
        <p>{proj.summary}</p>
        <ul className="tags">
          {proj.tools.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
      </div>
    </Link>
  );
}

export default ProjectCard;
