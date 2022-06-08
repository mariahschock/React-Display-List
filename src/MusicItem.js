import React from 'react';

export default function MusicItem({ genre, artist, TopSongs }) {
  return (
    <div>
      {/* {
        TopSongs.map(TopSongs => < key={TopSongs} />)
      }; */}
      <h2>Genre: {genre}</h2>
      <h3>Artist: {artist}</h3>
      <p>Top Songs: {TopSongs}</p>
    </div>
  );
}

