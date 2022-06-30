import { createContext, ReactNode, useState } from "react";

interface AuthData {
  token: string | null;
  hasToken: string | null;
  saveToken: (token: string) => void;
  getToken: () => string | null;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [token, setToken] = useState<string | null>(null);
  const hasToken = localStorage.getItem("token");

  const saveToken = (token: string) => {
    setToken(token);
    localStorage.setItem("token", JSON.stringify({ token }));
  };

  const getToken = (): string | null => {
    const token = localStorage.getItem("token");
    return JSON.parse(token!).token;
  };

  return (
    <AuthContext.Provider value={{ token, hasToken, saveToken, getToken }}>
      {children}
    </AuthContext.Provider>
  );
}
