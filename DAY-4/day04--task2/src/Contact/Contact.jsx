import "./Contact.css";
import Insta from "/src/assets/insta.png";
import GitHub from "/src/assets/github.png";
import LinkedIn from "/src/assets/linkedin.png";

const Projects = () => {
  return (
    <div id="contact">
      <p>Feel free to connect me on</p>
      <div id="socials">
        <a href="https://www.instagram.com/dev._.nest?igsh=MXgwYmtxYzlyN2ZtNw==" target="_blank" rel="noopener noreferrer">
          <img src={Insta} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/bathula-naga-sai-kiran" target="_blank" rel="noopener noreferrer">
          <img src={LinkedIn} alt="" />
        </a>
        <a href="https://github.com/DEV-NSK" target="_blank" rel="noopener noreferrer">
          <img src={GitHub} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Projects;
