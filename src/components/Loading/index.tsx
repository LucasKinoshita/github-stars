import { Box, CircularProgress } from "@mui/material"

export const Loading = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress aria-label="loading" />
    </Box>
  )
}
