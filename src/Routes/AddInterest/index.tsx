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
import { ADD_INTEREST } from "./mutation.gql";
import { goDetail, goBack } from "../../Functions/functions";

export const AddInterest: React.SFC = () => {
	const [interestData, setInterestData] = useState({
		name: "",
	});

	const [addInterest] = useMutation(ADD_INTEREST, { variables: { ...interestData } });

	const history = useHistory();

	const onChange = (event, header) => {
		setInterestData({ ...interestData, [header]: event.target.value });
	};

	const addThisInterest = async () => {
		await addInterest().then((result) => {
			console.log(result);
			const { data } = result;
			alert("completed");
			goBack(history);
		});
	};

	return (
		<SIForm>
			<DetailContainer>
				<Form onSubmit={(e) => e.preventDefault()}>
					{Object.keys(interestData).map((key, index) => {
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
										value={interestData[key]}
									/>
								</Col>
							</Form.Group>
						);
					})}

					<Button style={{ width: "100%" }} variant="outline-primary" onClick={addThisInterest}>
						등록하기
					</Button>
				</Form>
			</DetailContainer>
		</SIForm>
	);
};
