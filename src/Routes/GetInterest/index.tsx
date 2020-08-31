/** @format */

import React, {useState} from 'react';
import './main.css';

import {GET_INTEREST} from "./mutations.gql"
import { useQuery } from '@apollo/react-hooks';
import {GetAllInterest} from "../../types/api";
import { SIForm } from '../SIForm';

export const GetInterests: React.SFC = () => {
  const [page, setPage] = useState({
    page : 1
  })
 
  const {data} = useQuery<GetAllInterest>(
    GET_INTEREST
  )
  const interestId = data?.GetAllInterests.interests?.map((item) => item)
  const getInterest = interestId?.sort((a: any,b: any) => a.id - b.id);
  const numInterest = getInterest?.length
  const limit = 10;

  let Page_Arr = [] as any;

  for(let i = 1; i <= Math.ceil(numInterest as any / limit); i++) {
    Page_Arr.push(i);
  }

  return (
    <SIForm>
      <div className='List'>
        <div className='list_grid list_tit'>
          <div> Id </div>
          <div> Interests </div>
          <div> Create </div>
          <div> Update </div>
        </div>

        {getInterest ? getInterest.map( (item: any, index: any) => {
          const createStamp = item.createdAt * 1
          const updateStamp = item.updatedAt * 1
          const createDate = new Date(createStamp).toLocaleString()
          const updateDate = new Date(updateStamp).toLocaleString()
          if( page.page === 1 && item.id <= limit){
            return(
              <div className='list_data list_text' key={index}>
                <div> {item.id} </div>
                <div> {item.name} </div>
                <div> {createDate} </div>
                <div> {updateDate} </div>
              </div>
            )} else if(item.id > Page_Arr[page.page-2]*limit && item.id <= Page_Arr[page.page-1]*limit){
            return(
              <div className='list_data list_text' key={index}>
                <div> {item.id} </div>
                <div> {item.name} </div>
                <div> {createDate} </div>
                <div> {updateDate} </div>
              </div>
            )} else {
              return null;
            }
          })
          : null
        }
          
        <div className='paging_div'>
          <div> </div>
          <div>
            <ul>
              {Page_Arr ? Page_Arr.map( (item, index) => {
                return(
                  item === page.page ? 
                  <li key={index} className='page_num'> <b> {item} </b> </li>
                  : 
                  <li key={index} className='page_num' onClick={() => setPage({page: item})}> {item} </li>
                  )
                })
                : null
              }
            </ul>
          </div>
        </div>

      </div>
    </SIForm>
  );
}
