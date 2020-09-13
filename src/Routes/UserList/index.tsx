import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_USER_LIST } from "./mutation.gql";
import LoadingForm from "../../Components/LoadingForm";
import { useHistory } from "react-router-dom";
import { goDetail } from "../../Functions/functions";
import { Container } from "../../Components/Container/Container";
import { Table, Thead, Tr, Tbody, Td, Th } from "../../Components/Table/Table";
import { SIForm } from "../SIForm";
import Search from "../../Components/Main/Search";

const UserList: React.SFC = () => {
  // eslint-disable-next-line
  const [page, setPage] = useState(1);
  // eslint-disable-next-line
  const [take, setTake] = useState(10);

  const [userList, setUserList]= useState(null as any);

  const { loading, data } = useQuery(GET_USER_LIST, {
    variables: { page, take },
    onCompleted: () => {
      setUserList(data.GetUserList.users);
    },
  });

  const history = useHistory();

  /**
   * @todo change to state
   */
  const userCols = [
    "id",
    "fullName",
    "phoneNumber",
    "gender",
    "birthDate",
    "job",
    "isRiding",
  ];

  const prePage = () => {
    return (page > 1)? setPage(page-1) : setPage(1)
  }
  const postPage = () => {
    return (userList?.length > take)? setPage(page+1) : setPage(page)
  }  

  return (
    <SIForm>
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
              userList &&
              userList.map((user) => (
                <Tr
                  id={user.id}
                  key={user.id}
                  onClick={() => goDetail(history, "user", user.id)}
                >
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
      <div style={{marginLeft: '45%'}}>
        <li className='page_num'><a onClick={() => prePage()}><b>이전</b></a></li>
        <li className='page_num'>{page}</li>
        <li className='page_num'><a onClick={() => postPage()}><b>다음</b></a></li>
      </div>
      <Search></Search>
    </Container>
    </SIForm>
  );
};

export default UserList;
