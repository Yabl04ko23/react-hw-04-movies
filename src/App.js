import "./App.css";
import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import routes from "./routes";
import HomePage from "./pages/HomePage";

const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage"));

function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route exact path={routes.movies} component={MoviesPage} />
        <Route path={routes.movieDetails} component={MovieDetailsPage} />
      </Switch>
    </>
  );
}

export default App;
