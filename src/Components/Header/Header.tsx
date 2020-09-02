/** @format */

import * as React from "react";
import { getMenuList_GetMenuList } from "../../types/api";
import { GET_MENU_LIST } from "./mutation.gql";
import { useQuery } from "@apollo/client";
import LogoutButton from "../LogoutButton/LogoutButton";

const style: React.CSSProperties = {
  width: "100%",
  border: "solid 1px #ccc",
  marginRight: "10px",
  marginBottom: "15px",
  borderRadius: "4px",
};

export const Header: React.SFC = () => {
  // const { loading, data } = useQuery<getMenuList_GetMenuList>(GET_MENU_LIST, {
  //   onCompleted: (result) => {
  //     console.log("completed", result.entityNames);
  //   },
  // });

  return (
    <div style={style}>
      <h1>SIForm</h1>
      <ol>
        <li>User</li>
        <li>Ride</li>
        <li>Credit</li>
      </ol>
      <LogoutButton />
    </div>
  );
};
export default Header;
