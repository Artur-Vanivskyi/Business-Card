import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="wrap">
        <div className="container">
          <div className="ring"></div>
          <div className="ring"></div>
          <div className="ring"></div>
        </div>

          <div className="bussiness-card">
            <div className="front">
              <div className="company">Learn about us!</div>
              <span className="oi oi-home"></span>
            </div>
            <div className="back">
              <div className="info"></div>
            </div>
          </div>
        
      </div>
    </div>
  );
}

export default Home;
