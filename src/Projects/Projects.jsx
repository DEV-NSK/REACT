import Ar from "/src/assets/ar.png";
import Portfolioimg from "/src/assets/port.png";
import Para from "/src/assets/page.png";
import Restuarant from "/src/assets/rest.png";
import "./Projects.css";

const Projects = () => {
  return (
    <div id="projects">
      <div className="p-card">
        <img src={Portfolioimg} alt="" />
        <h3>PORTFOLIO</h3>
        <a href="https://dev-nsk.github.io/PROJECTS/PORTFOLIO/"  target="_blank" rel="noopener noreferrer">LIVE PREVIEW</a>
      </div>
      <div className="p-card">
        <img src={Ar} alt="" />
        <h3>BR Architects</h3>
        <a href="https://dev-nsk.github.io/10KCODERS-ASSIGNMENTS/CSS/DAY-10/index.html"  target="_blank" rel="noopener noreferrer">LIVE PREVIEW</a>
      </div>
      <div className="p-card">
        <img src={Restuarant} alt="" />
        <h3>Golden Spoon</h3>
        <a href="https://dev-nsk.github.io/10KCODERS-ASSIGNMENTS/CSS/DAY-9/TASK-3/index.html"  target="_blank" rel="noopener noreferrer">LIVE PREVIEW</a>
      </div>
      <div className="p-card">
        <img src={Para} alt="" />
        <h3>Parallax</h3>
        <a href="https://dev-nsk.github.io/10KCODERS-ASSIGNMENTS/CSS/PROJECT/"  target="_blank" rel="noopener noreferrer">LIVE PREVIEW</a>
      </div>
    </div>
  );
};

export default Projects;
