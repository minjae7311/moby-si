/** @format */

import React from "react";
import LoginPresenter from "./LoginPresenter";
import { RouteComponentProps } from "react-router-dom";
import { Mutation } from "react-apollo";
import { TEST_MUTATION } from "./LoginMutations";
import { TestMutation_TestMutation, TestMutation } from "../../types/api";

interface IState {
  inputId: string;
  inputPw: string;
}

// 이게 있어야 readonly 에러 안난다.
interface IProps extends RouteComponentProps<any> {
  location: any;
  history: any;
}

class LoginContainer extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { inputId: "", inputPw: "" };

    this.onChange = this.onChange.bind(this);
  }

  public onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const {
      target: { name, value },
    } = event;
    this.setState({ [name]: value } as any);
  };

  // public onSubmit: React.ChangeEventHandler<HTMLFormElement> = (event) => {
  //   event.preventDefault();
  // };

  public render() {
    // const { inputId, inputPw } = this.state;

    return (
      <Mutation mutation={TEST_MUTATION}>
        {() => (
          <Mutation<TestMutation_TestMutation, TestMutation>
            mutation={TEST_MUTATION}
            onCompleted={(data) => {
              console.log(data);
            }}
          >
            {(mutation, { loading }) => {
              // eslint-disable-next-line
              const onSumbit: React.FormEventHandler<HTMLFormElement> = (
                event
              ) => {
                event.preventDefault();
                mutation();
              };

              return (
                <LoginPresenter
                  idValue={this.state.inputId}
                  pwValue={this.state.inputPw}
                  onChange={this.onChange}
                  onSubmit={mutation}
                ></LoginPresenter>
              );
            }}
          </Mutation>
        )}
      </Mutation>
    );
  }
}

export default LoginContainer;
