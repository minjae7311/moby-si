/** @format */

import React from "react";
import "./App.css";
import Root from "./Routes/Root";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

const IS_LOGGED_IN = gql`
  {
    auth {
      isLoggedIn @client
    }
  }
`;

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
