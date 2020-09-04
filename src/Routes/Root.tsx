/** @format */

import * as React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { AdminLogin } from "./Login";
import { SIForm } from "./SIForm";
import EnquiryList from "../Components/EnquiryList";

const token = localStorage.getItem("jwt");

const LoggedIn: React.FC = () => (
  <Switch>
    <Route path={"/"} exact={true} component={SIForm} />
    <Route path={"/faq"} exact={true} component={EnquiryList} />
  </Switch>
);

const LoggedOut: React.FC = () => (
  <Switch>
    <Route path={"/"} exact={true} component={AdminLogin} />
    <Redirect path="*" to="/" />
  </Switch>
);

const Root: React.FC = () => (
  <BrowserRouter>{token ? <LoggedIn /> : <LoggedOut />}</BrowserRouter>
);

export default Root;
