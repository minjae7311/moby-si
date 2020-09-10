/** @format */

import React, {useState} from 'react';
import {GET_RIDE} from "./mutations.gql"
import { SIForm } from '../SIForm';
import Search from '../../Components/Main/Search'
import './main.css'
import { useQuery } from '@apollo/client';
import LoadingForm from "../../Components/LoadingForm";
import styled from "../../typed-components";
import { Link } from 'react-router-dom';

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

export const GetRide: React.SFC = () => {
  const [page, setPage] = useState({
    page : 1
  })

  const [take] = useState({
    limit : 10
  })
 
  const {loading, data} = useQuery(GET_RIDE,
    {
      variables: {take : take.limit, page: page.page},
      onCompleted: () => {return console.log(data)},
    }
  );

  const rideCols = [
    "ID",
    "Status",
    "기사ID",
    "차량",
    "승객ID",
    "요금",
    "From",
    "To",
  ];

  const prePage = () => {
    return (page.page > 1)? setPage({page: page.page-1}) : setPage({page: 1})
  }
  const postPage = () => {
    return (data.GetRideList.rides.length === take.limit)? setPage({page: page.page+1}) : setPage({page: page.page})
  }  

  return (
    <SIForm>
      <Container>
        {loading? (<LoadingForm />) : (
          <Table>
          <Thead>
            <Tr>
              {rideCols.map((col, index) => (
                <Th key={index}>{col}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {data &&
              data.GetRideList.rides.map((ride) => (
                <Tr id={ride.id} key={ride.id}>
                  <Td key={ride.id}><Link to={"/GetRide/"+`${ride.id}`} style={{textDecoration: 'none'}}>{ride.id}</Link></Td>
                  <Td key={ride.id}>{ride.status}</Td>
                  <Td key={ride.id}>{ride.driver?.id}</Td>
                  <Td key={ride.id}>{ride.vehicle?.company}</Td>
                  <Td key={ride.id}>{ride.passenger?.id}</Td>
                  <Td key={ride.id}>{ride.finalFee}</Td>
                  <Td key={ride.id}>{ride.from?.address}</Td>
                  <Td key={ride.id}>{ride.to?.address}</Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
        )}
        <li className='page_num'><a onClick={() => prePage()}><b>이전</b></a></li>
        <li className='page_num'>{page.page}</li>
        <li className='page_num'><a onClick={() => postPage()}><b>다음</b></a></li>
        <Search />
      </Container>
    </SIForm>
  );
}
