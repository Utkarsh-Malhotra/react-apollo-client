import { gql } from "@apollo/client";
export const GET_CHARACTERS = gql`
query getCharacters{
  characters {
    results {
      id
      name
      image
      gender
    }
  }
}
`;

export const GET_CHARACTER = gql`
query GetCharacter($id: ID!) {
  character(id: $id) {
    name
    id
    image
    episode {
      name
      episode
    }
  }
}
`;