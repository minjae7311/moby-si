/** @format */

import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ENQUIRY_LIST } from "./query.gql";
import styled from "../../typed-components";
import LoadingForm from "../LoadingForm";

const Container = styled.div`
  width: 100%;
`;

const Ul = styled.ul`
  list-style: none;
`;

const Li = styled.li``;

const Div = styled.div``;

const EnquiryList: React.SFC = () => {
  const { loading, data } = useQuery(GET_ENQUIRY_LIST);

  console.log(data);

  return (
    <Container>
      {loading ? (
        <LoadingForm />
      ) : (
        <Ul>
          {data &&
            data.GetEnquries.enquries.map((enquiry) => (
              <Li>
                {Object.keys(enquiry).map((key, index) => (
                  <Div key={index}>
                    {key === "user" ? enquiry.user.fullName : enquiry[key]}
                  </Div>
                ))}
              </Li>
            ))}
        </Ul>
      )}
    </Container>
  );
};

export default EnquiryList;
