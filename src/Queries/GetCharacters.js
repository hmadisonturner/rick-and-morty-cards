import { gql } from "@apollo/client";

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

// See https://github.com/apollographql/apollo-client/issues/6679#issuecomment-663524127
function MergeCharacters(
  existing = { __typename: "Characters", results: [] },
  incoming
) {
  const results = [...existing.results, ...incoming.results].reduce(
    (array, current) => {
      return array.map((i) => i.__ref).includes(current.__ref)
        ? array
        : [...array, current];
    },
    []
  );
  return { ...incoming, results };
}

export { GET_CHARACTERS, MergeCharacters };
