/** @format */

import * as React from "react";
import GetInterest from "../../Components/GetInterest/GetInterest";

interface IProps {
  getInterest: any;
  page: number;
  PageChange: any;
}

const GetInterestPresenter: React.SFC<IProps> = ({
  getInterest,
  page,
  PageChange
}) => (
  <GetInterest
    getInterest={getInterest}
    page={page}
    PageChange={PageChange}
  >
  </GetInterest>
);

export default GetInterestPresenter;
