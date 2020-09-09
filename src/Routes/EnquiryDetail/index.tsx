import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { GET_ENQUIRY_DETAIL, ANSWER_ENQUIRY } from "./mutation.gql";
import { useQuery, useMutation } from "@apollo/client";
import { Container, Wrapper } from "../../Components/Container/Container";
import LoadingForm from "../../Components/LoadingForm";
import { Button, H4, Input, Textarea } from "../../Components/Forms/Forms";
import { goBack } from "../../Functions/functions";
import {
  anwserEnquiry_AnswerEnquiry,
  anwserEnquiryVariables,
} from "../../types/api";

const EnquiryDetail: React.SFC = () => {
  const { id } = useParams();
  const [enquiryData, setEnquiryData] = useState();

  const { loading, data } = useQuery(GET_ENQUIRY_DETAIL, {
    variables: { id: Number(id) },
    onCompleted: () => {
      setEnquiryData(data.GetEnquiryDetail.enquiry);
    },
  });

  const [anwserEnquiry, { error }] = useMutation<
    anwserEnquiry_AnswerEnquiry,
    anwserEnquiryVariables
  >(ANSWER_ENQUIRY, {
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
    <Container>
      {loading ? (
        <LoadingForm />
      ) : (
        data &&
        enquiryData && (
          <Wrapper>
            <H4>제목</H4>
            <Input
              value={enquiryData.questionTitle}
              onChange={onChange}
              disabled={true}
            ></Input>

            <H4>작성자</H4>
            <Input
              value={enquiryData.user.fullName}
              onChange={onChange}
              disabled={true}
            ></Input>

            <H4>내용</H4>
            <Textarea
              value={enquiryData.questionContent}
              onChange={onChange}
              disabled={true}
            ></Textarea>

            <H4>답변 제목</H4>
            <Input
              value={enquiryData.answerTitle ? enquiryData.answerTitle : ""}
              onChange={(event) => onChange(event, "answerTitle")}
              disabled={false}
            ></Input>

            <H4>답변 내용</H4>
            <Textarea
              value={enquiryData.answerContent ? enquiryData.answerContent : ""}
              onChange={(event) => onChange(event, "answerContent")}
              disabled={false}
            ></Textarea>

            <Button onClick={answer} visible={true}>
              답변하기
            </Button>
            <Button onClick={() => goBack(history)} visible={true}>
              뒤로가기
            </Button>
            <Button onClick={deleteEnquiry} visible={true}>
              삭제하기
            </Button>
          </Wrapper>
        )
      )}
    </Container>
  );
};

export default EnquiryDetail;
