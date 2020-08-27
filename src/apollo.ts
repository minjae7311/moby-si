/** @format */

import ApolloClient, { Operation, InMemoryCache } from "apollo-boost";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  clientState: {
    defaults: {
      auth: {
        __typename: "Auth",
      },
    },
  },

  request: async (operation: Operation) => {
    operation.setContext({
      headers: {
        /*"X-JWT": localStorage.getItem("jwt") || ""*/
      },
    });
  },

  // graphql endpoint
  uri: "http://localhost:4000/graphql",
});

export default client;
