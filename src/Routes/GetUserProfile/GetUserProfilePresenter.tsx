/** @format */

import * as React from "react";
import GetUserProfile from "../../Components/GetUserProfile/GetUserProfile";

interface IProps {
  fullName: any;
}

const GetUserProfilePresenter: React.SFC<IProps> = ({
  fullName
}) => (
  <GetUserProfile
    fullName={fullName}
  >
  </GetUserProfile>
);

export default GetUserProfilePresenter;
