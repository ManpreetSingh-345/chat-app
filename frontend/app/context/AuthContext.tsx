import { AuthContext } from "../hooks/useAuth";
import { useState, type ReactNode } from "react";
import { type UserLoggedIn } from "../interfaces/User.ts";

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const currentUser = useState<UserLoggedIn>({
    username: "No user",
    accessToken: "",
  });
  return (
    <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
  );
}
