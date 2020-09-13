/** @format */

import React, { useState } from "react";
import { GET_RIDE_DETAIL } from "./mutations.gql";
import { SIForm } from "../SIForm";
import { Container } from "../../Components/Container/Container";
import { useQuery } from "@apollo/client";
import styled from "../../typed-components";
import LoadingForm from "../../Components/LoadingForm";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "../CSS/index.css";
import { useParams, useHistory } from "react-router-dom";

export const GetRideDetail: React.SFC = () => {
	const { id } = useParams();

	const [rideData, setRideData] = useState(null as any);

	const { loading, data } = useQuery(GET_RIDE_DETAIL, {
		variables: { id: Number(id) },
		onCompleted: () => {
			setRideData(data.GetRideDetail.ride);
		},
	});

	const aboutCols = ["Ride ID", "Vehicle", "Final Fee", "Accepted", "Finished", "From", "To"];
	const aboutColsAnswer = [
		`${rideData?.id}`,
		`${rideData?.vehicle.carNumber}, ${rideData?.vehicle.carType}`,
		`${rideData?.finalFee}원`,
		`${rideData?.acceptedDate}`,
		`${rideData?.finishedDate}`,
		`${rideData?.from.address}`,
		`${rideData?.to.address}`,
	];

	const detailCols = ["Passenger", "PhoneNumb", "SurveyComple"];

	const detailColsAnswer = [`${rideData?.passenger.fullName} (${rideData?.passenger.id})`, `${rideData?.passenger.phoneNumber}`, `${rideData?.surveyCompleted}`];

	return (
		<SIForm>
			<Container>
				{loading ? (
					<LoadingForm />
				) : (
					<div className="container emp-profile">
						<form method="post">
							<div className="row">
								<div className="col-md-4">
									<div className="profile-img">
										<img
											src={
												rideData?.driver.profilePhotoUrl == ""
													? "https://firebasestorage.googleapis.com/v0/b/moby-4febf.appspot.com/o/defaultProfilePhoto.png?alt=media&token=df9090e8-6aff-4a05-9fc7-d9657481fc0e"
													: rideData?.driver.profilePhotoUrl
											}
											alt="driver_profile"
										/>
									</div>
								</div>
								<div className="col-md-6">
									<div className="profile-head">
										<h5>
											{rideData?.driver.fullName} ({rideData?.driver.id})
										</h5>
										<h6>{rideData?.driver.phoneNumber}</h6>
										<p className="proile-rating">
											평점 : <span>10점</span>
										</p>
										<ul className="nav nav-tabs" id="myTab" role="tablist">
											<li className="nav-item">
												<a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">
													About
												</a>
											</li>
											<li className="nav-item">
												<a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">
													Detail
												</a>
											</li>
										</ul>
									</div>
								</div>
								<div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
									<div className="row">
										<div className="col-md-6">
											{detailCols.map((col, index) => (
												<div>
													<p key={index} style={{ color: "black" }}>
														{col}
													</p>
												</div>
											))}
										</div>
										<div className="col-md-6">
											{detailColsAnswer.map((col, index) => (
												<div>
													<p key={index}>{col}</p>
												</div>
											))}
										</div>
									</div>
								</div>
							</div>
						</form>
					</div>
				)}
			</Container>
		</SIForm>
	);
};
