import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="navbar flex w-full items-center justify-between py-6">
      <img src={logo} alt="hoobank" className="h-[32px] w-[128px]" />
      <ul className="hidden flex-1 list-none items-center justify-end sm:flex">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`cursor-pointer font-poppins text-[16px] font-normal text-white ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="flex flex-1 items-center justify-end sm:hidden">
        <img
          src={toggleMenu ? close : menu}
          alt="menu"
          className="h-[28px] w-[28px] cursor-pointer object-contain"
          onClick={() => setToggleMenu((prev) => !prev)}
        />
        <div
          className={`${
            toggleMenu ? "flex" : "hidden"
          } bg-black-gradient min-w[140px] sidebar absolute top-20 right-0 mx-4 my-2 rounded-xl p-6`}
        >
          <ul className="flex flex-1 list-none flex-col items-center justify-end gap-10">
            {navLinks.map((nav, index) => (
              <li key={nav.id} className={`cursor-pointer font-poppins text-[16px] font-normal text-white `}>
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
