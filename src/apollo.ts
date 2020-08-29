/** @format */

import ApolloClient, { Operation, InMemoryCache } from "apollo-boost";

const client = new ApolloClient({
  // graphql endpoint
  uri: "http://localhost:4000/graphql",

  cache: new InMemoryCache(),

  clientState: {
    defaults: {
      auth: {
        __typename: "Auth",
        isLoggedIn: Boolean(localStorage.getItem("jwt")),
      },
    },
  },

  resolvers: {
    Mutation: {
      logUserIn: (_, { token }, { cache }) => {
        localStorage.setItem("jwt", token);
        cache.writeData({
          data: {
            auth: {
              __typename: "Auth",
              isLoggedIn: true,
            },
          },
        });

        console.log("Im executing...");

        return null;
      },

      // user logout
      // logUserOut: (_, __, { cache }) => {
      //   localStorage.removeItem("jwt");
      //   cache.writeData({
      //     data: {
      //       auth: {
      //         __typename: "Auth",
      //         isLoggedIn: false,
      //       },
      //     },
      //   });

      //   return null;
      // },
    },
  },

  request: async (operation: Operation) => {
    operation.setContext({
      headers: {
        "X-JWT": localStorage.getItem("jwt") || "",
      },
    });
  },
});

export default client;
