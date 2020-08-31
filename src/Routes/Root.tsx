/** @format */

import * as React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
// import { AdminLogin } from "./Login";
import SIForm from "./SIForm";
import {GetInterests} from "./GetInterest";

const Root: React.FC = () => (
  <BrowserRouter>
    <Switch>
      {/* <Route path="/" exact component={AdminLogin} /> */}
      <Redirect path="*" to="/" />
      <Route path="/SIForm" exact component={SIForm} />
      <Route path="/GetInterest" exact component={GetInterests} />
    </Switch>
  </BrowserRouter>
);

export default Root;
