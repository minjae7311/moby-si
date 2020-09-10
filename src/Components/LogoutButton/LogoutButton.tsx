/** @format */

import React from "react";

const LogoutButton: React.FC = () => {
  return (
    <button
      onClick={() => {
        localStorage.removeItem("jwt");
        window.location.href = "/";
      }}
    >
      LOGOUT
    </button>
  );
};

export default LogoutButton;