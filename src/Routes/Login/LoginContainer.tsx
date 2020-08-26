/** @format */

import React from "react";
import LoginPresenter from "./LoginPresenter";

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {};
  }

  public onInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    console.log(event);
  };

  public render() {
    return (
      <LoginPresenter
        onChange={this.onInputChange}
      ></LoginPresenter>
    );
  }
}

export default LoginContainer;
