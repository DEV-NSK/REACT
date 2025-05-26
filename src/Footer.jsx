import "./Footer.css";
import map1 from "./assets/footer-img.jpg";

export const Footer = () => {
  return (
    <div id="footer">
      <div id="end">
        <img src={map1} />
      </div>
      <div id="foot">
        <p>Powered by </p>
        <a href="">w3.css</a>
      </div>
    </div>
  );
};
