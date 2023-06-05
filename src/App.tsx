import { Router } from "./Router";
import { AuthProvider } from "./contexts/auth";
import { CssBaseline } from "@mui/material";

const App = () => {
  return (
    <CssBaseline>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </CssBaseline>
  );
};

export default App;
