import { useContext } from "react";
import { AuthContext } from "../contexts/auth";
import { Aside } from "../components/Aside";
import { InputToken } from "../components/InputToken";
import { Repositories } from "../components/Repositories";
import { SearchRepositories } from "../components/SearchRepositories";
import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_USER_SEARCH_QUERY } from "../lib/queries/getUserSearch";
import { User } from "../types/User";
import { CircularProgress } from "@mui/material";

export type UserProps = {
  user: User
}

export const List = () => {
  const { hasToken, getToken } = useContext(AuthContext);
  const { username } = useParams<{ username: string }>();

  const { data, loading: loadingUser, error: errorUser } = useQuery<UserProps>(GET_USER_SEARCH_QUERY, {
    variables: {
      user: username,
    },
    context: {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    },
  });

  if (errorUser) return <div>Don't have user.</div>

  return (
    <>
      {hasToken ? (
        <Box
          maxWidth="1134px"
          margin="0 auto"
          display="flex"
          flexDirection="column"
          padding="20px"
        >
          <SearchRepositories />

        {loadingUser ? (
           <Box
           sx={{
             width: "100%",
             display: "flex",
             justifyContent: "center",
             alignItems: "center",
           }}
         >
           <CircularProgress />
         </Box>
        )
        : (
           <Box display="flex" marginTop="64px">
            <Aside user={data!.user}  />
            <Repositories />
          </Box>
        )
      }
        </Box>
      ) : (
        <InputToken />
      )}
    </>
  );
};
