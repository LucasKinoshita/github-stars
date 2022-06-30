import { gql } from "@apollo/client";

export const GET_USER = gql`
  query {
    viewer {
      login
      avatarUrl
    }
  }
`;