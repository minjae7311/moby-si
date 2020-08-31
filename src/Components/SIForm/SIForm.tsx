/** @format */

import * as React from 'react';
import Layout from '../Style/Layout';
import Sidebar, { SidebarTitle } from '../Style/Sidebar';
import Main from '../Style/Main';
import { List, ListItem } from '../Style/List';
import MenuItem from '../Style/MenuItem';

const SIForm: React.FC = () => {

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
        <div style={{
          margin: '100px'
        }}></div>
      </Main>
    </Layout>
  );
}

export default SIForm;