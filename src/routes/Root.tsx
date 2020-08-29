/** @format */

import * as React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { AdminLogin } from "./Login";

const Root: React.SFC = () => (
  // const Root: React.SFC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={AdminLogin} />
      <Redirect path="*" to="/" />
    </Switch>
  </BrowserRouter>
);

export default Root;
