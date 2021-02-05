import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import Card from "./Card";

const GET_CHARACTERS = gql`
  query GetCharacters($page: Int!) {
    characters(page: $page) {
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

export default function Page(props) {
  const [page, setPage] = useState(1);
  const { loading, error, data, fetchMore } = useQuery(GET_CHARACTERS, {
    variables: { page },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;

  return (
    <div>
      <h1>{props.type.toUpperCase()}</h1>
      {data && (
        <>
          {data.characters.results.map((character) => (
            <Card key={character.id} character={character} />
          ))}
        </>
      )}
      <button
        onClick={() => {
          setPage(page + 1);
          fetchMore({
            variables: {
              page: page,
            },
          });
          console.log(data);
        }}
      >
        {" "}
        Load More{" "}
      </button>
    </div>
  );
}
