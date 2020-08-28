/** @format */

import * as React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout';
import Sidebar, { SidebarTitle } from '../Sidebar';
import Main from '../Main';
import { List, ListItem } from '../List';

interface IProps {
  getInterest
}

const GetInterest: React.FC<IProps> = ({
}) => {
  return (
    <Layout>
      <Sidebar>
        <SidebarTitle>SIForm</SidebarTitle>
        <List>
          <ListItem first>
            <Link to="/GetUserProfile">GetUserProfile</Link>
          </ListItem>
          <ListItem>
            <Link to="/GetMyrides">GetMyrides</Link>
          </ListItem>
          <ListItem>
            <Link to="/GetInterest">GetInterest</Link>
          </ListItem>
        </List>
      </Sidebar>
      <Main>
        <div 
          style={{
            margin: '100px'
          }}
        >
          <text style={{fontSize:15}}></text>
        </div>
      </Main>
    </Layout>
  );
}

export default GetInterest;