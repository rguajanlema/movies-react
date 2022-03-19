import movies from "./movies.json";

export function MoviesGrid() {
  //creamos una funcion javascript para recorrer el json
  return (
    <ul>
      {movies.map((movie) => (
        <li>{movie.title}</li>
      ))}
    </ul>
  );
}
