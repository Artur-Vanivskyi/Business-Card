import React from "react";
import { deleteBusinesscard } from "../utils/api";

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
    <>
      <h1>BusinessCard</h1>
      <div className="card">
        <h4>First Name: {first_name}</h4>
        <h4>Last Name: {last_name}</h4>
        <h4>Mobile Number: {mobile_number}</h4>
        <h4>Email: {email}</h4>
        <h4>Job Title: {job_title}</h4>
        <h4>Company name: {company_name}</h4>
        <h4>Comments: {comments}</h4>
        <a
          href={`/businesscards/${businesscard_id}/edit`}
          role="button"
          className="btn btn-secondary"
        >
          <span className="oi oi-pencil"></span> Edit
        </a>
        <button type="button" className="btn btn-info" onClick={handleDelete}>
          <span className="oi oi-circle-x mr-1"></span>Delete
        </button>
      </div>
    </>
  );
}

export default BusinessCards;
