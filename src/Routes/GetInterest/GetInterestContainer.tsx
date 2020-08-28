/** @format */

import React from "react";
import { GET_INTEREST } from "./GetInterestMutations";
import {
  GetAllInterest
} from "../../types/api";
import { Query } from "react-apollo";
import GetInterestPresenter from "./GetInterestPresenter";

class GetInterestContainer extends React.Component{
  state:{page: number;}
   constructor(props) {
    super(props);
    this.state = {
      page: 1, 
    };
  }

  public PageChange: React.ChangeEventHandler = (event) => {
    this.setState({page : event})
  };

  public render() {
    return (
      <Query<GetAllInterest> query={GET_INTEREST}>
        {({data}) => {
          const GetInterest = data?.GetAllInterests.interests
          return (
            <GetInterestPresenter
              getInterest = {GetInterest}
              page = {this.state.page}
              PageChange = {this.PageChange}
            >
            </GetInterestPresenter>
          )
        }}
      </Query>
    );
  }
}

export default GetInterestContainer;
