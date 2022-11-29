import React, { useState, useEffect } from "react";
import { listBusinesscards } from "../utils/api";
import BusinessCards from "./BusinessCards";
import "./Dashboard.css"

function Dashboard() {
  const [businesscards, setBusinesscards] = useState([]);
  const [businesscardError, setBusinesscardError] = useState(null);

  useEffect(loadDashboard, []);

  function loadDashboard() {
    const abortController = new AbortController();
    setBusinesscardError(null);
    listBusinesscards(abortController.signal)
      .then(setBusinesscards)
      .catch(businesscardError);

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
    <>
      {businesscards.length === 0 && <h4>No businesscards found</h4>}
      <div className="display">{displayBusinessCards}</div>
    </>
  );
}

export default Dashboard;
