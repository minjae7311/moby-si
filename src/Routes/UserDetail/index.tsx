import React from "react";
import { useParams } from "react-router-dom";

const UserDetail: React.SFC = () => {
  // get param
  const { id } = useParams();
  console.log(id);
  return <div>User Detail</div>;
};

export default UserDetail;
