import { Button } from "./ui/button";

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
              <Button>Features</Button>
            </li>
            <li>
              <Button>Integrations</Button>
            </li>
            <li>
              <Button>Security</Button>
            </li>
            <li>
              <Button>Pricing</Button>
            </li>
            <li>
              <Button>FAQ</Button>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-5">
            <li className="">
              <button className="bg-neutral-950 text-[#38bdf8] border border-[#38bdf8] border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group cursor-pointer">
                <span className="bg-neutral-400 shadow-neutral-400 absolute top-[150%] left-0 inline-flex w-80 h-1.25 rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                Sign up
              </button>
            </li>
            <li>
              <button className="bg-neutral-950 text-[#38bdf8] border border-[#38bdf8] border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group cursor-pointer">
                <span className="bg-neutral-400 shadow-neutral-400 absolute top-[150%] left-0 inline-flex w-80 h-1.25 rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                Log in
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
