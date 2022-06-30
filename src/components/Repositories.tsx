import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../contexts/auth";
import { useQuery } from "@apollo/client";
import { GET_STARRED_REPOSITORIES_QUERY } from "../lib/queries/getStarredRepositories";
import { CardRepository } from "./CardRepository";
import { NotFoundIcon } from "./NotFoundIcon";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

type StarredRepository = {
  user: {
    starredRepositories: {
      nodes: [
        {
          id: string;
          description: string;
          name: string;
          stargazerCount: number;
          viewerHasStarred: boolean;
        }
      ];
    };
  };
};

export const Repositories = () => {
  const { getToken } = useContext(AuthContext);
  const { username } = useParams<{ username: string }>();

  const { data, loading, error } = useQuery<StarredRepository>(
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

  if (error) {
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
        <NotFoundIcon />
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
