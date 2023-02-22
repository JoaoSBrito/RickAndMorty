import { useState } from "react";
import { FiMenu } from "react-icons/fi";

export function NavBar() {
  const [openNavbar, setOpenNavbar] = useState(false);
  return (
    <header className="h-auto w-screen bg-zinc-700 text-white px-8 py-2">
      <div
        className="flex flex-wrap w-full items-center justify-between px-[8%]
      xl:mx-auto xl:max-w-7xl"
      >
        <img className="w-16" src="src/assets/icon.svg" alt="" />

        <FiMenu
          className="lg:hidden block h-6 w-6 cursor-pointer"
          onClick={() => setOpenNavbar(!openNavbar)}
        />

        <nav
          className={`${
            openNavbar ? "block" : "hidden"
          } lg:flex lg:w-auto items-center w-full`}
        >
          <ul className="lg:flex lg:justify-between text-center text-base text-white">
            <li>
              <a
                href="#"
                className="lg:px-5 py-2 block hover:text-[#1ABED6] hover:scale-105 font-semibold"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="lg:px-5 py-2 block hover:text-[#1ABED6] hover:scale-105 font-semibold"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="https://github.com/JoaoSBrito/RickAndMorty"
                target={"_blank"}
                className="lg:px-5 py-2 block hover:text-[#1ABED6] hover:scale-105 font-semibold"
              >
                Project
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
