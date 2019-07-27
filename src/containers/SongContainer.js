import React, { Component } from "react";
import { SongList } from "../components/SongList";

class SongContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: []
    };
  }

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
