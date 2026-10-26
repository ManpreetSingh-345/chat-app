export const Navbar = () => {
  return (
    <header className="z-20 text-white w-full">
      <div className="mx-auto flex flex-col sm:flex-row w-full max-w-7xl items-center justify-center sm:justify-between gap-5 p-5">
        <div className="text-3xl md:text-4xl lg:text-5xl">Chatlify</div>
        <div>
          <ul className="flex gap-5">
            <li>Features</li>
            <li>Integrations</li>
            <li>Security</li>
            <li>Pricing</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-5">
            <li>Sign Up</li>
            <li>Log In</li>
          </ul>
        </div>
      </div>
    </header>
  );
};
