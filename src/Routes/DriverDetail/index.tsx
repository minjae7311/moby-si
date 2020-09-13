import React, { useState, useEffect } from "react";
import { Container, Wrapper } from "../../Components/Container/Container";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_DRIVER_DETAIL } from "./mutations.gql";
import LoadingForm from "../../Components/LoadingForm";
import { H4 } from "../../Components/Forms/Forms";

const DriverDetail: React.SFC = () => {
	const { id } = useParams();
	const [driverData, setDriverData] = useState();

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
		<Container>
			{loading ? (
				<LoadingForm />
			) : (
				data &&
				driverData && (
					<Wrapper>
						<H4>{driverData.fullName}</H4>
					</Wrapper>
				)
			)}
		</Container>
	);
};

export default DriverDetail;
