import { gql } from "@apollo/client";

export const REMOVE_STAR_REPOSITORY_MUTATION = gql`
  mutation removeStar($id: ID!) {
    removeStar(input: { starrableId: $id }) {
      starrable {
        id
      }
    }
  }
`;