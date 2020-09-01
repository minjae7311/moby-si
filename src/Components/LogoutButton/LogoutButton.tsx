/** @format */

import React from "react";

const logoutButton: React.FC = () => {
  return (
    <button
      onClick={() => {
        localStorage.removeItem("jwt");
      }}
    >
      LOGOUT
    </button>
  );
};

export default logoutButton;
