import React from "react";

function BusinessCardForm() {
  return (
    <div className="container" style={{ width: "60%" }}>
      <form >
        <div className="form-group row">
          <label className="col-sm-2" htmlFor="first_name">
            First Name
          </label>
          <div className="col-sm-10">
            <input
              name="first_name"
              type="text"
              className="form-control"
              id="first_name"
              placeholder="Enter first name"
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2" htmlFor="last_name">
            Last Name
          </label>
          <div className="col-sm-10">
            <input
              name="last_name"
              type="text"
              className="form-control"
              id="last_name"
              placeholder="Enter last name"
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2" htmlFor="job_title">
            Job Title
          </label>
          <div className="col-sm-10">
            <input
              name="job_title"
              type="text"
              className="form-control"
              id="job_title"
              placeholder="Enter job title"
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2" htmlFor="mobile_number">
            Mobile Number
          </label>
          <div className="col-sm-10">
            <input
              name="mobile_number"
              type="tel"
              className="form-control"
              id="mobile_number"
              pattern="[0-9-]+"
              placeholder="xxx-xxx-xxxx"
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2" htmlFor="email">
            Email
          </label>
          <div className="col-sm-10">
            <input
              name="email"
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2" htmlFor="company_name">
            Company Name
          </label>
          <div className="col-sm-10">
            <input
              name="company_name"
              type="text"
              className="form-control"
              id="company_name"
              placeholder="Enter company name"
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2" htmlFor="comments">
            Comments
          </label>
          <div className="col-sm-10">
            <textarea
              name="comments"
              type="number"
              className="form-control"
              id="comments"
              placeholder="Enter comment"
            />
          </div>
        </div>
        <div className="form-group mt-3 mb-4 d-flex justify-content-end">
          <button type="submit" className="btn btn-info mr-3">
            <span className="oi oi-circle-check"></span> Submit
          </button>
          <button
            type="button"
            className="btn btn-secondary"
          >
            <span className="oi oi-circle-x mr-1"></span> Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default BusinessCardForm;
