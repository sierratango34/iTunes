import React, { Component } from "react";
import { SongList } from "../components/SongList";

class SongContainer extends Component {
  render() {
    return (
      <>
        <h3>This is a song container</h3>
        <SongList />
      </>
    );
  }
}

export default SongContainer;
