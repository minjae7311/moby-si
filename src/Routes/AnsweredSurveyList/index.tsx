import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_ANSWERED_SURVEY, PAYBACK_SURVEY } from "./mutation.gql";
import { Container } from "../../Components/Container/Container";
import LoadingForm from "../../Components/LoadingForm";
import { ExportCSV } from "../../Components/ExportExcel";
import { SIForm } from "../SIForm";
import Table from "react-bootstrap/Table";
import { useHistory } from "react-router-dom";

const AnsweredSurveyList: React.SFC = () => {
	const [answeredSurvey, setAnsweredSurvey] = useState();
	const [excelData, setExcelData] = useState([]);

	const history = useHistory();

	const paybackThisSurvey = async (id) => {
		await paybackSurvey({ variables: { surveyId: id } }).then(() => alert("completed"));

		window.location.reload();
	};

	const [paybackSurvey] = useMutation(PAYBACK_SURVEY);

	const { loading, data } = useQuery(GET_ANSWERED_SURVEY, {
		onCompleted: () => {
			const surveyData = data.GetAnsweredSurveyList.answeredSurvey;

			setAnsweredSurvey(surveyData);

			setExcelData(
				surveyData.reduce((acc, survey) => {
					const answeredJson = survey.answeredJson.reduce((acc, answer, index) => {
						acc[`질문 ${index + 1}`] = answer.question;
						acc[`답변 ${index + 1}`] = answer.answer;

						return acc;
					}, {});

					acc.push({
						연번: survey.id,
						페이백: survey.paybacked ? "완료" : "미완료",
						"출발지 주소": survey.ride.from.address,
						"목적지 주소": survey.ride.to.address,
						"결제 금액": survey.ride.finalFee,
						"페이백 금액": survey.ride.vehicle.discount,
						"설문 회사 명": survey.ride.vehicle.company,
						"탑승객 이름": survey.user.fullName,
						"탑승객 아이디": survey.user.id,
						"탑승객 계좌번호": survey.user.bankAccount,
						"탑승객 휴대폰번호": survey.user.phoneNumber,
						"설문지 폼 번호": survey.surveyForm.id,
						...answeredJson,
					});

					return acc;
				}, [])
			);
		},
	});

	return (
		<SIForm>
			{loading ? (
				<LoadingForm />
			) : (
				data &&
				excelData &&
				answeredSurvey && (
					<Container>
						<ExportCSV csvData={excelData} fileName={"Payback List"} />
						<Table responsive hover>
							<thead>
								<tr>
									<th>연번</th>
									<th>페이백</th>
									<th>출발지 주소</th>
									<th>목적지 주소</th>
									<th>결제 금액</th>
									<th>페이백 금액</th>
									<th>설문 회사</th>
									<th>탑승객 이름</th>
									<th>탑승객 아이디</th>
									<th>탑승객 계좌번호</th>
									<th>탑승객 휴대폰번호</th>
								</tr>
							</thead>
							<tbody>
								{answeredSurvey.map((survey, index) => (
									<tr key={survey.id}>
										<td>{survey.id}</td>
										<td onClick={() => paybackThisSurvey(survey.id)}>{survey.paybacked ? "완료" : "미완료"}</td>
										<td>{survey.ride.from.address}</td>
										<td>{survey.ride.to.address}</td>
										<td>{survey.ride.finalFee}</td>
										<td>{survey.ride.vehicle.discount}</td>
										<td>{survey.ride.vehicle.company}</td>
										<td>{survey.user.fullName}</td>
										<td>{survey.user.id}</td>
										<td>{survey.user.bankAccount}</td>
										<td>{survey.user.phoneNumber}</td>
									</tr>
								))}
							</tbody>
						</Table>
					</Container>
				)
			)}
		</SIForm>
	);
};

export default AnsweredSurveyList;
