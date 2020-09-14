import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_USER_LIST } from "./mutation.gql";
import LoadingForm from "../../Components/LoadingForm";
import { useHistory } from "react-router-dom";
import { goDetail } from "../../Functions/functions";
import { Container } from "../../Components/Container/Container";
import { SIForm } from "../SIForm";

import Table from "react-bootstrap/Table";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

const UserList: React.SFC = () => {
	// eslint-disable-next-line
	const [page, setPage] = useState(1);
	// eslint-disable-next-line
	const [take, setTake] = useState(10);

	const [userList, setUserList] = useState(null as any);

	const { loading, data } = useQuery(GET_USER_LIST, {
		variables: { page, take },
		onCompleted: () => {
			setUserList(data.GetUserList.users);
		},
	});

	const history = useHistory();

	/**
	 * @todo change to state
	 */
	const userCols = ["id", "fullName", "phoneNumber", "gender", "birthDate", "job", "isRiding"];

	const prePage = () => {
		return page > 1 ? setPage(page - 1) : setPage(1);
	};
	const postPage = () => {
		return userList?.length > take ? setPage(page + 1) : setPage(page);
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
								{userCols.map((col, index) => (
									<th key={index}>{col}</th>
								))}
							</tr>
						</thead>
						<tbody>
							{data &&
								userList &&
								userList.map((user) => (
									<tr id={user.id} key={user.id} onClick={() => goDetail(history, "user", user.id)}>
										{userCols.map((col, coli) => {
											if (col === "isRiding") {
												if (user[col] === true) return <td key={coli}>riding</td>;
												else return <td key={coli}>not riding</td>;
											} else {
												return <td key={coli}>{user[col]}</td>;
											}
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
			)}
		</SIForm>
	);
};

export default UserList;
