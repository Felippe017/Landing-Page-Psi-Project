import logo from '@/assets/FundoClaro_01.svg';
import { useState } from 'react';

export const Header = (): React.JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <header className="sticky top-0 z-40 flex h-[80px] bg-[#526534] px-4 text-[#ffffff]">
        <div className="flex flex-1 items-center justify-between">
          <a
            href="/"
            rel="noreferrer"
            className="relative z-10 flex-1 justify-center text-xs md:flex"
          >
            <img src={logo} alt="logo" className="h-14 w-16" />
          </a>

          <div
            onClick={() => {
              setOpen(prevOpen => !prevOpen);
            }}
            className="space-y-2 md:hidden"
          >
            <div className="h-0.5 w-8 bg-[#B2BDA0]"></div>
            <div className="h-0.5 w-8 bg-[#B2BDA0]"></div>
            <div className="h-0.5 w-8 bg-[#B2BDA0]"></div>
          </div>

          <nav className="relative z-10 hidden flex-1 items-center justify-center px-4 text-neutral-700 md:flex dark:text-neutral-100">
            <ul className="md:flex">
              <li className="p-0 pr-14">
                <a href="/" className="text-white hover:text-[#B2BDA0]">
                  Sobre
                </a>
              </li>
              <li className="p-0 pr-14">
                <a
                  href="/ansiedade"
                  className="text-white hover:text-[#B2BDA0]"
                >
                  T.C.C
                </a>
              </li>
              <li className="p-0 pr-14">
                <a
                  href="/depressao"
                  className="text-white hover:text-[#B2BDA0]"
                >
                  Tratamentos
                </a>
              </li>
              <li className="p-0 pr-14">
                <a href="/tdah" className="text-white hover:text-[#B2BDA0]">
                  Depoimentos
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {!open && (
        <div className={`md:hidden`}>
          <ul className="w-[100%] border-t-4 border-solid border-[#2F3B1C] bg-[#526534] p-[5%]">
            <li className="px-[5%] py-3">
              <a href="/" className="text-white hover:text-[#B2BDA0]">
                Home
              </a>
            </li>
            <li className="px-[5%] py-3">
              <a href="/ansiedade" className="text-white hover:text-[#B2BDA0]">
                Ansiedade
              </a>
            </li>
            <li className="px-[5%] py-3">
              <a href="/depressao" className="text-white hover:text-[#B2BDA0]">
                Depressão
              </a>
            </li>
            <li className="px-[5%] py-3">
              <a href="/tdah" className="text-white hover:text-[#B2BDA0]">
                TDAH
              </a>
            </li>
            <li className="px-[5%] py-3">
              <a href="/sobre" className="text-white hover:text-[#B2BDA0]">
                Sobre
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
