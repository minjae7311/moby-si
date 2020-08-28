/** @format */

import React from "react";
import { GET_INTEREST } from "./GetInterestMutations";
import {
  GetAllInterest
} from "../../types/api";
import { Query } from "react-apollo";
import GetInterestPresenter from "./GetInterestPresenter";

class GetInterestContainer extends React.Component{
  state:{}
   constructor(props) {
    super(props);
    this.state = { 
    };
  }

  public render() {
    return (
      <Query<GetAllInterest> query={GET_INTEREST}>
        {({data}) => {
          const GetInterest = data?.GetAllInterests.interests
          return (
            <GetInterestPresenter
              getInterest = {GetInterest}
            >
            </GetInterestPresenter>
          )
        }}
      </Query>
    );
  }
}

export default GetInterestContainer;
