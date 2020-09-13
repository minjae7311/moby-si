import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ANSWERED_SURVEY } from "./mutation.gql";
import { Container, Wrapper } from "../../Components/Container/Container";
import LoadingForm from "../../Components/LoadingForm";
import { ExportCSV } from "../../Components/ExportExcel";

const AnsweredSurveyList: React.SFC = () => {
	const [answeredSurvey, setAnsweredSurvey] = useState();
	const [excelData, setExcelData] = useState([]);

	const { loading, data } = useQuery(GET_ANSWERED_SURVEY, {
		onCompleted: () => {
			setAnsweredSurvey(data.GetAnsweredSurveyList.answeredSurvey);

			setExcelData(
				data.GetAnsweredSurveyList.answeredSurvey.reduce((acc, survey) => {
					acc.push({
						연번: survey.id,
						페이백: survey.paybacked ? "완료" : "",
						"출발지 주소": survey.ride.from.address,
						"목적지 주소": survey.ride.to.address,
						"결제 금액": survey.ride.finalFee,
						"페이백 금액": survey.ride.vehicle.discount,
						"설문 회사 명": survey.ride.vehicle.company,
						"탑승객 이름": survey.user.fullName,
						"탑승객 아이디": survey.user.id,
						"탑승객 계좌번호": survey.user.bankAccount,
						"탑승객 휴대폰번호": survey.user.phoneNumber,
					});

					return acc;
				}, [])
			);
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
							})}
						</ul>
						<ExportCSV csvData={excelData} fileName={"Payback List"} />
					</Wrapper>
				)
			)}
		</Container>
	);
};

export default AnsweredSurveyList;
