import React from 'react';
import MovieItem from './MovieItem';

export default function MovieList({ movies }) {
  return (
    <div className="movies">
      {
        movies.map((movie, i) => <MovieItem key={movie + i} {...movie} />)
      }
    </div>
  );
}

