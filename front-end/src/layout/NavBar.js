import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <nav className="all">
        <div className="navtop">
          <Link to="/dashboard" className="navBrand">
            Vancard
          </Link>
        </div>

        <ul>
        <li>
            <Link to="/home" className="navlink">
              Home
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="navlink">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/search" className="navlink">
              Search
            </Link>
          </li>
          <li>
            <Link to="/businesscards/new" className="navlink">
              Add card
            </Link>
          </li>
        </ul>
      </nav>

      {/* <nav className="navbar">
        <div>
          <Link to="/dashboard">
            <h4>Dashboard</h4>
          </Link>
          <Link to="/search">
            <h4>Search</h4>
          </Link>
          <Link to="/businesscards/new">
            <h4>Add Card</h4>
          </Link>
        </div>
      </nav> */}
    </>
  );
}

export default NavBar;
