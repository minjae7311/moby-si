/** @format */

import { gql } from "apollo-boost";

/**
 * @todo Found @client directives in a query but no ApolloClient resolvers were specified. This means ApolloClient local resolver handling has been disabled, and @client directives will be passed through to your link chain.
 */
export const IS_LOGGED_IN = gql`
  {
    auth {
      isLoggedIn 
    }
  }
`;
