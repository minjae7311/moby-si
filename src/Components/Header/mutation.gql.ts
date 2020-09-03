/** @format */

import { gql } from "@apollo/client";

export const GET_MENU_LIST = gql`
  mutation getMenuList {
    GetMenuList {
      ok
      error
      entityNames
    }
  }
`;