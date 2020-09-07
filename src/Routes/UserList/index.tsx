/** @format */

import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_USER_LIST } from "./mutation.gql";
import LoadingForm from "../../Components/LoadingForm";
import styled from "../../typed-components";

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const Table = styled.table`
  width: 100%;
  text-align: center;
`;

const Thead = styled.thead``;

const Tbody = styled.tbody``;

const Tr = styled.tr`
  height: 30px;
`;

const Th = styled.th`
  border-bottom: 1px solid #dddddd;
`;

const Td = styled.td`
  border-bottom: 1px solid #dddddd;
`;

const UserList: React.SFC = () => {
  // eslint-disable-next-line
  const [page, setPage] = useState(1);
  // eslint-disable-next-line
  const [take, setTake] = useState(10);

  const { loading, data } = useQuery(GET_USER_LIST, {
    variables: { page, take },
    onCompleted: () => {
      console.log(data);
    },
  });

  const userCols = [
    "id",
    // "bankAccount",
    "fullName",
    // "profilePhotoUrl",
    "phoneNumber",
    // "verifiedPhoneNumber",
    "gender",
    // "pushToken",
    "birthDate",
    "job",
    // "deviceId",
    "isRiding",
    // "createdAt",
    // "updatedAt",
  ];

  return (
    <Container>
      {loading ? (
        <LoadingForm />
      ) : (
        <Table>
          <Thead>
            <Tr>
              {userCols.map((col, index) => (
                <Th key={index}>{col}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {data &&
              data.GetUserList.users.map((user) => (
                <Tr id={user.id} key={user.id}>
                  {userCols.map((col, coli) => {
                    if (col === "isRiding") {
                      if (user[col] === true) return <Td key={coli}>riding</Td>;
                      else return <Td key={coli}>not riding</Td>;
                    } else {
                      return <Td key={coli}>{user[col]}</Td>;
                    }
                  })}
                </Tr>
              ))}
          </Tbody>
        </Table>
      )}
    </Container>
  );
};

export default UserList;
