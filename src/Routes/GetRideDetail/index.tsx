/** @format */

import React, { useState, useEffect } from "react";
import { GET_RIDE_DETAIL } from "./mutations.gql";
import { SIForm } from "../SIForm";
import { DetailContainer } from "../../Components/Container/Container";
import { useQuery } from "@apollo/client";
import LoadingForm from "../../Components/LoadingForm";
import { useParams, useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { goDetail, goBack } from "../../Functions/functions";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

export const GetRideDetail: React.SFC = () => {
	const { id } = useParams();

	const [rideData, setRideData] = useState(null as any);

	const { loading, data } = useQuery(GET_RIDE_DETAIL, {
		variables: { id: Number(id) },
		onCompleted: () => {
			setRideData(data.GetRideDetail.ride);
		},
	});

	useEffect(() => {
		console.log(rideData);
	}, [rideData]);

	const history = useHistory();

	// const aboutCols = ["Ride ID", "Vehicle", "Final Fee", "Accepted", "Finished", "From", "To"];
	// const aboutColsAnswer = [
	// 	`${rideData?.id}`,
	// 	`${rideData?.vehicle.carNumber}, ${rideData?.vehicle.carType}`,
	// 	`${rideData?.finalFee}원`,
	// 	`${rideData?.acceptedDate}`,
	// 	`${rideData?.finishedDate}`,
	// 	`${rideData?.from.address}`,
	// 	`${rideData?.to.address}`,
	// ];

	// const detailCols = ["Passenger", "PhoneNumb", "SurveyComple"];

	// const detailColsAnswer = [`${rideData?.passenger.fullName} (${rideData?.passenger.id})`, `${rideData?.passenger.phoneNumber}`, `${rideData?.surveyCompleted}`];

	return (
		<SIForm>
			{loading ? (
				<LoadingForm />
			) : (
				data &&
				rideData && (
					<DetailContainer>
						<div className="card-wrapper" style={{ display: "flex", justifyContent: "left", marginBottom: "30px" }}>
							<Card style={{ width: "18rem" }}>
								<Image
									roundedCircle
									style={{ width: "18rem", height: "18rem" }}
									src={
										!rideData?.driver.profilePhotoUrl
											? "https://firebasestorage.googleapis.com/v0/b/moby-4febf.appspot.com/o/defaultProfilePhoto.png?alt=media&token=df9090e8-6aff-4a05-9fc7-d9657481fc0e"
											: rideData?.driver.profilePhotoUrl
									}
								/>
								<Card.Body>
									<Card.Title>운전자</Card.Title>
									<Card.Text>{rideData?.driver.fullName}</Card.Text>
									<Button variant="secondary" onClick={() => goDetail(history, "driver", rideData.driver.id)}>
										드라이버 정보
									</Button>
								</Card.Body>
							</Card>

							<Card style={{ width: "18rem", marginLeft: "30px" }}>
								<Image
									roundedCircle
									style={{ width: "18rem", height: "18rem" }}
									src={
										!rideData?.passenger.profilePhotoUrl
											? "https://firebasestorage.googleapis.com/v0/b/moby-4febf.appspot.com/o/defaultProfilePhoto.png?alt=media&token=df9090e8-6aff-4a05-9fc7-d9657481fc0e"
											: rideData?.passenger.profilePhotoUrl
									}
								/>
								<Card.Body>
									<Card.Title>탑승객</Card.Title>
									<Card.Text>{rideData?.passenger.fullName}</Card.Text>
									<Button variant="secondary" onClick={() => goDetail(history, "user", rideData.driver.id)}>
										탑승객 정보
									</Button>
								</Card.Body>
							</Card>
						</div>

						<Form onSubmit={(e) => e.preventDefault()}>
							<Form.Group as={Row} controlId="formHorizontalEmail">
								<Form.Label column sm={2}>
									출발지
								</Form.Label>
								<Col sm={10}>
									<Form.Control readOnly onChange={() => {}} value={rideData.from.address} />
								</Col>
							</Form.Group>

							<Form.Group as={Row} controlId="formHorizontalEmail">
								<Form.Label column sm={2}>
									도착지
								</Form.Label>
								<Col sm={10}>
									<Form.Control readOnly onChange={() => {}} value={rideData.to.address} />
								</Col>
							</Form.Group>

							<Form.Group as={Row} controlId="formHorizontalEmail">
								<Form.Label column sm={2}>
									요청 시각
								</Form.Label>
								<Col sm={10}>
									<Form.Control readOnly onChange={() => {}} value={new Date(Number(rideData.requestedDate)).toLocaleString()} />
								</Col>
							</Form.Group>

							<Form.Group as={Row} controlId="formHorizontalEmail">
								<Form.Label column sm={2}>
									배차 시각
								</Form.Label>
								<Col sm={10}>
									<Form.Control readOnly onChange={() => {}} value={new Date(Number(rideData.acceptedDate)).toLocaleString()} />
								</Col>
							</Form.Group>

							<Form.Group as={Row} controlId="formHorizontalEmail">
								<Form.Label column sm={2}>
									종료 시각
								</Form.Label>
								<Col sm={10}>
									<Form.Control readOnly onChange={() => {}} value={new Date(Number(rideData.finishedDate)).toLocaleString()} />
								</Col>
							</Form.Group>

							<Form.Group as={Row} controlId="formHorizontalEmail">
								<Form.Label column sm={2}>
									설문 완료
								</Form.Label>
								<Col sm={10}>
									<Form.Control readOnly onChange={() => {}} value={rideData.surveyCompleted ? "완료" : "미완료F"} />
								</Col>
							</Form.Group>

							<Form.Group as={Row} controlId="formHorizontalEmail">
								<Form.Label column sm={2}>
									할인 금액
								</Form.Label>
								<Col sm={10}>
									<Form.Control readOnly onChange={() => {}} value={rideData.vehicle.discount} />
								</Col>
							</Form.Group>

							<Form.Group as={Row} controlId="formHorizontalEmail">
								<Form.Label column sm={2}>
									차량 번호
								</Form.Label>
								<Col sm={10}>
									<Form.Control readOnly onChange={() => {}} value={rideData.vehicle.carNumber} />
								</Col>
							</Form.Group>

							<Form.Group as={Row} controlId="formHorizontalEmail">
								<Form.Label column sm={2}>
									설문 회사
								</Form.Label>
								<Col sm={10}>
									<Form.Control readOnly onChange={() => {}} value={rideData.vehicle.company} />
								</Col>
							</Form.Group>
						</Form>

						<Button style={{ marginRight: "20px" }} variant="secondary" onClick={() => goBack(history)}>
							뒤로가기
						</Button>
						<Button style={{ marginRight: "20px" }} variant="danger" onClick={() => {}}>
							삭제하기
						</Button>
					</DetailContainer>
				)
			)}
		</SIForm>
	);
};
