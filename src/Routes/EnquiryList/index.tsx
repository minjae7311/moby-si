import React, { useState } from "react";
import { Container } from "../../Components/Container/Container";
import { GET_ENQUIRIES } from "./mutation.gql";
import { useQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";
import LoadingForm from "../../Components/LoadingForm";
import { Table, Thead, Tr, Th, Tbody, Td } from "../../Components/Table/Table";
import { goDetail } from "../../Functions/functions";

export const EnquiryList: React.SFC = () => {
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
            if (col !== "__typename" && col !== "updatedAt") return col;
            else return null;
          })
        );
      }
    },
  });

  const history = useHistory();

  return (
    <Container>
      {loading ? (
        <LoadingForm />
      ) : (
        data &&
        enquiries && (
          <Table>
            <Thead>
              <Tr>
                {enquiryCols.map((col, index) => {
                  if (col !== "__typename" && col !== "updatedAt")
                    return <Th key={index}>{col}</Th>;
                  else return null;
                })}
              </Tr>
            </Thead>
            <Tbody>
              {enquiries.map((enquiry) => (
                <Tr
                  id={enquiry.id}
                  key={enquiry.id}
                  onClick={() => goDetail(history, "enquiry", enquiry.id)}
                >
                  {enquiryCols.map((key, index) => {
                    if (key === "user") {
                      return <Td key={index}>{enquiry.user.fullName}</Td>;
                    } else {
                      return <Td key={index}>{enquiry[key]}</Td>;
                    }
                  })}
                </Tr>
              ))}
            </Tbody>
          </Table>
        )
      )}
    </Container>
  );
};
