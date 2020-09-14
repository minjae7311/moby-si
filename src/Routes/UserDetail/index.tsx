import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { GET_USER_DETAIL, UPDATE_USER_DATA, DELETE_USER } from "./mutation.gql";
import { useQuery, useMutation } from "@apollo/client";
import LoadingForm from "../../Components/LoadingForm";
import { SIForm } from "../SIForm";
import { updateUserData_UpdateUserData, updateUserDataVariables } from "../../types/api";
import { DetailContainer } from "../../Components/Container/Container";
import { goBack, goDetail } from "../../Functions/functions";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Badge from "react-bootstrap/Badge";
import styled from "../../typed-components";

const H1 = styled.h1`
	margin-top: 20px;
`;

const UserDetail: React.SFC = () => {
	// get param
	const { id } = useParams();

	const [isEditing, setIsEditing] = useState(false);
	const [userData, setUserData] = useState(null as any);

	// get user data
	const { loading, data } = useQuery(GET_USER_DETAIL, {
		variables: { id: Number(id) },
		onCompleted: () => {
			setUserData(data.GetUserDetail.user);
		},
	});

	// update user data
	const [updateUserData, { error }] = useMutation<updateUserData_UpdateUserData, updateUserDataVariables>(UPDATE_USER_DATA, {
		variables: { data: userData },
		onError: () => console.error(error),
	});

	const [deleteUser] = useMutation(DELETE_USER, {
		variables: { userId: Number(id) },
		onError: (error) => console.log(error),
	});

	// history
	const history = useHistory();

	// edit user data
	const editUser = () => {
		setIsEditing(true);
	};

	const confirmEdit = async () => {
		console.log("confirmEdit");

		await updateUserData();

		setIsEditing(false);
	};

	/**
	 * @todo delete user
	 */
	// delete user
	const deleteThisUser = async () => {
		await deleteUser()
			.then((res) => {
				alert("completed");
				goBack(history);
			})
			.catch((err) => alert(err));
	};

	// user data value change handler
	const onChange = (event, header) => {
		setUserData({ ...userData, [header]: event.target.value });
	};

	return (
		<SIForm>
			{loading ? (
				<LoadingForm />
			) : (
				data &&
				userData && (
					<DetailContainer>
						<Button style={{ marginRight: "20px" }} variant="secondary" onClick={() => goBack(history)}>
							뒤로가기
						</Button>
						<Button style={{ marginRight: "20px" }} variant="warning" onClick={isEditing ? confirmEdit : editUser}>
							{isEditing ? "확인" : "수정하기"}
						</Button>
						<Button style={{ marginRight: "20px" }} variant="danger" onClick={deleteThisUser}>
							삭제하기
						</Button>

						<Form style={{ marginTop: "50px" }} onSubmit={(e) => e.preventDefault()}>
							<Image
								width={"180px"}
								height={"180px"}
								src={
									userData.profilePhotoUrl
										? userData.profilePhotoUrl
										: "https://firebasestorage.googleapis.com/v0/b/moby-4febf.appspot.com/o/defaultProfilePhoto.png?alt=media&token=df9090e8-6aff-4a05-9fc7-d9657481fc0e"
								}
								roundedCircle
							/>

							<H1>About</H1>
							{Object.keys(userData).map((key) => {
								// when userData[key] is not an object, just print out.
								if (typeof userData[key] !== "object" && !["__typename", "updatedAt"].includes(key)) {
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
													value={userData[key]}
												/>
											</Col>
										</Form.Group>
									);
								} else if (typeof userData[key] === "object") {
									// when userData[key] is object..
									if (key === "interests") {
										return (
											<div key={key}>
												<H1>{key}</H1>
												{userData[key].map((interest, i) => (
													<Badge key={i} variant="info" style={{ marginRight: "10px", fontSize: "15px" }}>
														{interest.name}
													</Badge>
												))}
											</div>
										);
									} else if (key === "rides") {
										return (
											<div key={key}>
												<H1>{key}</H1>
												{userData[key].map((ride, i) => (
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
									} else if (key === "credit") {
										return (
											<div key={key}>
												<H1>{key}</H1>
												{userData[key].map((credit, i) => {
													return (
														<div key={i}>
															<Form.Group key={key} as={Row} controlId="formHorizontalEmail">
																<Form.Label column sm={2}>
																	카드 이름
																</Form.Label>
																<Col sm={10}>
																	<Form.Control readOnly onChange={(e) => {}} value={credit.card_name + (credit.isMain ? "(메인)" : "")} />
																</Col>
															</Form.Group>
														</div>
													);
												})}
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

export default UserDetail;
