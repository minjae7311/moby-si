import React from "react";
import Spinner from "react-bootstrap/Spinner";

const LoadingForm: React.SFC = () => {
	return (
		<div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "50vh" }}>
			<Spinner animation="border" role="status">
				<span className="sr-only">Loading...</span>
			</Spinner>
		</div>
	);
};

export default LoadingForm;
