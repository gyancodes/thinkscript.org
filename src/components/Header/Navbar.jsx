import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header aria-label="Site Header" className="bg-white dark:bg-gray-900 shadow-2xl bg-transparent">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link to="/">
              <img
                src="./images/logo.png"
                alt="logo"
                className="w-32 sm:w-52"
              ></img>
            </Link>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Site Nav">
              <ul className="flex items-center gap-6 text-2xl">
                <li>
                  <Link
                    to="/"
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75 font-semibold"
                  >
                    About
                  </Link>
                  {/* <a
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href="/"
                  >
                    About
                  </a> */}
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75 font-semibold"
                  >
                    Events
                  </Link>
                  {/* <a
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href="/"
                  >
                    About
                  </a> */}
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
