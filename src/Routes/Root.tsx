/** @format */

import * as React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
// import Login from "./Login";
import SIForm from "./SIForm";
import GetUserProfile from "./GetUserProfile";
import GetInterest from "./GetInterest";

const Root: React.FC = () => (
  <BrowserRouter>
    <Switch>
      {/* <Route path="/" exact component={Login} /> */}
      <Route path="/SIForm" exact component={SIForm} />
      <Route path="/GetUserProfile" exact component={GetUserProfile} />
      <Route path="/GetInterest" exact component={GetInterest} />
      <Redirect path="*" to="/" />
    </Switch>
  </BrowserRouter>
);

export default Root;
