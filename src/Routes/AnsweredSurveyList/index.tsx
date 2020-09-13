import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ANSWERED_SURVEY } from "./mutation.gql";
import { Container, Wrapper } from "../../Components/Container/Container";
import LoadingForm from "../../Components/LoadingForm";
import { ExportCSV } from "../../Components/ExportExcel";

const AnsweredSurveyList: React.SFC = () => {
	// eslint-disable-next-line
	const [page, setPage] = useState(1);
	// eslint-disable-next-line
	const [take, setTake] = useState(10);

	const [answeredSurvey, setAnsweredSurvey] = useState();

	const [testCsvData, setTestCsvData] = useState([{}]);

	const { loading, data } = useQuery(GET_ANSWERED_SURVEY, {
		variables: { page, take },
		onCompleted: () => {
			setAnsweredSurvey(data.GetAnsweredSurveyList.answeredSurvey);
			console.log(data.GetAnsweredSurveyList.answeredSurvey);
		},
	});

	return (
		<Container>
			{loading ? (
				<LoadingForm />
			) : (
				data &&
				answeredSurvey && (
					<Wrapper>
						<ul style={{ listStyle: "none" }}>
							{answeredSurvey.map((survey) => {
								return (
									<li key={survey.id} style={{ marginBottom: "40px" }}>
										<h4>사용자</h4>
										<div>{survey.user.fullName}</div>
										<h4>답안</h4>
										<div>{JSON.stringify(survey.answeredJson)}</div>
										<h4>운행 ID</h4>
										<div>{survey.ride.id}</div>
										<h4>할인 금액</h4>
										<div>{survey.ride.vehicle.discount}</div>
									</li>
								);
							})}{" "}
						</ul>
						<ExportCSV csvData={answeredSurvey} fileName={"test"} />
					</Wrapper>
				)
			)}
		</Container>
	);
};

export default AnsweredSurveyList;
