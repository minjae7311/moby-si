/** @format */

import * as React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { AdminLogin } from "./Login";
import { SIForm } from "./SIForm";
import UserList from "./UserList";
import UserDetail from "./UserDetail";
import EnquiryList from "./EnquiryList";
import EnquiryDetail from "./EnquiryDetail";
import AnsweredSurveyList from "./AnsweredSurveyList";
import Download from "../Components/ExcelSample/Excel";

const token = localStorage.getItem("jwt");

const LoggedIn: React.FC = () => (
  <Switch>
    <Route path={"/"} exact={true} component={SIForm} />
    <Route path={"/enquiries"} exact={true} component={EnquiryList} />
    <Route path={"/enquiry/:id"} exact={true} component={EnquiryDetail} />
    <Route path={"/users"} exact={true} component={UserList} />
    <Route path={"/user/:id"} exact={true} component={UserDetail} />
    <Route
      path={"/answeredSurvey"}
      exact={true}
      component={AnsweredSurveyList}
    />
    <Route path={"/download"} exact={true} component={Download} />
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
