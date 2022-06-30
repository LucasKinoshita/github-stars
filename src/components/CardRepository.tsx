import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../contexts/auth";
import { useMutation } from "@apollo/client";
import { REMOVE_STAR_REPOSITORY_MUTATION } from "../lib/mutations/removeStarRepository";
import { STAR_REPOSITORY_MUTATION } from "../lib/mutations/starRepository";
import { GET_STARRED_REPOSITORIES_QUERY } from "../lib/queries/getStarredRepositories";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { StarBorder } from "@mui/icons-material";

type CardRepositoryProps = {
  id: string;
  name: string;
  description: string;
  stargazerCount: string;
  viewerHasStarred: boolean;
};

export const CardRepository = ({
  id,
  name,
  description,
  stargazerCount,
  viewerHasStarred,
}: CardRepositoryProps) => {
  const { getToken } = useContext(AuthContext);
  const { username } = useParams<{ username: string }>();

  const [starRepository] = useMutation(STAR_REPOSITORY_MUTATION, {
    refetchQueries: [
      {
        query: GET_STARRED_REPOSITORIES_QUERY,
        variables: {
          user: username,
        },
        context: {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        },
      },
    ],
    context: {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    },
  });

  const [removeStarRepository] = useMutation(REMOVE_STAR_REPOSITORY_MUTATION, {
    refetchQueries: [
      {
        query: GET_STARRED_REPOSITORIES_QUERY,
        variables: {
          user: username,
        },
        context: {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        },
      },
    ],
    context: {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    },
  });

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      boxShadow="1px 1px 5px rgba(0, 0, 0, 0.15)"
      borderRadius="5px"
      width="800px"
      marginY="20px"
      padding="20px"
    >
      <Box>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2">{description}</Typography>
        <Box display="flex" gap="5px" alignItems="center">
          <StarBorder sx={{ width: "16px", color: "#5152B6" }} />
          {stargazerCount}
        </Box>
      </Box>

      {viewerHasStarred ? (
        <Button
          sx={{ textTransform: "lowercase", width: "90px" }}
          variant="contained"
          onClick={async () =>
            await removeStarRepository({ variables: { id } })
          }
        >
          unstar
        </Button>
      ) : (
        <Button
          sx={{ textTransform: "lowercase", width: "90px" }}
          variant="outlined"
          onClick={async () => await starRepository({ variables: { id } })}
        >
          star
        </Button>
      )}
    </Box>
  );
};
