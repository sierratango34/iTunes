import React, { Component } from "react";
import { SongList } from "../components/SongList";

class SongContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: []
    };
  }

  componentDidMount() {
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";
    fetch(url)
      .then(res => res.json())
      .then(songs => this.setState({ songs: songs.feed.entry }));
  }

  render() {
    return <SongList songs={this.state.songs} />;
  }
}

export default SongContainer;
