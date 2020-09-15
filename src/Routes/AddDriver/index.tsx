import * as React from "react";
import { SIForm } from "../SIForm";
import { DetailContainer } from "../../Components/Container/Container";
import { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_DRIVER } from "./mutation.gql";
import { goDetail } from "../../Functions/functions";

export const AddDriver: React.SFC = () => {
	const [driverData, setDriverData] = useState({
		// lat: 0,
		// lng: 0,
		loginId: "",
		loginPw: "",
		company: "",
		driveLicenseNumber: "",
		taxiLicenseNumber: "",
		fullName: "",
		profilePhotoUrl: "",
		phoneNumber: "",
		gender: "",
		birthDate: "",
	});

	const [addDriver] = useMutation(ADD_DRIVER, { variables: { ...driverData } });

	const history = useHistory();

	const onChange = (event, header) => {
		setDriverData({ ...driverData, [header]: event.target.value});
	};

	const addThisDriver = async () => {
		await addDriver().then((result) => {
			console.log(result);
			const { data } = result;
			goDetail(history, "driver", data.AddDriver.driver.id);
		});
	};

	return (
		<SIForm>
			<DetailContainer>
				<Form onSubmit={(e) => e.preventDefault()}>
					{Object.keys(driverData).map((key, index) => {
						return (
							<Form.Group as={Row} controlId="formHorizontalEmail" key={index}>
								<Form.Label column sm={2}>
									{key}
								</Form.Label>
								<Col sm={10}>
									<Form.Control
										onChange={(e) => {
											onChange(e, key);
										}}
										value={driverData[key]}
									/>
								</Col>
							</Form.Group>
						);
					})}

					<Button style={{ width: "100%" }} variant="outline-primary" onClick={addThisDriver}>
						등록하기
					</Button>
				</Form>
			</DetailContainer>
		</SIForm>
	);
};
