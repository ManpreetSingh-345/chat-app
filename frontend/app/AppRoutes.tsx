import {
  createBrowserRouter,
  redirect,
  type LoaderFunctionArgs,
} from "react-router";
import HomeLayout from "./components/HomeLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import api from "./api/api";
import { createContext } from "react-router";
import { type UserLoggedIn } from "./interfaces/User";

const authContext = createContext<UserLoggedIn | null>();

const authMiddleware = async ({ context }: LoaderFunctionArgs) => {
  const refreshRes = await api.get("/auth/refresh");
  if (refreshRes.status === 401 || refreshRes.status === 500) {
    throw redirect("/login");
  }
  context.set(authContext, {
    username: refreshRes.data.username,
    accessToken: refreshRes.data.accessToken,
  });
};

const dashboardLoader = async ({ context }: LoaderFunctionArgs) => {
  const user = context.get(authContext);

  return { user };
};

const AppRoutes = createBrowserRouter([
  {
    Component: HomeLayout,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/signup",
        Component: Signup,
      },
    ],
  },
  {
    path: "/dashboard",
    Component: Dashboard,
  },
]);

export default AppRoutes;
