import { FormEvent, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/auth";
import { useQuery } from "@apollo/client";
import { GET_USER } from "../lib/queries/getUser";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";

export type User = {
  viewer: {
    login: string;
    avatarUrl: string;
  };
};

export const SearchRepositories = () => {
  const { getToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const { data, loading } = useQuery<User>(GET_USER, {
    context: {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    },
  });

  function handleUsername(event: FormEvent) {
    event.preventDefault();

    if (username !== "") {
      navigate(`/explorer-repositories/${username}`);
    }
  }

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      gap="20px"
      marginTop="50px"
    >
      <Box>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography variant="h4" color="#4F4F4F" marginTop="20px">
            Github<strong style={{ color: "#5253B8" }}>Stars</strong>
          </Typography>
        </Link>
      </Box>

      <Box width="100%">
        <form onSubmit={handleUsername}>
          <FormControl sx={{ flex: 1, width: "100%" }} variant="standard">
            <InputLabel htmlFor="username-field">github username...</InputLabel>
            <Input
              id="username-field"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton edge="end" type="submit">
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              }
              required
              onChange={(event) => setUsername(event.target.value)}
            />
          </FormControl>
        </form>
      </Box>

      <Box width="64px" height="64px">
        {loading ? (
          <CircularProgress />
        ) : (
          <img
            style={{ width: "100%", borderRadius: "50%", marginTop: "15px" }}
            src={data?.viewer.avatarUrl}
            alt={`avatar of ${data?.viewer.login}`}
            title={`avatar of ${data?.viewer.login}`}
          />
        )}
      </Box>
    </Box>
  );
};
