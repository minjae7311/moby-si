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
import { ADD_COUPON } from "./mutation.gql";
import { goBack } from "../../Functions/functions";

export const AddCoupon: React.SFC = () => {
	const [couponData, setCouponData] = useState({
		code: "",
		expiry: "",
	});

	const [addCoupon] = useMutation(ADD_COUPON, { variables: { ...couponData } });

	const history = useHistory();

	const onChange = (event, header) => {
		setCouponData({ ...couponData, [header]: event.target.value });
	};

	const addThisCoupon = async () => {
		await addCoupon().then((result) => {
			console.log(result);
			alert("completed");
			goBack(history);
		});
	};

	return (
		<SIForm>
			<DetailContainer>
				<Form onSubmit={(e) => e.preventDefault()}>
					{Object.keys(couponData).map((key, index) => {
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
										value={couponData[key]}
										placeholder={key === "code" ? "미 입력시 랜덤 생성" : ""}
										type={key === "expiry" ? "date" : "text"}
									/>
								</Col>
							</Form.Group>
						);
					})}

					<Button style={{ width: "100%" }} variant="outline-primary" onClick={addThisCoupon}>
						등록하기
					</Button>
				</Form>
			</DetailContainer>
		</SIForm>
	);
};
