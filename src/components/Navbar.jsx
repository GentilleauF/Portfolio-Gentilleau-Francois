import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleScrollTo = (sectionId) => {
    // Get the section element based on ID
    const targetSection = document.getElementById(sectionId);

    if (targetSection) {
      // Use smooth scroll with options
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    }
  };


  return (
    <nav className=" min-h-[80px] font-montserrat p-3 bg-bgColor text-white shadow lg:flex lg:items-center lg:justify-between lg:px-20">
      <div className="flex justify-between items-center ">
        <a href="/">
          <img className="w-14 mx-5 rounded " src="/icons/Logo.png" alt="Logo" />
        </a>
        <span className="text-xl pl-2  font-bold cursor-pointer">
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
        className={` font-medium lg:flex lg:items-center z-[1] lg:z-auto lg:static absolute w-full left-0 lg:w-auto lg:py-0 lg:space-x-10 py-4 lg:pl-0 pl-7 lg:opacity-100 ${isMenuOpen ? "opacity-100 top-[80px] bg-slate-800" : "opacity-0 top-[-400px] bg-bgColor"
          } transition-all ease-in duration-300`}
      >
        <li className="mx-4 my-6 lg:my-0">
          <a  onClick={(e) => {
            e.preventDefault();
            handleScrollTo("WhoAmI");
          }}  className="hover:text-cyan-500 duration-500 cursor-pointer ">QUI SUIS-JE</a>
        </li>

        <li className="mx-4 my-6 lg:my-0">
          <a  onClick={(e) => {
            e.preventDefault();
            handleScrollTo("Skills");
          }}  className=" hover:text-cyan-500 duration-500 cursor-pointer">COMPETENCES</a>
        </li>

        <li className="mx-4 my-6 lg:my-0">
          <a onClick={(e) => {
            e.preventDefault();
            handleScrollTo("Experience");
          }} 
          className=" hover:text-cyan-500 duration-500 cursor-pointer ">EXPERIENCES</a>
        </li>

        <li className="mx-4 my-6 lg:my-0">
          <a  onClick={(e) => {
            e.preventDefault();
            handleScrollTo("Portfolio");
          }}  className=" hover:text-cyan-500 duration-500 cursor-pointer">PROJETS</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
