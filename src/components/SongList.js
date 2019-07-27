import React from "react";
import { SongDetail } from "./SongDetail";

export const SongList = props => {
  const songs = props.songs.map(song => {
    return (
      <div id="itunes-list">
        <SongDetail
          title={song["im:name"].label}
          artist={song["im:artist"].label}
          image={song["im:image"][2].label}
          price={song["im:price"].label}
          audioPreview={song.link[1].attributes.href}
        />
      </div>
    );
  });

  return (
    <>
      <h1>iTunes Top 20 Songs: United Kingdom</h1>
      {songs}
    </>
  );
};
