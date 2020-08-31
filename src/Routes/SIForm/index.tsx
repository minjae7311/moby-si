/** @format */

/** @format */

import * as React from 'react';
import Layout from '../../Components/Style/Layout';
import Sidebar, { SidebarTitle } from '../../Components/Style/Sidebar';
import Main from '../../Components/Style/Main';
import { List, ListItem } from '../../Components/Style/List';
import MenuItem from '../../Components/Style/MenuItem';

export const SIForm: React.SFC = (props) => {

  return (
    <Layout>
      <Sidebar>
        <SidebarTitle>SIForm</SidebarTitle>
        <List>
          <ListItem>
            <MenuItem to="/SIForm/GetInterest">GetInterest</MenuItem>
          </ListItem>
          <ListItem>
            <MenuItem to="/SIForm/GetInterest">GetRide</MenuItem>
          </ListItem>
        </List>
      </Sidebar>
      <Main>
        {props.children}
      </Main>
    </Layout>
  );
}
