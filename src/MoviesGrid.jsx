import { MovieCard } from "./MovieCard";
import movies from "./movies.json";

export function MoviesGrid() {
  //creamos una funcion javascript para recorrer el json
  //pasa el atributo movie
  return (
    <ul>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
