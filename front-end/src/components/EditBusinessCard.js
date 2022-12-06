import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import BusinessCardForm from "./BusinessCardForm";
import { editBusinesscard, readBusinesscard } from "../utils/api";

function EditBusinessCard() {
  const history = useHistory();
  const { businesscard_id } = useParams();
  const initialFormState = {
    first_name: "",
    last_name: "",
    job_title: "",
    mobile_number: "",
    email: "",
    company_name: "",
    comments: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState(null);

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleCancel = () => {
    history.goBack();
  };

  useEffect(() => {
    async function loadBusinesscards() {
      const abortController = new AbortController();
      try {
        const businesscard = await readBusinesscard(
          businesscard_id,
          abortController.signal
        );
        setFormData(businesscard);
      } catch (error) {
        setFormErrors(error);
      }

      return () => abortController.abort();
    }
    loadBusinesscards();
  }, [businesscard_id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const abortController = new AbortController();
    editBusinesscard(formData, businesscard_id, abortController.signal)
      .then(() => history.push(`/dashboard`))
      .catch(setFormErrors);

    return () => abortController.abort();
  };

  return (
    <div>
      <BusinessCardForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleCancel={handleCancel}
        formData={formData}
      />
    </div>
  );
}

export default EditBusinessCard;
