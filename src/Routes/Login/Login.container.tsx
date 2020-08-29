/** @format */

import React from "react";
import LoginPresenter from "./Login.presenter";
import { RouteComponentProps } from "react-router-dom";
import { Mutation } from "react-apollo";
import { LOGIN_MUTATION } from "./Login.mutations";
import { adminLoginVariables, adminLogin } from "../../types/api";
import { LOG_USER_IN } from "../../loginMutation.local";

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

    if (!props.location.state) {
      props.history.push("/");
    }

    this.onChange = this.onChange.bind(this);
  }

  public onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const {
      target: { name, value },
    } = event;
    this.setState({ [name]: value } as any);
  };

  public render() {
    return (
      // <Mutation
      //   mutation={LOG_USER_IN}
      //   onCompleted={() => console.log("LOGINNN")}
      //   onError={(error) => console.log("LOGIN ERROR", error)}
      // >
      //   {(logUserIn) => (
      <Mutation<adminLogin, adminLoginVariables>
        mutation={LOGIN_MUTATION}
        variables={{
          loginId: this.state.inputId,
          loginPw: this.state.inputPw,
        }}
        onCompleted={(data) => {
          const { AdminLogin } = data;

          if (AdminLogin.ok) {
            if (AdminLogin.token) {
              console.log(AdminLogin.token);
              // logUserIn({
              //   variables: {
              //     token: AdminLogin.token,
              //   },
              // });
            }
          } else {
            console.error("Login failed:", AdminLogin.error);
          }
        }}
        onError={(error) => {
          console.error(error);
        }}
      >
        {(mutation, { loading }) => {
          return (
            <LoginPresenter
              idValue={this.state.inputId}
              pwValue={this.state.inputPw}
              onChange={this.onChange}
              // onSubmit={mutation}
              onClick={mutation}
            ></LoginPresenter>
          );
        }}
      </Mutation>
    );
  }
  // </Mutation>
  // );
  // }
}

export default LoginContainer;
