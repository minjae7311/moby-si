/** @format */

import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_USER_LIST } from "./mutation.gql";

const Main: React.SFC = () => {
  // eslint-disable-next-line
  const [page, setPage] = useState(1);
  // eslint-disable-next-line
  const [take, setTake] = useState(10);

  const { data } = useQuery(GET_USER_LIST, {
    variables: { page, take },
    onCompleted: () => {
      console.log(data);
    },
  });

  return (
    <div>
      {data && (
        <table>
          <thead>
            <tr>
              {Object.keys(data.GetUserList.users[0]).map((key, index) => (
                <th key={index}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.GetUserList.users.map((user) => {
              console.log(typeof user["fullName"]);

              return (
                <tr key={user.id}>
                  {Object.keys(user).map((key, index) => (
                    <td
                      style={{ overflow: "hidden", height: "30px" }}
                      key={index}
                    >
                      {user[key]}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Main;
