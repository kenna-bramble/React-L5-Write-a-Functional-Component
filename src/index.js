import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import NameTag from "./NameTag.js";

const renderNameTag = (name) => <NameTag key={name} name={name} />;

class App extends Component {
  state = { names: ["Chai", "Sammy", "Pabu", "Sia", "Sidney"] };
  render() {
    const NameTagElements = this.state.names.map(renderNameTag);
    return (
      <div className="App">
        <h1>Name Tag Generator</h1>
        {NameTagElements}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
