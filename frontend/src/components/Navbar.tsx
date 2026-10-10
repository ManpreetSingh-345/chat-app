export const Navbar = () => {
  return (
    <>
      <header className="flex justify-between items-center p-5">
        <div className="text-3xl">Chatlify</div>
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
      </header>
    </>
  );
};
