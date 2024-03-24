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
              setOpen(!open);
            }}
            className="space-y-2 md:hidden"
          >
            <div className="h-0.5 w-8 bg-[#B2BDA0]"></div>
            <div className="h-0.5 w-8 bg-[#B2BDA0]"></div>
            <div className="h-0.5 w-8 bg-[#B2BDA0]"></div>
          </div>

          <nav className="relative z-10 hidden flex-1 items-center justify-center px-4 text-neutral-700 md:flex dark:text-neutral-100">
            <ul className="md:flex">
              <li className="p-0 pr-14 transition duration-300">
                <a href="#sobre" className="text-white hover:text-[#B2BDA0]">
                  Sobre
                </a>
              </li>
              <li className="p-0 pr-14 transition duration-300">
                <a href="#tcc" className="text-white hover:text-[#B2BDA0]">
                  TCC
                </a>
              </li>
              <li className="p-0 pr-14 transition duration-300">
                <a
                  href="#tratamentos"
                  className="text-white hover:text-[#B2BDA0]"
                >
                  Tratamentos
                </a>
              </li>
              <li className="p-0 pr-14 transition duration-300">
                <a
                  href="#depoimentos"
                  className="text-white hover:text-[#B2BDA0]"
                >
                  Depoimentos
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {open && (
        <div className={`md:hidden`}>
          <ul className="fixed z-10 w-[100%] border-t-4 border-solid border-[#2F3B1C] bg-[#526534] p-[5%]">
            <li className="px-[5%] py-3 transition duration-300 hover:bg-[#8D9E6F]">
              <a href="#sobre" className="text-white hover:text-[#B2BDA0]">
                Sobre
              </a>
            </li>
            <li className="px-[5%] py-3 transition duration-300 hover:bg-[#8D9E6F]">
              <a href="#tcc" className="text-white hover:text-[#B2BDA0]">
                TCC
              </a>
            </li>
            <li className="px-[5%] py-3 transition duration-300 hover:bg-[#8D9E6F]">
              <a
                href="#tratamentos"
                className="text-white hover:text-[#B2BDA0]"
              >
                Tratamentos
              </a>
            </li>
            <li className="px-[5%] py-3 transition duration-300 hover:bg-[#8D9E6F]">
              <a
                href="#depoimentos"
                className="text-white hover:text-[#B2BDA0]"
              >
                Depoimentos
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};
