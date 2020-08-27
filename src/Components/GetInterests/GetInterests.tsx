/** @format */

import * as React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout';
import Sidebar, { SidebarTitle } from '../Sidebar';
import Main from '../Main';
import { List, ListItem } from '../List';

const style: React.CSSProperties = {
  textDecoration: 'none',
  color: '#000',
}

const GetInterests: React.FC = () => {
  return (
    <Layout>
      <Sidebar>
        <SidebarTitle>SIForm</SidebarTitle>
        <List>
          <ListItem first>
            <Link to="/GetInterests">GetInterests</Link>
          </ListItem>
          <ListItem>
            <Link to="/GetMyrides">GetMyrides</Link>
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

export default GetInterests;