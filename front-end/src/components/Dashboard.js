import "./Dashboard.css"
import React, { useState, useEffect } from "react";
import { listBusinesscards } from "../utils/api";
import BusinessCards from "./BusinessCards";


function Dashboard() {
  const [businesscards, setBusinesscards] = useState([]);
  const [businesscardError, setBusinesscardError] = useState(null);

  useEffect(loadDashboard, []);

  function loadDashboard() {
    const abortController = new AbortController();
    setBusinesscardError(null);
    listBusinesscards(abortController.signal)
      .then(setBusinesscards)
      .catch(setBusinesscardError);

    return () => abortController.abort();
  }

  const displayBusinessCards = businesscards.map((businesscard) => (
    <BusinessCards
      key={businesscard.businesscard_id}
      businesscard={businesscard}
      loadBusinesscards={loadDashboard}
    />
  ));

  return (
    
      <div className="display">{displayBusinessCards}</div>
    
  );
}

export default Dashboard;
