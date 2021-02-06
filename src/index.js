import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import CssBaseline from "@material-ui/core/CssBaseline";
import App from "./Components/App";
import { MergeCharacters } from "./Queries/GetCharacters.js"

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          characters: {
            keyArgs: false,
            merge: MergeCharacters,
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
