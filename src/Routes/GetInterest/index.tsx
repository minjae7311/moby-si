/** @format */

import * as React from 'react';
import Layout from '../../Components/Style/Layout';
import Sidebar, { SidebarTitle } from '../../Components/Style/Sidebar';
import Main from '../../Components/Style/Main';
import { List, ListItem } from '../../Components/Style/List';
import MenuItem from '../../Components/Style/MenuItem';
import './main.css';
import {GET_INTEREST} from "./mutations.gql"
import { useQuery } from '@apollo/client';
import {GetAllInterest} from "../../types/api";

// interface IProps {
//   getInterest: any;
//   page: number;
//   PageChange: any;
// }

// class GetInterestContainer extends React.Component{
//     state:{page: number;}
//      constructor(props) {
//       super(props);
//       this.state = {
//         page: 1, 
//       };
//     }
  
//     public PageChange: React.ChangeEventHandler = (event) => {
//       this.setState({page : event})
//     };

export const GetInterests: React.SFC = () => {
    const {loading, error, data} = useQuery<GetAllInterest>(
        GET_INTEREST
    )
        console.log(data?.GetAllInterests.interests)
  // const GetInterest = data?.GetAllInterests.interests?.sort(function(a,b){return a.id - b.id});
//   let limit = 10;
//   let Page_Arr = [] as any;

//   for(let i = 1; i <= Math.ceil(GetInterest.length / limit); i++) {
//     Page_Arr.push(i);
//   }

  return (
    <Layout>
      <Sidebar>
        <SidebarTitle>SIForm</SidebarTitle>
        <List>
          <ListItem>
            <MenuItem to="../GetMyride">GetMyride</MenuItem>
          </ListItem>
          <ListItem>
            <MenuItem to="../GetInterest">GetInterest</MenuItem>
          </ListItem>
        </List>
      </Sidebar>
      <Main>
        <div className='List'>

          <div className='list_grid list_tit'>
            <div> Id </div>
            <div> Interests </div>
            <div> Create </div>
            <div> Update </div>
          </div>

          {/* {GetInterest ? GetInterest.map( (item, index) : any => {
            const Createstamp = item.createdAt * 1
            const Updatestamp = item.updatedAt * 1
            const CreateDate = new Date(Createstamp).toLocaleString()
            const UpdateDate = new Date(Updatestamp).toLocaleString()
            if( page === 1 && item.id <= limit){
              return(
                <div className='list_data list_text' key={index}>
                  <div> {item.id} </div>
                  <div> {item.name} </div>
                  <div> {CreateDate} </div>
                  <div> {UpdateDate} </div>
                </div>
              )} else if(item.id > Page_Arr[page-2]*limit && item.id <= Page_Arr[page-1]*limit){
              return(
                <div className='list_data list_text' key={index}>
                  <div> {item.id} </div>
                  <div> {item.name} </div>
                  <div> {CreateDate} </div>
                  <div> {UpdateDate} </div>
                </div>
              )} else {
                return null;
              }
            })
            : null
          } */}
          
          <div className='paging_div'>
            <div> </div>
            <div>
              <ul>
                {/* {Page_Arr ? Page_Arr.map( (item, index) => {
                  return(
                    item === page ? 
                    <li key={index} className='page_num'> <b> {item} </b> </li>
                    : 
                    <li key={index} className='page_num' onClick={() => PageChange(item)}> {item} </li>
                  )
                })
                : null} */}
              </ul>
            </div>
          </div>

        </div>
      </Main>
    </Layout>
  );
}
