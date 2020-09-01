/** @format */

import { gql } from "@apollo/client";

export const ADMIN_RESOLVER_TEST = gql`
  mutation aminResolverTest {
    AdminResolverTest {
      ok
      error
    }
  }
`;
