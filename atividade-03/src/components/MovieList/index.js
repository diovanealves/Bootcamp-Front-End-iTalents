import { MovieCard } from "../MovieCard";

import "./style.css";

export function MovieList({ movies }) {
  return (
    <section className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </section>
  );
}
