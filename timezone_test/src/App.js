import React, { Component } from "react";
import moment from "moment";
import "moment-timezone";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    let rwanda = moment()
      .tz("Africa/Kigali")
      .format();

    let kenya = moment()
      .tz("Africa/Nairobi")
      .format();
    let uganda = moment()
      .tz("Africa/Kampala")
      .format();
    console.log({ kenya, rwanda, uganda });
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
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
}

export default App;
