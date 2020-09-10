/** @format */

import * as React from "react";

import Main from "../../Components/Main/Main";
import Header from "../../Components/Header/Header";
import Layout from "../../Components/Header/Layout";

export const SIForm: React.SFC = (props) => {
  return (
    <div>
      <Header></Header>
      <Layout>{props.children}</Layout>
    </div>
  );
};
