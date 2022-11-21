import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="navbar">
        <div>
          <Link to="/dashboard">
            <h4>Dashboard</h4>
          </Link>
          <Link to="/search">
            <h4>Search</h4>
          </Link>
          <Link to="/businesscard/new">
            <h4>Add Card</h4>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
