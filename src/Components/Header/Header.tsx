/** @format */

import * as React from "react";
import LogoutButton from "../LogoutButton/LogoutButton";
import { Link } from "react-router-dom";

const style: React.CSSProperties = {
	width: "98%",
	border: "solid 1px #ccc",
	margin: "1%",
	borderRadius: "4px",
	display: "flow-root",
};

const list: React.CSSProperties = {
	padding: "10px",
	borderRight: "1px solid #ddd",
	marginTop: 10,
};

const Header: React.SFC = () => {
	return (
		<div>
			<LogoutButton />
			<div style={style}>
				<h1 style={{ marginLeft: "1%" }}>SIForm</h1>
				<ul
					style={{
						listStyle: "none",
						paddingLeft: "0",
						display: "flex",
					}}>
					<Link to="/rides">
						<li style={list}>Ride</li>
					</Link>
					<Link to="/users">
						<li style={list}>User</li>
					</Link>
					<Link to="/enquiries">
						<li style={list}>Enquiry</li>
					</Link>
					<Link to="/drivers">
						<li style={list}>Driver</li>
					</Link>
					<Link to="/answeredSurvey">
						<li style={list}>Survey / Payback</li>
					</Link>
				</ul>
			</div>
		</div>
	);
};
export default Header;
