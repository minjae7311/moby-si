/** @format */

import React from "react";
import { GET_PROFILE } from "./GetUserProfileMutations";
import {
  GetUserProfiles
} from "../../types/api";
import { Query } from "react-apollo";
import GetUserProfilePresenter from "./GetUserProfilePresenter";

class GetUserProfileContainer extends React.Component{
  state:{}
   constructor(props) {
    super(props);
    this.state = { 
    };
  }

  public render() {
    return (
      <Query<GetUserProfiles> query={GET_PROFILE}>
        {({data}) => {
          const ProfilePhotoUrl = data?.GetUserProfile.user?.profilePhotoUrl;
          const Profile = data?.GetUserProfile.user;
          const fullName = data?.GetUserProfile.user?.fullName
          const job = data?.GetUserProfile.user?.job;
          const gender = data?.GetUserProfile.user?.gender;
          const birthDate =data?.GetUserProfile.user?.birthDate;
          return (
            <GetUserProfilePresenter
              fullName={fullName}
            >
            </GetUserProfilePresenter>
          )
        }}
      </Query>
    );
  }
}

export default GetUserProfileContainer;
