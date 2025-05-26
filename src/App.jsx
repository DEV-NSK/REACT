import "./App.css";
import { Projects } from "./Projects.jsx";
import { About} from "./About.jsx";
import { Contact } from "./Contact.jsx";
import { Footer } from "./Footer.jsx";

export const App = () => {
  return (
    <div id="main">
      <div id="navbar">
        <p>
          <span>BR</span> Architects
        </p>
        <div id="nav-links">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
      {/* HOME-PAGE */}
      <div id="home">
        <img src="./src/assets/home-img.jpg" alt />
        <p>
          <span>BR</span> Architects
        </p>
      </div>
      <Projects></Projects>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};
