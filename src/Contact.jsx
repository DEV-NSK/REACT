import "./Contact.css";

export const Contact = () => {
  return (
    <div id="contact">
      <div id="form-content">
        <h1>Contact</h1>
        <p>Lets get in touch and talk about your next project.</p>
      </div>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="text" placeholder="Subject" />
      <input type="text" placeholder="Comment" />
      <div id="submit-btn">
        <a href="">SEND MESSAGE</a>
      </div>
    </div>
  );
};
