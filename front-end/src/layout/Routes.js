import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";
import Dashboard from "../components/Dashboard";
import CreateBusinesscard from "../components/CreateBusinesscard";
import EditBusinessCard from "../components/EditBusinessCard";


function Routes() {
  return (
    <Switch>
      <Route exact={true} path="/">
        <Redirect to={"/dashboard"} />
      </Route>
      <Route path="/businesscards/new">
        <CreateBusinesscard/>
      </Route>
      <Route path="/businesscards/:businesscard_id/edit">
        <EditBusinessCard/>
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default Routes;
