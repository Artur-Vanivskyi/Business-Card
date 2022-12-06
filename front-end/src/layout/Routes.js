import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";
import Dashboard from "../components/Dashboard";
import CreateBusinesscard from "../components/CreateBusinesscard";
import EditBusinessCard from "../components/EditBusinessCard";
import SearchBusinesscard from "../components/SearchBusinesscard";
import Home from "../components/Home";

function Routes() {
  return (
    <Switch>
      <Route exact={true} path="/">
        <Redirect to={"/home"} />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/businesscards/new">
        <CreateBusinesscard />
      </Route>
      <Route path="/businesscards/:businesscard_id/edit">
        <EditBusinessCard />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/search">
        <SearchBusinesscard />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default Routes;
