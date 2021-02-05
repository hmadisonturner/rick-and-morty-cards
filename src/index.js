import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import CssBaseline from "@material-ui/core/CssBaseline";
import App from "./Components/App";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          characters: {
            keyArgs: false,
            merge: (
              existing = { __typename: "Characters", results: [] },
              incoming
            ) => {
              const results = [...existing.results, ...incoming.results].reduce(
                (array, current) => {
                  return array.map((i) => i.__ref).includes(current.__ref)
                    ? array
                    : [...array, current];
                },
                []
              );
              return { ...incoming, results };
              //See https://github.com/apollographql/apollo-client/issues/6679#issuecomment-663524127
            },
          },
        },
      },
    },
  }),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <CssBaseline>
        <App />
      </CssBaseline>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
