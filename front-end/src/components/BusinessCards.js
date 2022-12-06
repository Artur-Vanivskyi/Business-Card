import React from "react";
import { deleteBusinesscard } from "../utils/api";
import img from "../assests/test.png";
import "./Card.css";

function BusinessCards({ businesscard, loadBusinesscards }) {
  const {
    businesscard_id,
    first_name,
    last_name,
    job_title,
    mobile_number,
    email,
    company_name,
    comments,
  } = businesscard;

  const handleDelete = (event) => {
    if (window.confirm("Do you want to delete this card?")) {
      deleteBusinesscard(businesscard_id)
        .then(() => loadBusinesscards(event))
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="all-card">
      <div className="buttonBox">
      <button type="button" className="button-delete" onClick={handleDelete}>
        <span className="oi oi-circle-x"></span>
      </button>
      </div>
      <div className="bussiness-card">
        <div className="front">
          <div className="company">{company_name}</div>
        </div>
        <div className="back">
          <div className="image">
            <img src={img} />
            <h1>
              {first_name} {last_name}
            </h1>
            <h2>{job_title}</h2>
          </div>
          <div className="info">
            <div className="contact">
              <span className="oi oi-phone"></span>
              {mobile_number}
            </div>
            <div className="contact">
              <span className="oi oi-envelope-open"></span>
              {email}
            </div>
            {comments && (
              <div className="contact">
                <span className="oi oi-pencil"></span>
                {comments}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>

    // {/* <div className="card">
    //   <a
    //     href={`/businesscards/${businesscard_id}/edit`}
    //     role="button"
    //     className="btn btn-secondary"
    //   >
    //     <span className="oi oi-pencil"></span> Edit
    //   </a>
    //   <button type="button" className="btn btn-info" onClick={handleDelete}>
    //     <span className="oi oi-circle-x mr-1"></span>Delete
    //   </button>
    // </div> */}
  );
}

export default BusinessCards;
