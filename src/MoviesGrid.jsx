import movies from "./movies.json";

export function MoviesGrid() {
  //creamos una funcion javascript para recorrer el json
  return (
    <ul>
      {movies.map(function (movie) {
        return <li>{movie.title}</li>;
      })}
    </ul>
  );
}
