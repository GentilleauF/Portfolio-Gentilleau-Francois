import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" font-montserrat p-3 bg-white shadow lg:flex lg:items-center lg:justify-between lg:px-20">
      <div className="flex justify-between items-center ">
        <a href="/">
          <img className="w-14" src="/icons/Logo.png" alt="Logo" />
        </a>
        <span className="text-xl pl-2 font-bold cursor-pointer">
          <a href="/">GENTILLEAU François</a>
        </span>
        
      <span
        className="text-3xl cursor-pointer mx-2 lg:hidden block"
        onClick={toggleMenu}
      >
        <div className="w-6 h-6">
          <Bars3Icon name={isMenuOpen ? "close" : "menu"} />
        </div>
        <img name={isMenuOpen ? "close" : "menu"} src="" alt="" />

        <ion-icon name={isMenuOpen ? "close" : "menu"}></ion-icon>
      </span>
      </div>

      <ul
        className={` font-medium lg:flex lg:items-center z-[1] lg:z-auto lg:static absolute bg-white w-full left-0 lg:w-auto lg:py-0 lg:space-x-10 py-4 lg:pl-0 pl-7 lg:opacity-100 ${
          isMenuOpen ? "opacity-100 top-[80px]" : "opacity-0 top-[-400px]"
        } transition-all ease-in duration-200`}
      >
        <li className="mx-4 my-6 lg:my-0">
          <a href="#WhoAmI" className="hover:text-cyan-500 duration-500 ">QUI SUIS-JE</a>
        </li>

        <li className="mx-4 my-6 lg:my-0">
          <a href="/Galerie" className="hover:text-cyan-500 duration-500">DIPLOMES</a>
        </li>

        <li className="mx-4 my-6 lg:my-0">
          <a href="/Evenements" className=" hover:text-cyan-500 duration-500">COMPETENCES</a>
        </li>

        <li className="mx-4 my-6 lg:my-0">
          <a href="/Contact" className=" hover:text-cyan-500 duration-500">EXPERIENCE</a>
        </li>

        <li className="mx-4 my-6 lg:my-0">
          <a href="/Contact" className=" hover:text-cyan-500 duration-500">CONTACT</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
