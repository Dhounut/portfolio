//DEVEN WEEDEN 2026
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import CaseStudy from "./components/CaseStudy.jsx";

function App() {
  return(
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects/:slug" element={<CaseStudy/>}/>
        <Route path="*" element={<Navigate to="/" replace/>}/>
      </Routes>
    </>
  );
}

export default App;
