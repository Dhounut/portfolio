//DEVEN WEEDEN 2026
import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { projects } from "../projects/index.js";
import CaseStudyBlock from "./CaseStudyBlock.jsx";
import "./css/CaseStudy.css";

function CaseStudy(){
  const { slug } = useParams();
  const index = projects.findIndex((proj) => proj.slug === slug);
  const proj = projects[index];

  //top of page on each project
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if(!proj){
    return <Navigate to="/" replace/>;
  }

  let next = projects[index + 1];
  if(!next){
    next = projects[0];
  }

  return(
    <article id="study" data-accent={proj.accent}>
      <div className="inner">
        <Link className="back" to="/">{"<"} All projects</Link>

        <header>
          <h1>{proj.title}</h1>
          <p className="summary">{proj.summary}</p>
          <dl className="meta">
            {proj.role && (
              <div>
                <dt>Role</dt>
                <dd>{proj.role}</dd>
              </div>
            )}
            {proj.timeline && (
              <div>
                <dt>Timeline</dt>
                <dd>{proj.timeline}</dd>
              </div>
            )}
            <div>
              <dt>Tools</dt>
              <dd>{proj.tools.join(", ")}</dd>
            </div>
          </dl>
        </header>

        {proj.coverVideo ? (
          <video
            className="cover"
            src={proj.coverVideo}
            poster={proj.cover}
            autoPlay
            muted
            loop
            playsInline
          ></video>
        ) : (
          proj.cover && <img className="cover" src={proj.cover} alt={proj.coverAlt}/>
        )}

        <div className="body">
          {proj.body.map((blk, index) => (
            <CaseStudyBlock key={index} blk={blk}/>
          ))}
        </div>

        <footer>
          <Link className="next" to={"/projects/" + next.slug}>
            <span className="label">Next project</span>
            <span className="title">{next.title}</span>
            <span className="arrow" aria-hidden="true">{">"}</span>
          </Link>
        </footer>
      </div>
    </article>
  );
}

export default CaseStudy;
