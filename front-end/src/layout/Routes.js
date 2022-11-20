import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";
import BusinessCardForm from "../components/BusinessCardForm";
import Dashboard from "../components/Dashboard";
import BusinessCards from "../components/BusinessCards";

function Routes() {
  return (
    <Switch>
      <Route exact={true} path="/">
        <Redirect to={"/dashboard"} />
      </Route>
      <Route path="/businesscard/new">
        <BusinessCardForm />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/test">
        <BusinessCards />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default Routes;
