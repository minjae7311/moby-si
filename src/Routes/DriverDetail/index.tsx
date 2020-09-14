import React, { useState } from "react";
import { DetailContainer } from "../../Components/Container/Container";
import { useParams, useHistory } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_DRIVER_DETAIL } from "./mutations.gql";
import LoadingForm from "../../Components/LoadingForm";
import { H4 } from "../../Components/Forms/Forms";
import { SIForm } from "../SIForm";

import Button from "react-bootstrap/Button";
import { goBack } from "../../Functions/functions";

const DriverDetail: React.SFC = () => {
	const { id } = useParams();
	const [driverData, setDriverData] = useState();
	const [isEditing, setIsEditing] = useState(false);

	const history = useHistory();

	const editDriver = () => {
		setIsEditing(true);
	};

	const confirmEdit = async () => {
		console.log("confirmEdit");

		// await updateUserData();

		setIsEditing(false);
	};

	const deleteDriver = () => {};

	const { loading, data } = useQuery(GET_DRIVER_DETAIL, {
		variables: { id: Number(id) },
		onCompleted: () => {
			const drivedMinuted = new Date(
				data.GetDriverDetail.driver.rides.reduce((acc, ride) => {
					if (ride.status === "FINISHED") {
						acc += (ride.finishedDate - ride.acceptedDate) / 60;
					}

					return acc;
				}, 0)
			).getMinutes();

			setDriverData({
				...driverData,
				// 운행 시간(분)
				drivedMinuted,
			});

			setDriverData({ ...data.GetDriverDetail.driver, drivedMinuted });
		},
	});

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
						<Button style={{ marginRight: "20px" }} variant="danger" onClick={deleteDriver}>
							삭제하기
						</Button>

						<H4>{driverData.fullName}</H4>
					</DetailContainer>
				)
			)}
		</SIForm>
	);
};

export default DriverDetail;
