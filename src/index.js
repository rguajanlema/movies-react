import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//props el parametro de entrada
//otra de obtener el contenido
function Contenido({ titulo, children }) {
  return (
    <div>
      <h1>{titulo}</h1>
      <div>{children}</div>
    </div>
  );
}

ReactDOM.render(
  //pasamos contenidos children como si fuera una variable
  <Contenido titulo="Titulo 1">Hola desde React</Contenido>,
  document.getElementById("root")
);
