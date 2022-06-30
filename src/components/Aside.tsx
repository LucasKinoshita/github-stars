import { useContext } from "react";
import { AuthContext } from "../contexts/auth";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_USER_SEARCH_QUERY } from "../lib/queries/getUserSearch";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import ApartmentIcon from "@mui/icons-material/Apartment";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import LanguageIcon from "@mui/icons-material/Language";

type User = {
  user: {
    name: string;
    login: string;
    bio: string;
    company: string;
    location: string;
    websiteUrl: string;
    avatarUrl: string;
  };
};

export const Aside = () => {
  const { getToken } = useContext(AuthContext);
  const { username } = useParams<{ username: string }>();
  const { data, loading, error } = useQuery<User>(GET_USER_SEARCH_QUERY, {
    variables: {
      user: username,
    },
    context: {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    },
  });

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
    return <div />;
  }

  return (
    <Box sx={{ width: "300px", height: "531px", marginTop: "34px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "272px",
          background: "#5253B9",
          borderTopLeftRadius: "5px",
        }}
      >
        <Box
          sx={{
            width: "160px",
            height: "160px",
            margin: "20px",
          }}
        >
          <img
            style={{ maxWidth: "100%", borderRadius: "50%" }}
            src={data?.user.avatarUrl}
            alt={`avatar of ${data?.user.login}`}
            title={`avatar of ${data?.user.login}`}
          />
        </Box>

        <Typography sx={{ color: "#fff", fontWeight: "medium" }}>
          {data?.user.name}
        </Typography>
        <Typography sx={{ color: "#fff" }}>{data?.user.login}</Typography>
      </Box>
      <Box
        sx={{
          color: "#fff",
          background: "#5265B9",
          padding: "30px 16px",
          borderBottomLeftRadius: "5px",
        }}
      >
        <Typography variant="body2" sx={{ marginBottom: "20px" }}>
          {data?.user.bio}
        </Typography>

        {data?.user.company && (
          <Box
            sx={{
              display: "flex",
              gap: "5px",
              alignItems: "center",
              marginY: "10px",
            }}
          >
            <ApartmentIcon sx={{ width: "20px" }} />
            <Typography variant="caption">{data?.user.company}</Typography>
          </Box>
        )}

        {data?.user.location && (
          <Box
            sx={{
              display: "flex",
              gap: "5px",
              alignItems: "center",
              marginY: "10px",
            }}
          >
            <AddLocationAltIcon sx={{ width: "20px" }} />
            <Typography variant="caption">{data?.user.location}</Typography>
          </Box>
        )}

        {data?.user.websiteUrl && (
          <Box
            sx={{
              display: "flex",
              gap: "5px",
              alignItems: "center",
              marginY: "10px",
            }}
          >
            <LanguageIcon sx={{ width: "20px" }} />
            <Typography variant="caption">
              <Link
                sx={{ color: "white" }}
                href={data?.user.websiteUrl}
                rel="noopener"
                target="_blank"
              >
                {data?.user.websiteUrl}
              </Link>
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};
