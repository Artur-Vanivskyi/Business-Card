import React, { useState } from "react";
import { listBusinesscards } from "../utils/api";
import BusinessCards from "./BusinessCards";
import "./SearchBusinesscard.css";

function SearchBusinesscard() {
  const initialFormState = {
    mobile_number: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [businessacards, setBusinesscards] = useState([]);

  const handleChange = ({ target: { name, value } }) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFind = (event) => {
    event.preventDefault();
    const abortController = new AbortController();
    listBusinesscards(formData, abortController.signal)
      .then(setBusinesscards)
      .catch((error) => console.log(error));

    return () => abortController.abort();
  };

  const displayBusinesscards = businessacards.map((businesscard) => (
    <BusinessCards
      key={businesscard.businesscard_id}
      businesscard={businesscard}
      loadBusinesscards={handleFind}
    />
  ));

  return (
    <div className="pageBody">
      <form className="" onSubmit={handleFind}>
        <div className="inputLine">
          <input
            name="mobile_number"
            type="search"
            id="mobile_number"
            onChange={handleChange}
            value={formData.mobile_number}
            required="required"
          />
          <span>Mobile number</span>
        </div>
        <div className="buttonContainer">
          <button type="submit" className="buttonFind">
            <span className="oi oi-zoom-in"></span> {"\n"} Find
          </button>
        </div>
      </form>
      <div className="showCards">{displayBusinesscards}</div>
    </div>
  );
}

export default SearchBusinesscard;

// switch

// case 1 (phone number)
//form
//handlesubmitPhoneNumber
