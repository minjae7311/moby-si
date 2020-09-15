/** @format */

import * as React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { AdminLogin } from "./Login";
import { SIForm } from "./SIForm";
import UserList from "./UserList";
import UserDetail from "./UserDetail";
import EnquiryList from "./EnquiryList";
import EnquiryDetail from "./EnquiryDetail";
import AnsweredSurveyList from "./AnsweredSurveyList";
import DriverList from "./DriverList";
import DriverDetail from "./DriverDetail";
import { GetRideList } from "./GetRideList";
import { GetRideDetail } from "./GetRideDetail";
import { AddUser } from "./AddUser";
import { AddDriver } from "./AddDriver";
import { AddInterest } from "./AddInterest";
import { AddCoupon } from "./AddCoupon";

const token = localStorage.getItem("jwt");

const LoggedIn: React.FC = () => (
	<Switch>
		<Route path={"/"} exact={true} component={SIForm} />
		<Route path={"/enquiries"} exact={true} component={EnquiryList} />
		<Route path={"/enquiry/:id"} exact={true} component={EnquiryDetail} />
		<Route path={"/users"} exact={true} component={UserList} />
		<Route path={"/user/:id"} exact={true} component={UserDetail} />
		<Route path={"/drivers"} exact={true} component={DriverList} />
		<Route path={"/driver/:id"} exact={true} component={DriverDetail} />
		<Route path={"/answeredSurvey"} exact={true} component={AnsweredSurveyList} />
		<Route path={"/rides"} exact={true} component={GetRideList} />
		<Route path={"/ride/:id"} exact={true} component={GetRideDetail} />
		<Route path={"/addNewUser"} exact={true} component={AddUser} />
		<Route path={"/addNewDriver"} exact={true} component={AddDriver} />
		<Route path={"/addNewInterest"} exact={true} component={AddInterest} />
		<Route path={"/addNewCoupon"} exact={true} component={AddCoupon} />
	</Switch>
);

const LoggedOut: React.FC = () => (
	<Switch>
		<Route path={"/"} exact={true} component={AdminLogin} />
		<Redirect path="*" to="/" />
	</Switch>
);

const Root: React.FC = () => <BrowserRouter>{token ? <LoggedIn /> : <LoggedOut />}</BrowserRouter>;

export default Root;
