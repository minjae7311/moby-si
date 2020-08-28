/** @format */

import * as React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Style/Layout';
import Sidebar, { SidebarTitle } from '../Style/Sidebar';
import Main from '../Style/Main';
import Button from '../Style/Main';
import { List, ListItem } from '../Style/List';
import './main.css';

interface IProps {
  getInterest: any;
  page: number;
  PageChange: any;
}


const GetInterest: React.FC<IProps> = ({
  getInterest = [],
  page,
  PageChange,
}) => {
  const GetInterest = getInterest.sort(function(a,b){return a.id - b.id});
  let limit = 5;
  let Page_Arr = [] as any;

  for(let i = 1; i <= Math.ceil(GetInterest.length / limit); i++) {
    Page_Arr.push(i);
  }

  return (
    <Layout>
      <Sidebar>
        <SidebarTitle>SIForm</SidebarTitle>
        <List>
          <ListItem first>
            <Link to="../GetUserProfile">GetUserProfile</Link>
          </ListItem>
          <ListItem>
            <Link to="../GetMyride">GetMyride</Link>
          </ListItem>
          <ListItem>
            <Link to="../GetInterest">GetInterest</Link>
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

          {GetInterest ? GetInterest.map( (item, index) : any => {
            if( page === 1 && item.id <= limit){
            const Createstamp = item.createdAt * 1
            const Updatestamp = item.updatedAt * 1
            const CreateDate = new Date(Createstamp).toLocaleString()
            const UpdateDate = new Date(Updatestamp).toLocaleString()
              return(
                <div className='list_data list_text' key={index}>
                  <div> {item.id} </div>
                  <div> {item.name} </div>
                  <div> {CreateDate} </div>
                  <div> {UpdateDate} </div>
                </div>
              )} else if(item.id > Page_Arr[page-2]*limit && item.id <= Page_Arr[page-1]*limit){
                const Createstamp = item.createdAt * 1
                const Updatestamp = item.updatedAt * 1
                const CreateDate = new Date(Createstamp).toLocaleString()
                const UpdateDate = new Date(Updatestamp).toLocaleString()
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
          }
          
          <div className='paging_div'>
            <div> </div>
            <div>
              <ul>
                {Page_Arr ? Page_Arr.map( (item, index) => {
                  return(
                    item === page ? 
                    <li key={index} className='page_num'> <b> {item} </b> </li>
                    : 
                    <li key={index} className='page_num' onClick={() => PageChange(item)}> {item} </li>
                  )
                })
                : null}
              </ul>
            </div>
          </div>
        </div>
      </Main>
    </Layout>
  );
}

export default GetInterest;