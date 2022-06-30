import { useContext } from "react";
import { AuthContext } from "../contexts/auth";
import { Aside } from "../components/Aside";
import { InputToken } from "../components/InputToken";
import { Repositories } from "../components/Repositories";
import { SearchRepositories } from "../components/SearchRepositories";
import Box from "@mui/material/Box";

export const List = () => {
  const { hasToken } = useContext(AuthContext);
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

          <Box display="flex" marginTop="64px">
            <Aside />
            <Repositories />
          </Box>
        </Box>
      ) : (
        <InputToken />
      )}
    </>
  );
};
