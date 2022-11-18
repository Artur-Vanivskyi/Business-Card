import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";


function Routes() {
  return (
    <Switch>
      <Route exact={true} path="/">
        <Redirect to={"/dashboard"} />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default Routes;
