import React from "react";

function BusinessCardForm({
  handleSubmit,
  handleChange,
  handleCancel,
  formData,
}) {
  return (
    <div className="container" style={{ width: "60%" }}>
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <label className="col-sm-2" htmlFor="first_name">
            First Name
          </label>
          <div className="col-sm-10">
            <input
              name="first_name"
              type="name"
              className="form-control"
              id="first_name"
              autoFocus="on"
              placeholder="Enter first name"
              pattern="[A-Za-z]*"
              onChange={handleChange}
              value={formData.first_name}
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
              onChange={handleChange}
              value={formData.last_name}
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
              onChange={handleChange}
              value={formData.job_title}
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
              maxLength="12"
              placeholder="xxx-xxx-xxxx"
              onChange={handleChange}
              value={formData.mobile_number}
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
              onChange={handleChange}
              value={formData.email}
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
              onChange={handleChange}
              value={formData.company_name}
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
              onChange={handleChange}
              value={formData.comments}
            />
          </div>
        </div>
        <div className="form-group mt-3 mb-4 d-flex justify-content-end">
          <button type="submit" className="btn btn-info mr-3">
            <span className="oi oi-circle-check"></span> Submit
          </button>
          <button type="button" className="btn btn-secondary" onClick={handleCancel}>
            <span className="oi oi-circle-x mr-1"></span> Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default BusinessCardForm;
