import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { GET_ENQUIRY_DETAIL, ANSWER_ENQUIRY } from "./mutation.gql";
import { useQuery, useMutation } from "@apollo/client";
import { DetailContainer } from "../../Components/Container/Container";
import LoadingForm from "../../Components/LoadingForm";
import { goBack, goDetail } from "../../Functions/functions";
import { anwserEnquiry_AnswerEnquiry, anwserEnquiryVariables } from "../../types/api";
import { SIForm } from "../SIForm";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";

const EnquiryDetail: React.SFC = () => {
	const { id } = useParams();
	const [enquiryData, setEnquiryData] = useState();

	const { loading, data } = useQuery(GET_ENQUIRY_DETAIL, {
		variables: { id: Number(id) },
		onCompleted: () => {
			setEnquiryData(data.GetEnquiryDetail.enquiry);
		},
	});

	const [anwserEnquiry, { error }] = useMutation<anwserEnquiry_AnswerEnquiry, anwserEnquiryVariables>(ANSWER_ENQUIRY, {
		variables: {
			id,
			...enquiryData,
		},
		onError: () => console.error(error),
	});

	const history = useHistory();

	const answer = async () => {
		const result = await anwserEnquiry()
			.then((res) => alert("completed"))
			.catch((err) => alert(err));
		/**
		 * @todo how to get result.ok
		 */
		console.log(result);
	};

	/**
	 * @todo delete enquiry
	 */
	const deleteEnquiry = () => {};

	const onChange = (event, header) => {
		setEnquiryData({ ...enquiryData, [header]: event.target.value });
	};

	return (
		<SIForm>
			{loading ? (
				<LoadingForm />
			) : (
				data &&
				enquiryData && (
					<DetailContainer>
						<div className="card-wrapper" style={{ display: "flex", justifyContent: "left", marginBottom: "30px" }}>
							<Card style={{ width: "18rem" }}>
								<Image
									roundedCircle
									style={{ width: "18rem", height: "18rem" }}
									src={
										!enquiryData.user.profilePhotoUrl
											? "https://firebasestorage.googleapis.com/v0/b/moby-4febf.appspot.com/o/defaultProfilePhoto.png?alt=media&token=df9090e8-6aff-4a05-9fc7-d9657481fc0e"
											: enquiryData.user.profilePhotoUrl
									}
								/>
								<Card.Body>
									<Card.Title>{enquiryData.user.fullName}</Card.Title>
									<Card.Text>
										{enquiryData.user.gender} / {enquiryData.user.phoneNumber}
									</Card.Text>
									<Button variant="secondary" onClick={() => goDetail(history, "user", enquiryData.user.id)}>
										사용자 정보
									</Button>
								</Card.Body>
							</Card>
						</div>

						<Form onSubmit={(e) => e.preventDefault()}>
							<Form.Group as={Row} controlId="formHorizontalEmail">
								<Form.Label column sm={2}>
									제목
								</Form.Label>
								<Col sm={10}>
									<Form.Control readOnly onChange={() => {}} value={enquiryData.questionTitle} />
								</Col>
							</Form.Group>

							<Form.Group as={Row} controlId="formHorizontalEmail">
								<Form.Label column sm={2}>
									내용
								</Form.Label>
								<Col sm={10}>
									<Form.Control as="textarea" readOnly onChange={() => {}} value={enquiryData.questionContent} />
								</Col>
							</Form.Group>

							<Form.Group as={Row} controlId="formHorizontalEmail">
								<Form.Label column sm={2}>
									답변 제목
								</Form.Label>
								<Col sm={10}>
									<Form.Control onChange={(event) => onChange(event, "answerTitle")} value={enquiryData.answerTitle ? enquiryData.answerTitle : ""} />
								</Col>
							</Form.Group>

							<Form.Group as={Row} controlId="formHorizontalEmail">
								<Form.Label column sm={2}>
									답변 내용
								</Form.Label>
								<Col sm={10}>
									<Form.Control as="textarea" onChange={(event) => onChange(event, "answerContent")} value={enquiryData.answerContent ? enquiryData.answerContent : ""} />
								</Col>
							</Form.Group>
						</Form>

						<Button style={{ marginRight: "20px" }} variant="secondary" onClick={() => goBack(history)}>
							뒤로가기
						</Button>
						<Button style={{ marginRight: "20px" }} variant="success" onClick={answer}>
							답변하기
						</Button>
					</DetailContainer>
				)
			)}
		</SIForm>
	);
};

export default EnquiryDetail;
