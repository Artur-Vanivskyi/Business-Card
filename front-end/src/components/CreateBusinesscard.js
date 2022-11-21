import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createBusinesscard } from "../utils/api";
import BusinessCardForm from "./BusinessCardForm";
import ErrorAlert from "../layout/ErrorAlert";

function CreateBusinesscard() {
  const initialFormState = {
    first_name: "",
    last_name: "",
    job_title: "",
    mobile_number: "",
    email: "",
    company_name: "",
    comments: "",
  };
  const history = useHistory();
  const [formData, setFormData] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState(null);

  
  const handleChange = ({ target }) => {
    // if(target.name === "first_name") target.value.replace(/[^a-z]/gi, '');
    // const formDataFormated = {...formData, first_name: target.value.replace(/[^a-z]/gi, '')}
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleCancel = () => {
    history.goBack();
  };
  console.log(formData)
  const handleSubmit = (event) => {
    event.preventDefault();
    const abortController = new AbortController();
    createBusinesscard(formData, abortController.signal)
      .then(() => history.push("/dashboard"))

      .catch(setFormErrors);

    return () => abortController.abort();
  };

  const displayFormErrros = formErrors && <ErrorAlert error={formErrors} />;

  return (
    <div>
      <h1>Businesscard</h1>
      
     {displayFormErrros}
      <BusinessCardForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleCancel={handleCancel}
        formData={formData}
      />
    </div>
  );
}

export default CreateBusinesscard;
