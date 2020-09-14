import React from "react";
import Button from "react-bootstrap/Button";

const LogoutButton: React.FC = () => {
	return (
		<Button
			variant="outline-secondary"
			onClick={() => {
				localStorage.removeItem("jwt");
				window.location.href = "/";
			}}>
			LOGOUT
		</Button>
	);
};

export default LogoutButton;
