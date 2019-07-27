import React, { Component } from "react";
import "./App.css";
import SongContainer from "./containers/SongContainer";

class App extends Component {
  render() {
    return (
      <>
        <h1>Hello world</h1>
        <SongContainer />
      </>
    );
  }
}

export default App;
