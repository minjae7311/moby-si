/** @format */

import * as React from "react";
import LogoutButton from "../LogoutButton/LogoutButton";
import { getMenuList_GetMenuList } from "../../types/api";
import { GET_MENU_LIST } from "./mutation.gql";
import { useMutation } from "@apollo/client";

const style: React.CSSProperties = {
  width: "100%",
  border: "solid 1px #ccc",
  marginRight: "10px",
  marginBottom: "15px",
  borderRadius: "4px",
};

const Header: React.SFC = () => {
  const [getMenuList] = useMutation<getMenuList_GetMenuList>(GET_MENU_LIST, {
    onCompleted: (data) => {
      console.log(data.entityNames);
    },
  });

  return (
    <div style={style}>
      <h1>
        SIForm
      </h1>
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