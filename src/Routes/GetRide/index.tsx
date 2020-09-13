/** @format */

import React, {useState} from 'react';
import {GET_RIDE} from "./mutations.gql"
import { SIForm } from '../SIForm';
import { goDetail } from "../../Functions/functions";
import { Table, Thead, Tr, Tbody, Td, Th } from "../../Components/Table/Table";
import { Container } from "../../Components/Container/Container";
import Search from '../../Components/Main/Search'
import '../CSS/index.css'
import { useQuery } from '@apollo/client';
import LoadingForm from "../../Components/LoadingForm";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';

export const GetRide: React.SFC = () => {
  const [page, setPage] = useState(1);
  const [take, setTake] = useState(10);

  const [rideList, setRideList]= useState(null as any);
  
  const { loading, data } = useQuery(GET_RIDE, {
    variables: { page, take },
    onCompleted: () => {
      setRideList(data.GetRideList.rides);
    },
  });

  const rideCols = [
    "ID",
    "Status",
    "기사ID",
    "차량",
    "요금",
    "From",
    "To",
  ];

  const history = useHistory();

  const prePage = () => {
    return (page > 1)? setPage(page-1) : setPage(1)
  }
  const postPage = () => {
    return (rideList?.length > take)? setPage(page+1) : setPage(page)
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
              rideList &&
              rideList?.map((ride) => (
                <Tr 
                  id={ride.id} 
                  key={ride.id}
                  onClick={() => goDetail(history, "ride", ride.id)}
                >
                  <Td key={ride.id}>{ride.id}</Td>
                  <Td key={"Status" + ride.id}>{ride.status}</Td>
                  <Td key={"Id" + ride.id}>{ride.driver?.id}</Td>
                  <Td key={"CarNum" + ride.id}>{ride.vehicle?.carNumber}</Td>
                  <Td key={"Fee"+ride.id}>{ride.finalFee}</Td>
                  <Td key={"Form"+ride.id}>{ride.from?.address}</Td>
                  <Td key={"To"+ride.id}>{ride.to?.address}</Td>
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
        <Search />
      </Container>
    </SIForm>
  );

}
