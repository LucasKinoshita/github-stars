import { gql } from "@apollo/client";

export const STAR_REPOSITORY_MUTATION = gql`
  mutation addStar($id: ID!) {
    addStar(input: { starrableId: $id }) {
      starrable {
        id
      }
    }
  }
`;