import React from "react";

class Themetoggler extends React.Component {
  constructor() {
    super();
    this.state = {
      isTheme: false,
    };
  }
  handletoggler = () => {
    this.setState({
      isTheme: !this.state.isTheme,
    });
  };
  render() {
    return (
      <div
        id="themetoggler"
        style={{
          backgroundColor: this.state.isTheme ? "white" : "#fedcba",
          width: "100%",
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <button onClick={this.handletoggler}>CLICK ME</button>
      </div>
    );
  }
}

export default Themetoggler;
