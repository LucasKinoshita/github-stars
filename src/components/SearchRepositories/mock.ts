import { GET_USER } from "../../lib/queries/getUser";

export const userMock = {
  request: {
    query: GET_USER,
  },
  result: {
    data: {
      viewer: {
        avatarUrl: "avatarUrl",
        login: "login name",
        __typename: "User"
      }
    },
  },
};
