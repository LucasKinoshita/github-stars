import { CssBaseline } from "@mui/material";
import { AuthProvider } from "./contexts/auth";
import { Router } from "./Router";

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
