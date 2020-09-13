/** @format */

import * as React from "react";
import LogoutButton from "../LogoutButton/LogoutButton";
import { Link } from 'react-router-dom';

const style: React.CSSProperties = {
  width: "98%",
  border: "solid 1px #ccc",
  margin: "1%",
  borderRadius: "4px",
  display: 'flow-root'
};

const list: React.CSSProperties = {
  padding: '10px',
  borderRight: '1px solid #ddd',
  marginTop: 10
}

const Header: React.SFC = () => {
  return (
    <div>
    <LogoutButton />
      <div style={style}>
        <h1 style={{marginLeft: '1%'}}>
          SIForm
        </h1>
        <ul
          style={{
            listStyle: 'none',
            paddingLeft: '0',
            display: 'flex',
        }}>
          <Link to="/rides"><li style={list}>Ride</li></Link>
          <Link to="/users"><li style={list}>User</li></Link>
          <li style={list}>Credit</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
