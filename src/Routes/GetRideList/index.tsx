import React, { useState } from "react";
import { GET_RIDE } from "./mutations.gql";
import { SIForm } from "../SIForm";
import { useQuery } from "@apollo/client";
import LoadingForm from "../../Components/LoadingForm";
import { useHistory } from "react-router-dom";
import { goDetail } from "../../Functions/functions";
import { Container } from "../../Components/Container/Container";
import Table from "react-bootstrap/Table";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

export const GetRideList: React.SFC = () => {
	const [page, setPage] = useState({
		page: 1,
	});

	const [take] = useState({
		limit: 10,
	});

	const history = useHistory();

	const { loading, data } = useQuery(GET_RIDE, {
		variables: { take: take.limit, page: page.page },
		onCompleted: () => {
			return console.log(data);
		},
	});

	const rideCols = ["ID", "상태", "기사 이름", "승객 이름", "차량", "요금", "출발지", "목적지"];

	const prePage = () => {
		return page.page > 1 ? setPage({ page: page.page - 1 }) : setPage({ page: 1 });
	};
	const postPage = () => {
		return data.GetRideList.rides.length === take.limit ? setPage({ page: page.page + 1 }) : setPage({ page: page.page });
	};

	return (
		<SIForm>
			{loading ? (
				<LoadingForm />
			) : (
				<Container>
					<Table responsive hover>
						<thead>
							<tr>
								{rideCols.map((col, index) => (
									<th key={index}>{col}</th>
								))}
							</tr>
						</thead>
						<tbody>
							{data &&
								data.GetRideList.rides.map((ride) => (
									<tr id={ride.id} key={ride.id} onClick={() => goDetail(history, "ride", ride.id)}>
										<td>
											<div>{ride.id}</div>
										</td>
										<td>{ride.status}</td>
										<td>{ride.driver?.fullName}</td>
										<td>{ride.passenger?.fullName}</td>
										<td>{ride.vehicle?.carNumber}</td>
										<td>{ride.finalFee}</td>
										<td>{ride.from?.address}</td>
										<td>{ride.to?.address}</td>
									</tr>
								))}
						</tbody>
					</Table>

					<ButtonGroup className="d-block ml-auto mr-auto" aria-label="Basic example">
						<Button variant="secondary" onClick={() => prePage()}>
							이전
						</Button>
						<Button variant="secondary" disabled>
							{page.page}
						</Button>
						<Button variant="secondary" onClick={() => postPage()}>
							다음
						</Button>
					</ButtonGroup>

				</Container>
			)}
		</SIForm>
	);
};
