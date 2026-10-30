import Home from "./pages/Home";
import { Route, Routes } from "react-router";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import HomeLayout from "./components/HomeLayout";
import Dashboard from "./pages/Dashboard";
import useMediaQuery from "./hooks/useMediaQuery";
import MobileDashboard from "./pages/MobileDashboard";

function App() {
  const matches = useMediaQuery("(min-width: 640px)");
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
      {matches ? (
        <Route path="/dashboard" element={<Dashboard />} />
      ) : (
        <Route path="/dashboard" element={<MobileDashboard />} />
      )}
    </Routes>
  );
}

export default App;
