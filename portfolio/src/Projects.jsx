import prtf from "/src/Portfolio.png";
import ar from "/src/ar.png";
import resturant from "/src/restuarant.png";
import parallax from "/src/project.png";

import "./Projects.css";

function Projects() {
  return (
    <div id="projects">
      <div className="p-card">
        <img src={prtf} alt="" />
        <h3>PORTFOLIO</h3>
      </div>
      <div className="p-card">
        <img src={ar} alt="" />
        <h3>BR Architects</h3>
      </div>
      <div className="p-card">
        <img src={resturant} alt="" />
        <h3>Golden Spoon</h3>
      </div>
      <div className="p-card">
        <img src={parallax} alt="" />
        <h3>Parallax</h3>
      </div>
    </div>
  );
}

export default Projects;
