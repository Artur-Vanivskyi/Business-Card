import React from "react";
import "./BusinessCardForm.css";

function BusinessCardForm({
  handleSubmit,
  handleChange,
  handleCancel,
  formData,
}) {
  return (
    <form className="body" onSubmit={handleSubmit}>
      <div className="inputBox">
        <input
          name="first_name"
          type="name"
          id="first_name"
          //autoFocus="on"
          //placeholder="Enter first name"
          pattern="[A-Za-z]*"
          onChange={handleChange}
          value={formData.first_name}
          required="required"
        />
        <span>First Name</span>
      </div>

      <div className="inputBox">
        <input
          name="last_name"
          type="text"
          id="last_name"
          //placeholder="Enter last name"
          onChange={handleChange}
          value={formData.last_name}
          required="required"
        />
        <span>Last Name</span>
      </div>

      <div className="inputBox">
        <input
          name="job_title"
          type="text"
          id="job_title"
          // placeholder="Enter job title"
          onChange={handleChange}
          value={formData.job_title}
          required="required"
        />
        <span>Job Title</span>
      </div>

      <div className="inputBox">
        <input
          name="mobile_number"
          type="tel"
          id="mobile_number"
          pattern="[0-9-]+"
          maxLength="12"
          //placeholder="xxx-xxx-xxxx"
          onChange={handleChange}
          value={formData.mobile_number}
          required="required"
        />
        <span>Mobile Number</span>
      </div>

      <div className="inputBox">
        <input
          name="email"
          type="email"
          id="email"
          // placeholder="Enter email"
          onChange={handleChange}
          value={formData.email}
          required="required"
        />
        <span>Email</span>
      </div>

      <div className="inputBox">
        <input
          name="company_name"
          type="text"
          id="company_name"
          // placeholder="Enter company name"
          onChange={handleChange}
          value={formData.company_name}
          required="required"
        />
        <span>Company Name</span>
      </div>

      <div className="inputBox">
        <textarea
          name="comments"
          type="number"
          id="comments"
          //placeholder="Enter comment"
          onChange={handleChange}
          value={formData.comments}
        />
        <span>Comments</span>
      </div>

      <div className="buttonContainer">
        <button type="submit" className="button">
          Submit
        </button>
        <button type="button" className="button" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default BusinessCardForm;
