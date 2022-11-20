import React from "react";

function BusinessCards({ businesscard }) {
  const {
    first_name,
    last_name,
    job_title,
    mobile_number,
    email,
    company_name,
    comments,
  } = businesscard;

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
      </div>
    </>
  );
}

export default BusinessCards;
