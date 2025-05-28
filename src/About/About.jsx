import Profile from "/src/assets/profile.jpg";
import "./About.css";

const About = () => {
  return (
    <div id="about">
      <img src={Profile} alt="" />
      <p>
        I am <span>BATHULA NAGA SAI KIRAN</span>, a third-year B.Tech Computer
        Science Engineering student with a strong focus on Full-Stack
        Development and Software Engineering. I have hands-on experience with
        HTML, CSS, JavaScript, and I am currently advancing my skills in the
        MERN stack (MongoDB, React.js, Node.js) to build scalable
        and dynamic web applications.
      </p>
    </div>
  );
};

export default About;
