/** @format */

import React, { useState } from "react";
import { GET_RIDE } from "./mutations.gql";
import { SIForm } from "../SIForm";
import Search from "../../Components/SearchForm/SearchForm";
import "./main.css";
import { useQuery } from "@apollo/client";
import LoadingForm from "../../Components/LoadingForm";
import { useHistory } from "react-router-dom";
import { goDetail } from "../../Functions/functions";
import { Table, Tbody, Thead, Tr, Th, Td } from "../../Components/Table/Table";
import { Container } from "../../Components/Container/Container";

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

	const rideCols = ["ID", "Status", "기사ID", "차량", "요금", "From", "To"];

	const prePage = () => {
		return page.page > 1 ? setPage({ page: page.page - 1 }) : setPage({ page: 1 });
	};
	const postPage = () => {
		return data.GetRideList.rides.length === take.limit ? setPage({ page: page.page + 1 }) : setPage({ page: page.page });
	};

	return (
		<SIForm>
			<Container>
				{loading ? (
					<LoadingForm />
				) : (
					<Table>
						<Thead>
							<Tr>
								{rideCols.map((col, index) => (
									<Th key={index}>{col}</Th>
								))}
							</Tr>
						</Thead>
						<Tbody>
							{data &&
								data.GetRideList.rides.map((ride) => (
									<Tr id={ride.id} key={ride.id}>
										<Td key={ride.id}>
											<div onClick={() => goDetail(history, "ride", ride.id)} style={{ textDecoration: "none" }}>
												{ride.id}
											</div>
										</Td>
										<Td key={"Status" + ride.id}>{ride.status}</Td>
										<Td key={"Id" + ride.id}>{ride.driver?.id}</Td>
										<Td key={"CarNum" + ride.id}>{ride.vehicle?.carNumber}</Td>
										<Td key={"Fee" + ride.id}>{ride.finalFee}</Td>
										<Td key={"Form" + ride.id}>{ride.from?.address}</Td>
										<Td key={"To" + ride.id}>{ride.to?.address}</Td>
									</Tr>
								))}
						</Tbody>
					</Table>
				)}
				<li className="page_num">
					<div onClick={() => prePage()}>
						<b>이전</b>
					</div>
				</li>
				<li className="page_num">{page.page}</li>
				<li className="page_num">
					<div onClick={() => postPage()}>
						<b>다음</b>
					</div>
				</li>
				<Search />
			</Container>
		</SIForm>
	);
};
