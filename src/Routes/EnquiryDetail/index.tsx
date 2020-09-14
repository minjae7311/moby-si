import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { GET_ENQUIRY_DETAIL, ANSWER_ENQUIRY } from "./mutation.gql";
import { useQuery, useMutation } from "@apollo/client";
import { Container } from "../../Components/Container/Container";
import LoadingForm from "../../Components/LoadingForm";
import { Input, Textarea } from "../../Components/Forms/Forms";
import { goBack } from "../../Functions/functions";
import { anwserEnquiry_AnswerEnquiry, anwserEnquiryVariables } from "../../types/api";
import { SIForm } from "../SIForm";
import Button from "react-bootstrap/Button";

const EnquiryDetail: React.SFC = () => {
	const { id } = useParams();
	const [enquiryData, setEnquiryData] = useState();

	const { loading, data } = useQuery(GET_ENQUIRY_DETAIL, {
		variables: { id: Number(id) },
		onCompleted: () => {
			setEnquiryData(data.GetEnquiryDetail.enquiry);
		},
	});

	const [anwserEnquiry, { error }] = useMutation<anwserEnquiry_AnswerEnquiry, anwserEnquiryVariables>(ANSWER_ENQUIRY, {
		variables: {
			id,
			...enquiryData,
		},
		onError: () => console.error(error),
	});

	const history = useHistory();

	const answer = async () => {
		const result = await anwserEnquiry()
			.then((res) => alert("completed"))
			.catch((err) => alert(err));
		/**
		 * @todo how to get result.ok
		 */
		console.log(result);
	};

	/**
	 * @todo delete enquiry
	 */
	const deleteEnquiry = () => {};

	const onChange = (event, header) => {
		setEnquiryData({ ...enquiryData, [header]: event.target.value });
	};

	return (
		<SIForm>
			<Container>
				{loading ? (
					<LoadingForm />
				) : (
					data &&
					enquiryData && (
						<div className="container emp-profile">
							<div className="row">
								<div className="col-md-4">
									<div className="profile-img">
										<img
											src={
												enquiryData.user?.profilePhotoUrl === ""
													? "https://firebasestorage.googleapis.com/v0/b/moby-4febf.appspot.com/o/defaultProfilePhoto.png?alt=media&token=df9090e8-6aff-4a05-9fc7-d9657481fc0e"
													: enquiryData.user?.profilePhotoUrl
											}
											alt="user_profile"
										/>
									</div>
								</div>

								<div className="col-md-6">
									<div className="profile-head">
										<h5>
											{enquiryData.user?.fullName} ({enquiryData.user?.id})
										</h5>
										<h6>{enquiryData.user?.phoneNumber}</h6>
									</div>
								</div>
							</div>

							<div className="row">
								<div className="col-md-4"></div>

								<div className="col-md-8">
									<div className="tab-content profile-tab" id="myTabContent">
										<div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
											<div className="row">
												<div className="col-md-6">
													<div>
														<p style={{ color: "black" }}>문의 제목</p>
													</div>
													<div>
														<p style={{ color: "black", height: "200px" }}>문의 내용</p>
													</div>
													<div>
														<p style={{ color: "black" }}>답변 제목</p>
													</div>
													<div>
														<p style={{ color: "black", height: "200px" }}>답변 내용</p>
													</div>
												</div>

												<div className="col-md-6">
													<p>
														<Input style={{ width: "100%" }} value={enquiryData.questionTitle} onChange={onChange} disabled={true}></Input>
													</p>
													<p style={{ height: "200px" }}>
														<Textarea value={enquiryData.questionContent} onChange={onChange} disabled={true}></Textarea>
													</p>
													<p>
														<Input
															style={{ width: "100%" }}
															value={enquiryData.answerTitle ? enquiryData.answerTitle : ""}
															onChange={(event) => onChange(event, "answerTitle")}
															disabled={false}></Input>
													</p>
													<p style={{ height: "200px" }}>
														<Textarea value={enquiryData.answerContent ? enquiryData.answerContent : ""} onChange={(event) => onChange(event, "answerContent")} disabled={false}></Textarea>
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<Button variant="secondary" onClick={answer}>
								답변하기
							</Button>
							<Button variant="success" onClick={() => goBack(history)}>
								뒤로가기
							</Button>
							<Button variant="danger" onClick={deleteEnquiry}>
								삭제하기
							</Button>
						</div>
					)
				)}
			</Container>
		</SIForm>
	);
};

export default EnquiryDetail;
