import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_DRIVER_LIST } from "./mutation.gql";
import { useHistory } from "react-router-dom";
import { Container } from "../../Components/Container/Container";
import LoadingForm from "../../Components/LoadingForm";
import { goDetail } from "../../Functions/functions";
import { SIForm } from "../SIForm";

import Table from "react-bootstrap/Table";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

const DriverList: React.SFC = () => {
	// eslint-disable-next-line
	const [page, setPage] = useState(1);
	// eslint-disable-next-line
	const [take, setTake] = useState(10);

	const [drivers, setDrivers] = useState();

	const [driverCols, setDriverCols] = useState();

	const { loading, data } = useQuery(GET_DRIVER_LIST, {
		variables: { page, take },
		onCompleted: () => {
			setDrivers(data.GetDriverList.drivers);

			if (data.GetDriverList.drivers.length > 0) {
				setDriverCols(
					Object.keys(data.GetDriverList.drivers[0]).filter((col) => {
						if (col !== "__typename" && col !== "updatedAt" && col !== "createdAt") return true;
						else return false;
					})
				);
			}
		},
	});

	const history = useHistory();

	const prePage = () => {
		return page > 1 ? setPage(page - 1) : setPage(1);
	};
	const postPage = () => {
		return drivers?.length > take ? setPage(page + 1) : setPage(page);
	};

	return (
		<SIForm>
			{loading ? (
				<LoadingForm />
			) : (
				data &&
				drivers && (
					<Container>
						<Table responsive hover>
							<thead>
								<tr>
									{driverCols.map((col, index) => {
										if (col !== "__typename" && col !== "updatedAt") return <th key={index}>{col}</th>;
										else return null;
									})}
								</tr>
							</thead>
							<tbody>
								{drivers.map((driver) => (
									<tr id={driver.id} key={driver.id} onClick={() => goDetail(history, "driver", driver.id)}>
										{driverCols.map((key, index) => {
											return <td key={index}>{String(driver[key])}</td>;
										})}
									</tr>
								))}
							</tbody>
						</Table>

						<ButtonGroup className="d-block ml-auto mr-auto" aria-label="Basic example">
							<Button variant="secondary" onClick={() => prePage()}>
								이전
							</Button>
							<Button variant="secondary" disabled>
								{page}
							</Button>
							<Button variant="secondary" onClick={() => postPage()}>
								다음
							</Button>
						</ButtonGroup>
					</Container>
				)
			)}
		</SIForm>
	);
};

export default DriverList;
