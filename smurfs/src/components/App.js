import React, { Component } from "react";

import SmurfData from "../SmurfData";

import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1> 
        <SmurfData />
      </div>
    );
  }
}

export default App;
