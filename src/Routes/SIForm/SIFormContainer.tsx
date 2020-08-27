/** @format */

import React from "react";
import SIFormPresenter from "./SIFormPresenter";

class SIFormContainer extends React.Component{
  constructor(props) {
    super(props);
    this.state = { 
    };
  }

  public render() {
    return (
      <SIFormPresenter
      ></SIFormPresenter>
    );
  }
}

export default SIFormContainer;
