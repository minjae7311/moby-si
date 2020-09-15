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
import { ADD_USER } from "./ mutation.gql";
import { goDetail } from "../../Functions/functions";

export const AddUser: React.SFC = () => {
	const [userData, setUserData] = useState({
		bankAccount: "",
		fullName: "",
		profilePhotoUrl: "",
		phoneNumber: "",
		gender: "",
		pushToken: "",
		birthDate: "",
		job: "",
		deviceId: "",
	});

	const [addUser] = useMutation(ADD_USER, { variables: { ...userData } });

	const history = useHistory();

	const onChange = (event, header) => {
		setUserData({ ...userData, [header]: event.target.value });
	};

	const addThisUser = async () => {
		await addUser().then((result) => {
			console.log(result);
			const { data } = result;
			goDetail(history, "user", data.AddUser.user.id);
		});
	};

	return (
		<SIForm>
			<DetailContainer>
				<Form onSubmit={(e) => e.preventDefault()}>
					<Form.Group as={Row} controlId="formHorizontalEmail">
						<Form.Label column sm={2}>
							bankAccount
						</Form.Label>
						<Col sm={10}>
							<Form.Control
								onChange={(e) => {
									onChange(e, "bankAccount");
								}}
								value={userData.bankAccount}
							/>
						</Col>
					</Form.Group>
					<Form.Group as={Row} controlId="formHorizontalEmail">
						<Form.Label column sm={2}>
							fullName
						</Form.Label>
						<Col sm={10}>
							<Form.Control
								onChange={(e) => {
									onChange(e, "fullName");
								}}
								value={userData.fullName}
							/>
						</Col>
					</Form.Group>
					<Form.Group as={Row} controlId="formHorizontalEmail">
						<Form.Label column sm={2}>
							profilePhotoUrl
						</Form.Label>
						<Col sm={10}>
							<Form.Control
								onChange={(e) => {
									onChange(e, "profilePhotoUrl");
								}}
								value={userData.profilePhotoUrl}
							/>
						</Col>
					</Form.Group>
					<Form.Group as={Row} controlId="formHorizontalEmail">
						<Form.Label column sm={2}>
							phoneNumber
						</Form.Label>
						<Col sm={10}>
							<Form.Control
								onChange={(e) => {
									onChange(e, "phoneNumber");
								}}
								value={userData.phoneNumber}
							/>
						</Col>
					</Form.Group>
					<Form.Group as={Row} controlId="formHorizontalEmail">
						<Form.Label column sm={2}>
							gender
						</Form.Label>
						<Col sm={10}>
							<Form.Control
								onChange={(e) => {
									onChange(e, "gender");
								}}
								value={userData.gender}
							/>
						</Col>
					</Form.Group>
					<Form.Group as={Row} controlId="formHorizontalEmail">
						<Form.Label column sm={2}>
							pushToken
						</Form.Label>
						<Col sm={10}>
							<Form.Control
								onChange={(e) => {
									onChange(e, "pushToken");
								}}
								value={userData.pushToken}
							/>
						</Col>
					</Form.Group>
					<Form.Group as={Row} controlId="formHorizontalEmail">
						<Form.Label column sm={2}>
							birthDate
						</Form.Label>
						<Col sm={10}>
							<Form.Control
								onChange={(e) => {
									onChange(e, "birthDate");
								}}
								value={userData.birthDate}
							/>
						</Col>
					</Form.Group>
					<Form.Group as={Row} controlId="formHorizontalEmail">
						<Form.Label column sm={2}>
							job
						</Form.Label>
						<Col sm={10}>
							<Form.Control
								onChange={(e) => {
									onChange(e, "job");
								}}
								value={userData.job}
							/>
						</Col>
					</Form.Group>
					<Form.Group as={Row} controlId="formHorizontalEmail">
						<Form.Label column sm={2}>
							deviceId{" "}
						</Form.Label>
						<Col sm={10}>
							<Form.Control
								onChange={(e) => {
									onChange(e, "deviceId");
								}}
								value={userData.deviceId}
							/>
						</Col>
					</Form.Group>
					<Button style={{ width: "100%" }} variant="outline-primary" onClick={addThisUser}>
						등록하기
					</Button>
				</Form>
			</DetailContainer>
		</SIForm>
	);
};
