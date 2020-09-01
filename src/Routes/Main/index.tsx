/** @format */
import * as React from "react";
import LogoutButton from "../../Components/LogoutButton/LogoutButton";
import { useMutation } from "@apollo/client";
import { aminResolverTest_AdminResolverTest } from "../../types/api";
import { ADMIN_RESOLVER_TEST } from "../../Routes/Main/mutation.gql";

export const Main: React.SFC = () => {
  const [adminResolverTest] = useMutation<aminResolverTest_AdminResolverTest>(
    ADMIN_RESOLVER_TEST,
    {
      onCompleted: () => {
        console.log("completed");
      },
    }
  );
  return (
    <div>
      <h1
        onClick={async () => {
          await adminResolverTest();
        }}
      >
        Hi
      </h1>
      <LogoutButton />
    </div>
  );
};
