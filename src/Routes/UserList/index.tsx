/** @format */

import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_USER_LIST } from "./mutation.gql";
import LoadingForm from "../../Components/LoadingForm";

const UserList: React.SFC = () => {
  // eslint-disable-next-line
  const [page, setPage] = useState(1);
  // eslint-disable-next-line
  const [take, setTake] = useState(10);

  const { loading, data } = useQuery(GET_USER_LIST, {
    variables: { page, take },
    onCompleted: () => {
      console.log(data);
    },
  });

  const userCols = [
    "id",
    "bankAccount",
    "fullName",
    "profilePhotoUrl",
    "phoneNumber",
    "verifiedPhoneNumber",
    "gender",
    "pushToken",
    "birthDate",
    "job",
    "deviceId",
    "isRiding",
    "createdAt",
    "updatedAt",
  ];

  return (
    <div>
      {loading ? (
        <LoadingForm />
      ) : (
        <table>
          <thead>
            <tr>
              {userCols.map((col, index) => (
                <th key={index}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data &&
              data.GetUserList.users.map((user) => (
                <tr id={user.id} key={user.id}>
                  {userCols.map((col, coli) => (
                    <td key={coli}>{user[col]}</td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserList;
