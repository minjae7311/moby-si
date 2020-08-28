/** @format */

import * as React from "react";
import GetInterest from "../../Components/GetInterest/GetInterest";

interface IProps {
  getInterest: any;
}

const GetInterestPresenter: React.SFC<IProps> = ({
  getInterest
}) => (
  <GetInterest
    getInterest={getInterest}
  >
  </GetInterest>
);

export default GetInterestPresenter;
