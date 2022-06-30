import { gql } from "@apollo/client";

export const GET_USER_SEARCH_QUERY = gql`
  query ($user: String!) {
    user(login: $user) {
      avatarUrl
      websiteUrl
      location
      name
      login
      bio
      company
    }
  }
`;