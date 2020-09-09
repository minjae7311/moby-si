import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ANSWERED_SURVEY } from "./mutation.gql";
import { Container, Wrapper } from "../../Components/Container/Container";
import LoadingForm from "../../Components/LoadingForm";

const AnsweredSurveyList: React.SFC = () => {
  // eslint-disable-next-line
  const [page, setPage] = useState(1);
  // eslint-disable-next-line
  const [take, setTake] = useState(10);

  const [answeredSurvey, setAnsweredSurvey] = useState();

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
        data && answeredSurvey && <Wrapper>hi</Wrapper>
      )}
    </Container>
  );
};

export default AnsweredSurveyList;
