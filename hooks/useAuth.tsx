import React, { createContext, useContext } from "react";

interface Props {
  children: React.ReactNode;
}

export interface AuthContextProps {
  user: string;
}

const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider = ({ children }: Props) => {
  return (
    <AuthContext.Provider value={{ user: "John Doe" }}>
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
