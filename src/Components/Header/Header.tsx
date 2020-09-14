import * as React from "react";
import LogoutButton from "../LogoutButton/LogoutButton";
import { useHistory } from "react-router-dom";
import { goList } from "../../Functions/functions";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Container } from "../Container/Container";

const Header: React.SFC = () => {
	const history = useHistory();

	return (
		<Container>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Navbar.Brand onClick={() => goList(history, "")}>Moby Admin</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link onClick={() => goList(history, "rides")}>Ride</Nav.Link>
						<Nav.Link onClick={() => goList(history, "users")}>User</Nav.Link>
						<Nav.Link onClick={() => goList(history, "enquiries")}>Enquiry</Nav.Link>
						<Nav.Link onClick={() => goList(history, "drivers")}>Driver</Nav.Link>
						<Nav.Link onClick={() => goList(history, "answeredSurvey")}>Survey / Payback</Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link>
							<LogoutButton />
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</Container>
	);
};
export default Header;
