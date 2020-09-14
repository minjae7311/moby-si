/** @format */

import * as React from "react";
import LogoutButton from "../LogoutButton/LogoutButton";
import { useHistory } from "react-router-dom";
import { goList } from "../../Functions/functions";

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
	cursor: "pointer",
};

const Header: React.SFC = () => {
	const history = useHistory();

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
					<li style={list} onClick={() => goList(history, "rides")}>
						Ride
					</li>
					<li style={list} onClick={() => goList(history, "users")}>
						User
					</li>
					<li style={list} onClick={() => goList(history, "enquiries")}>
						Enquiry
					</li>
					<li style={list} onClick={() => goList(history, "drivers")}>
						Driver
					</li>
					<li style={list} onClick={() => goList(history, "answeredSurvey")}>
						Survey / Payback
					</li>
				</ul>
			</div>
		</div>
	);
};
export default Header;
