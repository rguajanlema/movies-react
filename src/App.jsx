import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { MoviesDetails } from "./pages/MoviesDetails";

//import { MoviesGrid } from "./components/MoviesGrid";
//import styles from "./App.module.css";

export function App() {
  return (
    <Router>
      <header>{/*<h1 className={styles.title}>Movies</h1>*/}</header>
      <main>
        <Switch>
          <Route exact path="/movie">
            <MoviesDetails />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}
