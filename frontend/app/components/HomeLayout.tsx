import { Outlet } from "react-router";
import { WavyBackground } from "./ui/wavy-background";
import { Navbar } from "./Navbar";

const HomeLayout = () => {
  return (
    <WavyBackground
      className="flex h-full w-full flex-col"
      waveWidth={100}
      blur={10}
    >
      <Navbar />
      <Outlet />
    </WavyBackground>
  );
};

export default HomeLayout;
