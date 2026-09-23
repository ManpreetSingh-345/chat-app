export default function Header() {
  return (
    <>
      <header className="bg-[#172136] text-[#E0E0E0] px-10 py-5 font-[MomoTrust] flex justify-between items-center">
        <h1 className="text-3xl">Chatlify</h1>
        <div>
          <ul className="flex gap-5">
            <li>
              <button className="cursor-pointer transition duration-300 hover:bg-[#21467f]">
                Home
              </button>
            </li>
            <li>
              <button className="cursor-pointer transition duration-300 hover:bg-[#21467f]">
                About
              </button>
            </li>
            <li>
              <button className="cursor-pointer transition duration-300 hover:bg-[#21467f]">
                Contact
              </button>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
