import React, { useState } from "react";
import { Container } from "../../Components/Container/Container";
import { GET_ENQUIRIES } from "./mutation.gql";
import { useQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";
import LoadingForm from "../../Components/LoadingForm";
import { goDetail } from "../../Functions/functions";
import { SIForm } from "../SIForm";

import Table from "react-bootstrap/Table";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

const EnquiryList: React.SFC = () => {
	// eslint-disable-next-line
	const [page, setPage] = useState(1);
	// eslint-disable-next-line
	const [take, setTake] = useState(10);

	const [enquiries, setEnquiries] = useState();

	const [enquiryCols, setEnquiryCols] = useState();

	const { loading, data } = useQuery(GET_ENQUIRIES, {
		variables: { page, take },
		onCompleted: () => {
			setEnquiries(data.GetEnquiries.enquiries);

			if (data.GetEnquiries.enquiries.length > 0) {
				setEnquiryCols(
					Object.keys(data.GetEnquiries.enquiries[0]).map((col) => {
						if (col !== "__typename" && col !== "updatedAt" && col !== "questionContent" && col !== "answerContent") return col;
						else return null;
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
		return enquiries?.length > take ? setPage(page + 1) : setPage(page);
	};

	return (
		<SIForm>
			{loading ? (
				<LoadingForm />
			) : (
				data &&
				enquiries && (
					<Container>
						<Table responsive hover>
							<thead>
								<tr>
									{enquiryCols.map((col, index) => {
										if (col !== "__typename" && col !== "updatedAt") return <th key={index}>{col}</th>;
										else return null;
									})}
								</tr>
							</thead>
							<tbody>
								{enquiries.map((enquiry) => (
									<tr id={enquiry.id} key={enquiry.id} onClick={() => goDetail(history, "enquiry", enquiry.id)}>
										{enquiryCols.map((key, index) => {
											if (key === "user") {
												return <td key={index}>{enquiry.user.fullName}</td>;
											} else if (key === "createdAt") {
												return <td key={index}>{new Date(enquiry.user.createdAt).toLocaleString()}</td>;
											} else {
												return <td key={index}>{enquiry[key]}</td>;
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
				)
			)}
		</SIForm>
	);
};

export default EnquiryList;
