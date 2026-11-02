import { createBrowserRouter } from "react-router";
import HomeLayout from "./components/HomeLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

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
