import movies from "./movies.json";

export function MoviesGrid() {
  //creamos una funcion javascript para recorrer el json
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </ul>
  );
}
