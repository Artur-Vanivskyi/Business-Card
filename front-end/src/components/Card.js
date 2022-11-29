import React from "react";
import "./Card.css";
import img from "../assests/test.png";

function Card() {
   
   

  return (
    <div className="all-card">
      <section>
        <div className="bussiness-card">
          <div className="front">
            <div className="company">company_name</div>
          </div>
          <div className="back">
            <div className="image">
              <img src={img} />
              <h1>Solomon</h1>
              <h2>UX de</h2>
            </div>
            <div className="info">
              <div className="contact">
                <span className="oi oi-phone"></span>Phone
              </div>
              <div className="contact">
                <span className="oi oi-envelope-open"></span>Email
              </div>
              <div className="contact">
                <span className="oi oi-pencil"></span>Comment
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Card;
