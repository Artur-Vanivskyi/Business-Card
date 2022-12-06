import React from "react";
import NavBar from "./NavBar";
import Routes from "./Routes";
import "./Layout.css";

function Layout() {
  return (
    <div>
      <div className="">
        <NavBar />
      </div>
      <div>
        <Routes />
      </div>
    </div>
  );
}

export default Layout;
