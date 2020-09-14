import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { GET_USER_DETAIL, UPDATE_USER_DATA } from "./mutation.gql";
import { useQuery, useMutation } from "@apollo/client";
import LoadingForm from "../../Components/LoadingForm";
import { SIForm } from "../SIForm";
import { updateUserData_UpdateUserData, updateUserDataVariables } from "../../types/api";
import { Container } from "../../Components/Container/Container";
import { Input } from "../../Components/Forms/Forms";
import { goBack } from "../../Functions/functions";
import Button from "react-bootstrap/Button";

const UserDetail: React.SFC = () => {
	// get param
	const { id } = useParams();

	// states
	const [ridepage, setridePage] = useState(1);
	const [creditpage, setcreditPage] = useState(1);
	const [isEditing, setIsEditing] = useState(false);
	const [userData, setUserData] = useState(null as any);

	// get user data
	const { loading, data } = useQuery(GET_USER_DETAIL, {
		variables: { id: Number(id) },
		onCompleted: () => {
			console.log(data.GetUserDetail.user.rides);
			setUserData(data.GetUserDetail.user);
		},
	});

	// update user data
	const [updateUserData, { error }] = useMutation<updateUserData_UpdateUserData, updateUserDataVariables>(UPDATE_USER_DATA, {
		variables: { data: userData },
		onError: () => console.error(error),
	});

	// history
	const history = useHistory();

	// edit user data
	const editUser = () => {
		setIsEditing(true);
	};

	const confirmEdit = async () => {
		const result = await updateUserData();

		/**
		 * @todo how to get result.ok
		 */
		console.log(result);

		setIsEditing(false);
	};

	/**
	 * @todo delete user
	 */
	// delete user
	const deleteUser = () => {};

	// user data value change handler
	const onChange = (event, header) => {
		setUserData({ ...userData, [header]: event.target.value });
	};

	const preRidePage = () => {
		return ridepage > 1 ? setridePage(ridepage - 1) : setridePage(1);
	};
	const postRidePage = () => {
		return userData?.rides.length !== ridepage ? setridePage(ridepage + 1) : setridePage(ridepage);
	};
	const preCreditPage = () => {
		return creditpage > 1 ? setcreditPage(creditpage - 1) : setcreditPage(1);
	};
	const postCreditPage = () => {
		return userData?.credit.length !== creditpage ? setcreditPage(creditpage + 1) : setcreditPage(creditpage);
	};

	/**
	 * @todo change to state
	 */
	const aboutCols = ["ID", "FullName", "PhoneNumber", "VerifiedPhoneNumber", "Gender", "BirthDate", "Job", "DeviceId", "IsRiding", "CreatedAt", "PushToken"];

	const aboutColsAnswer = [
		`${userData?.id}`,
		`${userData?.fullName}`,
		`${userData?.phoneNumber}`,
		`${userData?.verifiedPhoneNumber}`,
		`${userData?.gender}`,
		`${userData?.birthDate}`,
		`${userData?.job}`,
		`${userData?.deviceId}`,
		`${userData?.isriding}`,
		`${userData?.createdAt}`,
		`${userData?.pushToken}`,
	];

	const rideCols = ["ID", "From", "To", "SurveyComp"];

	const rideColsAnswer = [
		`${userData?.rides[ridepage - 1]?.id}`,
		`${userData?.rides[ridepage - 1]?.from.address}`,
		`${userData?.rides[ridepage - 1]?.to.address}`,
		`${userData?.rides[ridepage - 1]?.surveyCompleted}`,
	];

	const creditCols = ["ID", "Name", "CardName", "CardNumb"];

	const creditColsAnswer = [
		`${userData?.credit[creditpage - 1]?.id}`,
		`${userData?.credit[creditpage - 1]?.nickname}`,
		`${userData?.credit[creditpage - 1]?.card_name}`,
		`${userData?.credit[creditpage - 1]?.card_number}`,
	];

	const editBtn: React.CSSProperties = {
		marginLeft: "1%",
	};
	const nonEditBtn: React.CSSProperties = {
		marginLeft: "1%",
		display: "none",
	};

	return (
		<SIForm>
			<Container>
				{loading ? (
					<LoadingForm />
				) : (
					data &&
					userData && (
						<div className="container emp-profile">
							<div className="row">
								<div className="col-md-4">
									<div className="profile-img">
										<img
											src={
												userData?.profilePhotoUrl === ""
													? "https://firebasestorage.googleapis.com/v0/b/moby-4febf.appspot.com/o/defaultProfilePhoto.png?alt=media&token=df9090e8-6aff-4a05-9fc7-d9657481fc0e"
													: userData?.profilePhotoUrl
											}
											alt="user_profile"
										/>
									</div>
								</div>
								<div className="col-md-6">
									<div className="profile-head">
										<h5>
											{userData?.fullName} ({userData?.id})
										</h5>
										<h6>{userData?.phoneNumber}</h6>
										{/* <p className="proile-rating">
												평점 : <span>10점</span>
											</p> */}
										<ul className="nav nav-tabs" id="myTab" role="tablist">
											<li className="nav-item">
												<a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">
													About
												</a>
											</li>
											<li className="nav-item">
												<a className="nav-link" id="ride-tab" data-toggle="tab" href="#ride" role="tab" aria-controls="profile" aria-selected="false">
													Ride
												</a>
											</li>
											<li className="nav-item">
												<a className="nav-link" id="credit-tab" data-toggle="tab" href="#credit" role="tab" aria-controls="profile" aria-selected="false">
													Credit
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-4">{/* <div className="profile-work">
											<p>WORK LINK</p>
											<a href="">Driver Profile</a>
											<br />
											<a href="">SurveyForm</a>
											<br />
											<a href="">Vehicle</a>
										</div> */}</div>
								<div className="col-md-8">
									<div className="tab-content profile-tab" id="myTabContent">
										<div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
											<div className="row">
												<div className="col-md-6">
													{aboutCols.map((col, index) => (
														<div key={index}>
															<p style={{ color: "black" }}>{col}</p>
														</div>
													))}
												</div>
												<div className="col-md-6">
													{aboutColsAnswer.map((col, index) => (
														<p key={index}>
															<Input value={userData[col] !== null ? col : ""} onChange={(event) => onChange(event, col)} disabled={!isEditing} style={{ marginLeft: -25 }} />
														</p>
													))}
												</div>
											</div>
										</div>
										<div className="tab-pane fade" id="ride" role="tabpanel" aria-labelledby="profile-tab">
											<div className="row">
												<div className="col-md-6">
													{rideCols.map((col, index) => (
														<div key={index}>
															<p style={{ color: "black" }}>{col}</p>
														</div>
													))}
												</div>
												<div className="col-md-6">
													{rideColsAnswer.map((col, index) => (
														<div key={index}>
															<p>{col}</p>
														</div>
													))}
												</div>
												<div style={{ marginLeft: "25%" }}>
													<li className="page_num">
														<div onClick={() => preRidePage()}>
															<b>이전</b>
														</div>
													</li>
													<li className="page_num">{ridepage}</li>
													<li className="page_num">
														<div onClick={() => postRidePage()}>
															<b>다음</b>
														</div>
													</li>
												</div>
											</div>
											{/* <div className="row">
                                        <div className="col-md-12">
                                            <label>Sub</label><br/>
                                            <p>**</p>
                                        </div>
                                    </div> */}
										</div>
										<div className="tab-pane fade" id="credit" role="tabpanel" aria-labelledby="profile-tab">
											<div className="row">
												<div className="col-md-6">
													{creditCols.map((col, index) => (
														<div>
															<p key={index} style={{ color: "black" }}>
																{col}
															</p>
														</div>
													))}
												</div>
												<div className="col-md-6">
													{creditColsAnswer.map((col, index) => (
														<div>
															<p key={index}>{col}</p>
														</div>
													))}
												</div>
												<div style={{ marginLeft: "25%" }}>
													<li className="page_num">
														<div onClick={() => preCreditPage()}>
															<b>이전</b>
														</div>
													</li>
													<li className="page_num">{creditpage}</li>
													<li className="page_num">
														<div onClick={() => postCreditPage()}>
															<b>다음</b>
														</div>
													</li>
												</div>
											</div>
											{/* <div className="row">
                                        <div className="col-md-12">
                                            <label>Sub</label><br/>
                                            <p>**</p>
                                        </div>
                                    </div> */}
										</div>
									</div>
								</div>
							</div>
							<Button variant="success" style={editBtn} onClick={() => goBack(history)}>
								뒤로가기
							</Button>
							<Button variant="secondary" style={isEditing === false ? editBtn : nonEditBtn} onClick={editUser}>
								수정
							</Button>
							<Button variant="secondary" style={isEditing === true ? editBtn : nonEditBtn} onClick={confirmEdit}>
								확인
							</Button>
							<Button variant="danger" style={editBtn} onClick={deleteUser}>
								삭제
							</Button>
						</div>
					)
				)}
			</Container>
		</SIForm>
	);
};

export default UserDetail;
