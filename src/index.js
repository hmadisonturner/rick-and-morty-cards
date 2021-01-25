import React from 'react';
import ReactDOM from 'react-dom';
//import { ApolloProvider } from 'react-apollo';
//import { createHttpLink } from 'apollo-link-http';
//import { InMemoryCache } from 'apollo-cache-inmemory';
//import { ApolloClient } from 'apollo-boost';
import { ApolloClient,
         InMemoryCache,
         gql
       } from '@apollo/client';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './Components/App';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
});

client.query({
  query: gql`
    query {
      characters(page: 2, filter: { name: "rick" }) {
        info {
          count
        }
        results {
          name
        }
      }
      location(id: 1) {
        id
      }
      episodesByIds(ids: [1, 2]) {
        id
      }
    }
  `
}).then(result => console.log(result))

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline>
      <App />
    </CssBaseline>
  </React.StrictMode>,
  document.getElementById('root')
);

