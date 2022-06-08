import React from 'react';
import MovieItem from './MovieItem';

export default function MovieList({ movies }) {
  return (
    <div>
      {
        movies.map((movie, i) => <MovieItem key={movie + i} {...movie} />)
      }
    </div>
  );
}

