import React, { useState } from "react";
import { listBusinesscards } from "../utils/api";
import BusinessCards from "./BusinessCards";

function SearchBusinesscard() {
  const initialFormState = {
    first_name: "",
   
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
    <>
      <form
        className="form-inline d-flex justify-content-center mt-5"
        onSubmit={handleFind}
      >
        <div className="form-group mx-sm-3 mb-2">
            <label>
                <select
                id=""
                name=""
                onChange={handleChange}
                >
                <option value="first_name">First Name</option>
                <option value="mobile_number">Mobile Number</option>
                </select>
            </label>
         
          <input
            name="mobile_number"
            type="search"
            className="form-control"
            id="mobile_number"
            onChange={handleChange}
            value={formData.first_name}
          />
        </div>
        <button type="submit" className="btn btn-info mb-2">
          <span className="oi oi-zoom-in"></span> {"\n"} Find
        </button>
      </form>
      <div>{displayBusinesscards}</div>
    </>
  );
}

export default SearchBusinesscard;

// switch 

// case 1 (phone number)
  //form 
  //handlesubmitPhoneNumber