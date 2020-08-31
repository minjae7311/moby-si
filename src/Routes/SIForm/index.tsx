/** @format */

/** @format */

import * as React from 'react';
import Layout from '../../Components/Style/Layout';
import Sidebar, { SidebarTitle } from '../../Components/Style/Sidebar';
import Main from '../../Components/Style/Main';
import { List, ListItem } from '../../Components/Style/List';
import MenuItem from '../../Components/Style/MenuItem';

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