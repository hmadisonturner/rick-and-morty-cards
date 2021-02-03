import React from 'react';
import { useQuery,
         gql
       } from '@apollo/client';
import Card from './Card';

  const GET_STUFF = gql`
    query {
      characters(page: 2, filter: { name: "rick" }) {
        info {
          count
        }
        results {
          id
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
//}).then(result => console.log(result))

export default function Page(props) {
  let page = 1;

  const GET_MORE = gql`
    query {
      characters ( page: ${page} ) {
        info {
          next
        }
        results {
          id
          name
          status
          species
          type
          origin {
            name
          }
          location {
            name
          }
          episode {
            name
            episode
          }
        }
      }
    }
  `;



  const { data } = useQuery(GET_MORE);
  return (
    <div>
      <h1>{props.type.toUpperCase()}</h1>
    {data && (
      <>
        {data.characters.results.map((character) => <Card character={ character } />)}
      </>
    )}
    </div> 
  )
}

