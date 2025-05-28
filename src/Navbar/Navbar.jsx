import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div id="main">
      <div id="navbar">
        <span>mr.Bathula</span>
        <div id="nav-links">
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/projects">PROJECTS</Link>
          <Link to="/contact">CONTACT</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
