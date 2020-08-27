/** @format */

import React from "react";
import GetInterestsPresenter from "./GetInterestsPresenter";

class GetInterestsContainer extends React.Component{
  constructor(props) {
    super(props);
    this.state = { 
    };
  }

  public render() {
    return (
      <GetInterestsPresenter
      ></GetInterestsPresenter>
    );
  }
}

export default GetInterestsContainer;
