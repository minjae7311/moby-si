/** @format */

import * as React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "./Login";
import Main from "./Main";

interface IProps {
  isLoggedIn: boolean;
}

const Root: React.SFC<IProps> = ({ isLoggedIn }) => (
  // const Root: React.SFC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={isLoggedIn ? Main : Login} />
      {/* <Route path="/" exact component={Login} /> */}
      <Redirect path="*" to="/" />
    </Switch>
  </BrowserRouter>
);

export default Root;
