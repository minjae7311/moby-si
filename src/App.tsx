/** @format */

import React from "react";
import "./App.css";
import Root from "./Routes/Root";
import { graphql } from "react-apollo";
import { IS_LOGGED_IN } from "./App.queries.local";

const App: any = ({ data }) => {
  // const App = () => {
  return (
    <React.Fragment>
      <Root isLoggedIn={data.auth.isLoggedIn} />
      {/* <Root /> */}
    </React.Fragment>
  );
};

export default graphql(IS_LOGGED_IN)(App);
