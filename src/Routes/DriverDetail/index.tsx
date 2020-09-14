import React, { useState } from "react";
import { DetailContainer } from "../../Components/Container/Container";
import { useParams, useHistory } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { GET_DRIVER_DETAIL, APPROVE_DRIVER, DELTE_DRIVER, UPDATE_DRIVER_DATA, UPDATE_VEHICLE } from "./mutations.gql";
import LoadingForm from "../../Components/LoadingForm";
import { SIForm } from "../SIForm";
import { goBack, goDetail } from "../../Functions/functions";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import styled from "../../typed-components";

const H1 = styled.h1`
	margin-top: 20px;
`;

const DriverDetail: React.SFC = () => {
	const { id } = useParams();
	const [driverData, setDriverData] = useState();
	const [isEditing, setIsEditing] = useState(false);

	const history = useHistory();

	const { loading, data } = useQuery(GET_DRIVER_DETAIL, {
		variables: { id: Number(id) },
		onCompleted: () => {
			const drivedMinute = new Date(
				data.GetDriverDetail.driver.rides.reduce((acc, ride) => {
					if (ride.status === "FINISHED") {
						acc += (ride.finishedDate - ride.acceptedDate) / 60;
					}

					return acc;
				}, 0)
			).getMinutes();

			setDriverData({
				...driverData,
				drivedMinute,
			});

			setDriverData({ ...data.GetDriverDetail.driver, drivedMinute });
			setVehicleData(data.GetDriverDetail.driver.vehicle);
		},
	});

	const [updateDriverData, { error }] = useMutation(UPDATE_DRIVER_DATA, {
		variables: { data: driverData },
		onError: () => console.error(error),
	});

	const [deleteDriver] = useMutation(DELTE_DRIVER, {
		variables: { driverId: Number(id) },
		onError: (error) => console.log(error),
	});

	const [approveDriver] = useMutation(APPROVE_DRIVER, {
		variables: { driverId: Number(id) },
		onError: (error) => console.log(error),
	});

	const editDriver = () => {
		console.log(driverData);
		setIsEditing(true);
	};

	const confirmEdit = async () => {
		console.log("confirmEdit");

		console.log(vehicleData);

		await Promise.all([updateDriverData(), updateVehicle()])
			.then((res) => {
				alert("completed");
			})
			.catch((err) => alert(err));

		setIsEditing(false);
	};

	const deleteThisDriver = async () => {
		await deleteDriver()
			.then((res) => {
				alert("completed");
				goBack(history);
			})
			.catch((err) => alert(err));
	};

	const approveThisDriver = async () => {
		await approveDriver()
			.then((res) => {
				alert("completed");
			})
			.catch((err) => alert(err));

		setDriverData({ ...driverData, accepted: true });
	};

	const onChange = (event, header) => {
		setDriverData({ ...driverData, [header]: event.target.value });
	};

	/********** @VEHICLE **********/
	const [vehicleData, setVehicleData] = useState();
	const [updateVehicle] = useMutation(UPDATE_VEHICLE, {
		variables: { data: vehicleData },
		onError: (error) => console.log(error),
	});
	// UpdateVehicle
	const vehicleOnChange = (event, header) => {
		setVehicleData({ ...vehicleData, [header]: event.target.value });
		console.log(vehicleData);
		setDriverData({ ...driverData, vehicle: vehicleData });
	};

	return (
		<SIForm>
			{loading ? (
				<LoadingForm />
			) : (
				data &&
				driverData && (
					<DetailContainer>
						<Button style={{ marginRight: "20px" }} variant="secondary" onClick={() => goBack(history)}>
							뒤로가기
						</Button>
						<Button style={{ marginRight: "20px" }} variant="warning" onClick={isEditing ? confirmEdit : editDriver}>
							{isEditing ? "확인" : "수정하기"}
						</Button>
						<Button style={{ marginRight: "20px" }} variant="primary" onClick={approveThisDriver} disabled={driverData.accepted}>
							{driverData.accepted ? "승인되었음" : "승인하기"}
						</Button>
						<Button style={{ marginRight: "20px" }} variant="danger" onClick={deleteThisDriver}>
							삭제하기
						</Button>

						<Form style={{ marginTop: "50px" }} onSubmit={(e) => e.preventDefault()}>
							<Image
								width={"180px"}
								height={"180px"}
								src={
									driverData.profilePhotoUrl
										? driverData.profilePhotoUrl
										: "https://firebasestorage.googleapis.com/v0/b/moby-4febf.appspot.com/o/defaultProfilePhoto.png?alt=media&token=df9090e8-6aff-4a05-9fc7-d9657481fc0e"
								}
								roundedCircle
							/>

							<H1>Vehicle</H1>
							{Object.keys(vehicleData).map((key, i) => {
								if (key === "__typename") return null;
								return (
									<div key={i}>
										<Form.Group key={key} as={Row} controlId="formHorizontalEmail">
											<Form.Label column sm={2}>
												{key}
											</Form.Label>
											<Col sm={10}>
												<Form.Control
													readOnly={!isEditing}
													onChange={(e) => {
														vehicleOnChange(e, key);
													}}
													value={vehicleData[key]}
												/>
											</Col>
										</Form.Group>
									</div>
								);
							})}

							<H1>About</H1>
							{Object.keys(driverData).map((key) => {
								// when driverData[key] is not an object, just print out.
								if (typeof driverData[key] !== "object" && !["__typename", "updatedAt", "drivedMinute"].includes(key)) {
									return (
										<Form.Group key={key} as={Row} controlId="formHorizontalEmail">
											<Form.Label column sm={2}>
												{key}
											</Form.Label>
											<Col sm={10}>
												<Form.Control
													readOnly={!isEditing}
													onChange={(e) => {
														onChange(e, key);
													}}
													value={driverData[key]}
												/>
											</Col>
										</Form.Group>
									);
								} else if (typeof driverData[key] === "object") {
									if (key === "rides") {
										return (
											<div key={key}>
												<H1>
													{key}(총 운행시간 : {driverData.drivedMinute}분)
												</H1>
												{driverData[key].map((ride, i) => (
													<Card key={i}>
														<Card.Body>
															<Card.Title>
																{ride.from.address} ~ {ride.to.address}
															</Card.Title>
															<Card.Text>{ride.status}</Card.Text>
															<Button variant="primary" onClick={() => goDetail(history, "ride", ride.id)}>
																운행 정보 확인
															</Button>
														</Card.Body>
													</Card>
												))}
											</div>
										);
									} else {
										return null;
									}
								} else {
									return null;
								}
							})}
						</Form>
					</DetailContainer>
				)
			)}
		</SIForm>
	);
};

export default DriverDetail;
