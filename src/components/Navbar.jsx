//DEVEN WEEDEN 2026
import { useNavigate, useLocation } from "react-router-dom";
import "./css/Navbar.css";

function Navbar() {
  const nav = useNavigate();
  const loc = useLocation();

  //go home first if on a case study
  const goTo = (e, id) => {
    e.preventDefault();
    if(loc.pathname !== "/"){
      nav("/", { state: { scrollTo: id } });
    } else{
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    }
  };

  return(
    <nav id="navbar">
      <div className="container">
        <a className="nav-name" href="#/" onClick={(e) => goTo(e, "hero")}><span className="full">DEVEN WEEDEN</span><span className="short">DW</span></a>
        <ul>
          <li><a href="#/" onClick={(e) => goTo(e, "about")}>About</a></li>
          <li><a href="#/" onClick={(e) => goTo(e, "projects")}>Projects</a></li>
          <li><a href="#/" onClick={(e) => goTo(e, "contact")}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
