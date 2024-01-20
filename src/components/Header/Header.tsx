import logo from '@/assets/logo-psi.jpeg';

export const Header = (): React.JSX.Element => {
  return (
    <header className="sticky top-0 z-40 flex h-[80px] bg-[#526534] px-4 text-[#ffffff]">
      <div className="flex flex-1 items-center justify-between">
        <a
          href="/"
          rel="noreferrer"
          className="relative z-10 hidden flex-1 justify-center text-xs md:flex"
        >
          <img src={logo} alt="logo" className="h-12 w-12" />
        </a>

        <nav className="relative z-10 hidden flex-1 items-center justify-center text-neutral-700 md:flex dark:text-neutral-100">
          <ul className="flex">
            <li className="p-0 pr-14">
              <a href="/" className="text-white hover:text-[#B2BDA0]">
                Home
              </a>
            </li>
            <li className="p-0 pr-14">
              <a href="/ansiedade" className="text-white hover:text-[#B2BDA0]">
                Ansiedade
              </a>
            </li>
            <li className="p-0 pr-14">
              <a href="/depressao" className="text-white hover:text-[#B2BDA0]">
                Depressão
              </a>
            </li>
            <li className="p-0 pr-14">
              <a href="/tdah" className="text-white hover:text-[#B2BDA0]">
                TDAH
              </a>
            </li>
            <li className="p-0 pr-14">
              <a href="/sobre" className="text-white hover:text-[#B2BDA0]">
                Sobre
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
