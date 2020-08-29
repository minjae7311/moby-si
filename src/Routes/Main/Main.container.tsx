/** @format */

import React from "react";
import MainPresenter from "./Main.presenter";

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  public render() {
    return <MainPresenter></MainPresenter>;
  }
}

export default MainContainer;
