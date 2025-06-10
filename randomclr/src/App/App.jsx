import React from "react";
import Navbar from "/src/Navbar/Navbar.jsx";
import { Route, Routes } from "react-router-dom";
import Randomclr from "/src/Randomclr/Randomclr.jsx";
import TeluguQuotes from "/src/TeluguQuotes/TeluguQuotes.jsx";
// import ThemeToggler from '/src/ThemeTogglr/Themetglr.jsx';
import Themetglr from "/src/ThemeTogglr/Themetglr.jsx";
import Signup from "/src/Signup/Signup.jsx";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Randomclr />} />
          <Route path="/TeluguQuotes" element={<TeluguQuotes />} />
          <Route path="/ThemeToggler" element={<Themetglr />} />
          <Route path="/SignUp" element={<Signup />} />
        </Routes>
      </div>
    );
  }
}

export default App;
