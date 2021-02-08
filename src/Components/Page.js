import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import Grid from '@material-ui/core/Grid';
import CharacterCard from "./CharacterCard";
import { GET_CHARACTERS } from "../Queries/GetCharacters.js"

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
    <Grid container spacing={1}>
      {data && (
        <>
          {data.characters.results.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </>
      )}
    </Grid>
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
