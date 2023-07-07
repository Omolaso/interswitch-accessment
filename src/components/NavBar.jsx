import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../img/logo_starwars.png";

const NavBar = () => {
  const [modal, setModal] = useState(false);

  const removeModal = () => {
    setModal(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", removeModal);
    window.addEventListener("resize", removeModal);
  }, []);

  return (
    <nav className="min-h-[8vh] flex flex-row items-center justify-between">
      <Link href="/">
        <img src={logo} alt="logo" width={80} height={80} />
      </Link>

      <ul className="hidden lg:flex flex-row items-center justify-between flex-[0.3]">
        <li>
          <Link href="/" className="hover:opacity-70 duration-300 ease-linear">
            Characters
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:opacity-70 duration-300 ease-linear">
            Starships
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:opacity-70 duration-300 ease-linear">
            Planets
          </Link>
        </li>
      </ul>

      <div className="block lg:hidden relative">
        <button type="button" onClick={() => setModal(true)}>
          <RxHamburgerMenu className="w-8 h-8" />
        </button>

        <div
          className={
            modal
              ? "fixed z-50 right-0 top-0 h-full bg-[#1D1A2B] flex flex-col gap-4 flex-[0.3] max-w-[70%] w-full duration-500 ease-in-out p-4"
              : "fixed z-50 right-[-100%] h-full top-0 bg-[#1D1A2B] flex flex-col gap-4 flex-[0.3] max-w-[70%] w-full duration-500 ease-in-out p-4"
          }
        >
          <button
            type="button"
            onClick={() => setModal(false)}
            className=" self-end"
          >
            <AiOutlineClose className=" w-10 h-10" />
          </button>
          <ul className="flex flex-col gap-8 text-lg">
            <li>
              <Link href="/" onClick={() => setModal(false)}>
                Characters
              </Link>
            </li>
            <li>
              <Link href="/" onClick={() => setModal(false)}>
                Starships
              </Link>
            </li>
            <li>
              <Link href="/" onClick={() => setModal(false)}>
                Planets
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
