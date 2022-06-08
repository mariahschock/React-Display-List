import React from 'react';

export default function MovieItem({ title, director, about }) {
  return (
    <div>
      <p>{title}, directed by {director}, was released in {about.released} starring {about.starring}, with a running time of {about.length} minutes.</p>
    </div>
  );
}

