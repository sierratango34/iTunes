import React from "react";

export const SongDetail = ({ title, artist, image, price, audioPreview }) => {
  return (
    <>
      <div id="song-box">
        <img src={image} />
        <div id="text">
          <h3>{title}</h3>
          <h4>{artist}</h4>
          <p>{price}</p>
          <audio controls>
            <source src={audioPreview} />
          </audio>
        </div>
      </div>
    </>
  );
};
