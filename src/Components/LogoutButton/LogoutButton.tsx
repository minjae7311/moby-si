/** @format */

import React from "react";

const LogoutButton: React.FC = () => {
  return (
    <button
      onClick={() => {
        localStorage.removeItem("jwt");
        window.location.href = "/";
      }}
      style={{marginLeft:'94.5%'}}
    >
      LOGOUT
    </button>
  );
};

export default LogoutButton;