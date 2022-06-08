import React from 'react';

export default function MusicItem({ genre, artist, TopSongs }) {
  return (
    <div className="musics">
      <h2>Genre: {genre}</h2>
      <h3>Artist: {artist}</h3>
      <p>Top Songs:</p>
      <p>{ TopSongs [0] }</p>
      <p>{ TopSongs [1] }</p>
      <p>{ TopSongs [2] }</p>
    </div>
  );
}

