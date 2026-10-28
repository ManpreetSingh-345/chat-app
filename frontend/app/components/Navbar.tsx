import { Button } from "./ui/button";
import { Link } from "react-router";

export const Navbar = () => {
  return (
    <header className="z-20 text-white w-full">
      <div className="mx-auto flex flex-col sm:flex-row w-full max-w-7xl items-center justify-center sm:justify-between gap-5 p-5">
        <div className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Chatlify
        </div>
        <div className="sr-only sm:not-sr-only">
          <ul className="flex gap-5">
            <li>
              <Button className="text-lg">Features</Button>
            </li>
            <li>
              <Button className="text-lg">Integrations</Button>
            </li>
            <li>
              <Button className="text-lg">Security</Button>
            </li>
            <li>
              <Button className="text-lg">Pricing</Button>
            </li>
            <li>
              <Button className="text-lg">FAQ</Button>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-5">
            <li>
              <Link
                to="/signup"
                className="bg-neutral-950 text-[#38bdf8] no-underline border border-[#38bdf8] border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group cursor-pointer"
              >
                Sign up
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                className="bg-neutral-950 text-[#38bdf8] no-underline border border-[#38bdf8] border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group cursor-pointer"
              >
                Log in
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
