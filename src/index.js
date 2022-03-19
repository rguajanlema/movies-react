import React from "react";
import ReactDOM from "react-dom";

//props el parametro de entrada
function Contenido(props) {
  //imprimimos el objeto props
  console.log(props);

  return (
    <div>
      <h1>Titulo</h1>
      <div>Hola desde React</div>
    </div>
  );
}

ReactDOM.render(
  <Contenido titulo="Titulo" contenido="Hola desde React" />,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
