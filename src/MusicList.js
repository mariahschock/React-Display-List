import React from 'react';
import MusicItem from './MusicItem';

export default function MusicList({ musics }) {
  return (
    <div className="music">
      {
        musics.map((music, i) => <MusicItem key={music.genre + i} {...music} />)
      }
    </div>
  );
}

