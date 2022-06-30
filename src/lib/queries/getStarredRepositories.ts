import { gql } from "@apollo/client";

export const GET_STARRED_REPOSITORIES_QUERY = gql`
  query MyQuery($user: String!) {
    user(login: $user) {
      starredRepositories(last: 5) {
        nodes {
          id
          name
          description
          stargazerCount
          viewerHasStarred
        }
      }
    }
  }
`;