import { FormEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import KeyIcon from "@mui/icons-material/Key";

export const InputToken = () => {
  const navigate = useNavigate();
  const { saveToken } = useContext(AuthContext);
  const [token, setToken] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const hasToken = token !== "";

    if (hasToken) {
      saveToken(token);
      navigate("/");
    }
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "40px",
        }}
      >
        <form
          style={{ display: "flex", justifyContent: "center", gap: "5px" }}
          onSubmit={handleSubmit}
        >
          <TextField
            label="insert your token here"
            sx={{ width: "500px" }}
            value={token}
            onChange={(e) => setToken(e.target.value)}
            required
          />
          <Button variant="contained" endIcon={<KeyIcon />} type="submit">
            Ok
          </Button>
        </form>

        <Typography sx={{ marginTop: "20px" }}>
          Don't know how to generate the token?{" "}
          <a
            href="https://docs.github.com/pt/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token"
            target="_blank"
          >          
            access documentation
          </a>
        </Typography>
      </Box>
    </>
  );
};
