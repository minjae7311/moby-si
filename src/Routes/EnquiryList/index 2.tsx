import React, { useState } from "react";
import { Container } from "../../Components/Container/Container";
import { GET_ENQUIRIES } from "./mutation.gql";
import { useQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";

export const EnquiryList: React.SFC = () => {
  // eslint-disable-next-line
  const [page, setPage] = useState(1);
  // eslint-disable-next-line
  const [take, setTake] = useState(10);

  const { loading, data } = useQuery(GET_ENQUIRIES, {
    variables: { page, take },
  });

  const history = useHistory();

  return <Container></Container>;
};
