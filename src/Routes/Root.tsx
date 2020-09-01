/** @format */

import * as React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
// import { AdminLogin } from "./Login";
import {SIForm} from "./SIForm";
import {GetInterests} from "./GetInterest";
import {GetUsers} from "./GetUser";

const Root: React.FC = () => (
  <BrowserRouter>
    <Switch>
      {/* <Route path="/" exact component={AdminLogin} /> */}
      <Route path="/SIForm" exact component={SIForm} />
      <Route path="/SIForm/GetInterest" exact component={GetInterests} />
      <Route path="/SIForm/GetUser" exact component={GetUsers} />
      <Redirect path="*" to="/" />
    </Switch>
  </BrowserRouter>
);

export default Root;
