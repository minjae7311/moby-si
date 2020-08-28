/** @format */

import * as React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Style/Layout';
import Sidebar, { SidebarTitle } from '../Style/Sidebar';
import Main from '../Style/Main';
import { List, ListItem } from '../Style/List';


const SIForm: React.FC = () => {
  return (
    <Layout>
      <Sidebar>
        <SidebarTitle>SIForm</SidebarTitle>
        <List>
          <ListItem first>
            <Link to="/GetUserProfile">GetUserProfile</Link>
          </ListItem>
          <ListItem>
            <Link to="/GetMyride">GetMyride</Link>
          </ListItem>
          <ListItem>
            <Link to="/GetInterest">GetInterest</Link>
          </ListItem>
        </List>
      </Sidebar>
      <Main>
        <div style={{
          margin: '100px'
        }}></div>
      </Main>
    </Layout>
  );
}

export default SIForm;