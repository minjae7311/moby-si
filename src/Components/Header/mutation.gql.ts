/** @format */

import { gql } from "@apollo/client";

export const GET_MENU_LIST = gql`
  query getMenuList {
    GetMenuList {
      ok
      error
      entityNames
    }
  }
`;
