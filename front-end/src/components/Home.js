import React from "react";
import CreateBusinesscard from "./CreateBusinesscard";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="wrap">
        {/* <div className="container">
          <div className="ring"></div>
          <div className="ring"></div>
          <div className="ring"></div>
        </div> */}
        <div>
          <CreateBusinesscard />
        </div>
         <div className="bussiness-card-home">
          <div className="front-home">
            <div className="company-home">Learn about us!</div>
            <span className="oi oi-home"></span>
          </div>
          <div className="back-home">
            <div className="info-home">
              <p>
                Vancard is the easiest app to manage business cards, the perfect
                fit for sales people, entrepreneurs, business developers or
                marketing experts, and anyone who want to be one.
              </p>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Home;
