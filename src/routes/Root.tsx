/** @format */

import * as React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
// import { AdminLogin } from "./Login";
import { SIForm } from "./SIForm";

const Root: React.FC = () => (
  <BrowserRouter>
    <Switch>
      {/* <Route path="/" exact component={AdminLogin} /> */}
      <Route path="/SIForm" exact component={SIForm} />
      <Redirect path="*" to="/" />
    </Switch>
  </BrowserRouter>
);

export default Root;
