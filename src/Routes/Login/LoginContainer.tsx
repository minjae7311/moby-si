/** @format */

import React from "react";
import LoginPresenter from "./LoginPresenter";
import { RouteComponentProps } from "react-router-dom";

interface IState {
  inputId: string;
  inputPw: string;
}

interface IProps extends RouteComponentProps<any> {
  // 이게 있어야 readonly 에러 안난다.
  location: any;
  history: any;
}

class LoginContainer extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { inputId: "", inputPw: "" };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  public onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const {
      target: { name, value },
    } = event;
    this.setState({ [name]: value } as any);
  };

  public onSubmit: React.ChangeEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  public render() {
    return (
      <LoginPresenter
        idValue={this.state.inputId}
        pwValue={this.state.inputPw}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
      ></LoginPresenter>
    );
  }
}

export default LoginContainer;
