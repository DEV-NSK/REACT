import React from "react";
import "./App.css"; 

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  handleinc = () => {
    this.setState({count:this.state.count + 1});
  }
  handledec = () => {
    this.setState({count:this.state.count - 1});
  }
  handlereset = () => {
    this.setState({count:this.state.count=0});
  }
  render() {
    return (
      <div id="main">
        <h1>COUNTER APP</h1>
        <h2>{this.state.count}</h2>
        <div id="btns">
          <button onClick={this.handleinc} disabled={this.state.count===10}>+</button>
          <button onClick={this.handledec} disabled={this.state.count===0}>-</button>
          <button onClick={this.handlereset} disabled={this.state.count===0}>RESET</button>
        </div>
      </div>
    );
  }
}

export default App;
