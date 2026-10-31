import {
  createContext,
  useContext,
  type Dispatch,
  type SetStateAction,
} from "react";
import type { UserLoggedIn } from "../interfaces/User";

type AuthContextType = [UserLoggedIn, Dispatch<SetStateAction<UserLoggedIn>>];

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

const useAuth = () => {
  const user = useContext(AuthContext);

  if (user === undefined) {
    throw new Error("useAuth must be accompanied by an AuthContext.");
  }

  return user;
};

export default useAuth;
