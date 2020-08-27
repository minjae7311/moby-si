/** @format */

import * as React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "./Login";
import SIForm from "./SIForm";
import GetInterests from "./GetInterests";

const Root: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/SIForm" exact component={SIForm} />
      <Route path="/GetInterests" exact component={GetInterests} />
      <Redirect path="*" to="/" />
    </Switch>
  </BrowserRouter>
);

export default Root;
