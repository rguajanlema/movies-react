import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//import { MoviesGrid } from "./components/MoviesGrid";
//import styles from "./App.module.css";

export function App() {
  return (
    <Router>
      <header>{/*<h1 className={styles.title}>Movies</h1>*/}</header>
      <main>
        <Switch>
          <Route path="/movie">Movies</Route>
          <Route path="/">Home</Route>
        </Switch>
      </main>
    </Router>
  );
}
