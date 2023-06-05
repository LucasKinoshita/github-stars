import { FormEvent, useState } from "react";
import { 
  Box, 
  FormControl, 
  IconButton, 
  InputAdornment, 
  InputLabel, 
  OutlinedInput, 
  Typography 
} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search";

type InputUserProps = {
  handleUsername: (event: FormEvent, username: string) => void;
}

export const InputUser = ({ handleUsername }: InputUserProps) => {
  const [username, setUsername] = useState("");

  return (
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

    <form onSubmit={(event) => handleUsername(event, username)}>
      <FormControl
        sx={{ marginTop: "20px", width: "650px" }}
        variant="outlined"
      >
        <InputLabel htmlFor="username-field">
          insert the username...
        </InputLabel>
        <OutlinedInput
          id="username-field"
          endAdornment={
            <InputAdornment position="end">
              <IconButton edge="end" type="submit">
                <SearchIcon aria-label="button search" />
              </IconButton>
            </InputAdornment>
          }
          label="insert the username..."
          required
          onChange={(event) => setUsername(event.target.value)}
        />
      </FormControl>
    </form>
  </Box>
  )
}

