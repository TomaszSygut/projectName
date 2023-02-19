import React, { createContext, useContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export interface AuthContextProps {
  data: string | null;
  updateUser: (e: string | null) => void;
}

export const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<string | null>(null);
  return (
    <AuthContext.Provider value={{ data: user, updateUser: setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
