//DEVEN WEEDEN 2026
function CaseStudyBlock({blk}){
  if(blk.type === "text"){
    return(
      <section className="text">
        {blk.heading && <h2>{blk.heading}</h2>}
        {blk.paragraphs.map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </section>
    );
  }

  if(blk.type === "image"){
    return(
      <figure>
        <img className="art" src={blk.src} alt={blk.alt} style={{aspectRatio: blk.ratio}}/>
        <figcaption>{blk.caption}</figcaption>
      </figure>
    );
  }

  if(blk.type === "pair"){
    return(
      <figure>
        <div className="pair">
          {blk.items.map((item, index) => (
            <img key={index} className="art" src={item.src} alt={item.alt} style={{aspectRatio: blk.ratio}}/>
          ))}
        </div>
        <figcaption>{blk.caption}</figcaption>
      </figure>
    );
  }

  if(blk.type === "video"){
    return(
      <figure>
        <video
          className="art"
          src={blk.src}
          poster={blk.poster}
          style={{aspectRatio: blk.ratio}}
          autoPlay
          muted
          loop
          playsInline
        ></video>
        {blk.caption && <figcaption>{blk.caption}</figcaption>}
      </figure>
    );
  }

  if(blk.type === "link"){
    return(
      <a className="link" href={blk.href} target="_blank">
        {blk.label} <span aria-hidden="true">{">"}</span>
      </a>
    );
  }

  return null;
}

export default CaseStudyBlock;
