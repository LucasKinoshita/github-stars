import { FormEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/auth";
import { InputToken } from "../components/InputToken";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";

export const Search = () => {
  const { hasToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  function handleUsername(event: FormEvent) {
    event.preventDefault();
    const hasUsername = username !== "";

    if (hasUsername) {
      navigate(`/explorer-repositories/${username}`);
    }
  }

  return (
    <>
      {hasToken ? (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="80vh"
          padding="20px"
        >
          <Typography variant="h4" color="#4F4F4F">
            Github<strong style={{ color: "#5253B8" }}>Stars</strong>
          </Typography>

          <form onSubmit={handleUsername}>
            <FormControl
              sx={{ marginTop: "20px", width: "650px" }}
              variant="outlined"
            >
              <InputLabel htmlFor="username-field">
                github username...
              </InputLabel>
              <OutlinedInput
                id="username-field"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton edge="end" type="submit">
                      <SearchIcon />
                    </IconButton>
                  </InputAdornment>
                }
                label="github username..."
                required
                onChange={(event) => setUsername(event.target.value)}
              />
            </FormControl>
          </form>
        </Box>
      ) : (
        <InputToken />
      )}
    </>
  );
};
