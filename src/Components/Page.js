import React from 'react';
import { useQuery,
         gql
       } from '@apollo/client';

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
  const { data } = useQuery(GET_STUFF);
  return (
    <div>
      <h1>{props.type}</h1>
    {data && (
      <>
        {data.characters.results.map((character) => <div key={character.id} >{character.name}</div>)}
      </>
    )}
    </div> 
  )
}

