import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ANSWERED_SURVEY } from "./mutation.gql";
import { Container, Wrapper } from "../../Components/Container/Container";
import LoadingForm from "../../Components/LoadingForm";
import { ExcelFile, ExcelSheet } from "react-export-excel";

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

  const multiDataSet = [
    {
      columns: [
        { value: "Name", widthPx: 50 }, // width in pixels
        { value: "Salary", widthCh: 20 }, // width in charachters
        { value: "Sex", widthPx: 60, widthCh: 20 }, // will check for width in pixels first
      ],
      data: [
        ["Johnson", 30000, "Male"],
        ["Monika", 355000, "Female"],
        ["Konstantina", 20000, "Female"],
        ["John", 250000, "Male"],
        ["Josef", 450500, "Male"],
      ],
    },
    {
      xSteps: 1, // Will start putting cell with 1 empty cell on left most
      ySteps: 5, //will put space of 5 rows,
      columns: ["Name", "Department"],
      data: [
        ["Johnson", "Finance"],
        ["Monika", "IT"],
        ["Konstantina", "IT Billing"],
        ["John", "HR"],
        ["Josef", "Testing"],
      ],
    },
  ];

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
