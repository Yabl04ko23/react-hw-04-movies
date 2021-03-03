import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <header>
        <div>
          <Link className="navText" to="/">Home </Link>
          <Link className="navText" to="/movies">Movies</Link>
        </div>
      </header>
    </>
  );
}

export default Navigation;
