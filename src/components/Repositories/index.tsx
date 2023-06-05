import { useContext } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { AuthContext } from "../../contexts/auth";
import { GET_STARRED_REPOSITORIES_QUERY } from "../../lib/queries/getStarredRepositories";
import { CardRepository } from "../CardRepository";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { StarredRepository } from "../../types/Repository";

type StarredRepositoryProps = {
  user: {
    starredRepositories: {
      nodes: StarredRepository[]
    };
  };
};

export const Repositories = () => {
  const { getToken } = useContext(AuthContext);
  const { username } = useParams<{ username: string }>();

  const { data, loading } = useQuery<StarredRepositoryProps>(
    GET_STARRED_REPOSITORIES_QUERY,
    {
      variables: {
        user: username,
      },
      context: {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      },
    }
  );

  const hasRepositories = data?.user.starredRepositories.nodes.length === 0

  if (loading) {
    return (
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
    );
  }

  if (hasRepositories) {
    return (
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
        }}
      >
        <p>No repositories.</p>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        width: "100%",
        background: "white",
        height: "100%",
        minHeight: "100vh",
        boxShadow: "4px 4px 40px rgba(0, 0, 0, 0.25)",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {data?.user.starredRepositories.nodes.map((starredRepository) => (
        <CardRepository
          key={starredRepository.id}
          id={starredRepository.id}
          name={starredRepository.name}
          description={starredRepository.description}
          stargazerCount={starredRepository.stargazerCount.toString()}
          viewerHasStarred={starredRepository.viewerHasStarred}
        />
      ))}
    </Box>
  );
};
