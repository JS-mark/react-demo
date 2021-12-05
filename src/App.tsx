import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Demo from "./components/demo";
import Clock from "./components/clock";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Demo name="ddd" age={18}></Demo>
        <Clock name="ddd" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
