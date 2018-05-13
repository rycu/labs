import React, { Component } from "react";
import BasicForm from "./BasicForm";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Form Control Comparison</h1>
        </header>
        <BasicForm />
      </div>
    );
  }
}

export default App;
