import React from "react";
import { Link } from "react-router-dom";
import { BsInstagram, BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer aria-label="Site Footer" className="bg-gray-900">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:gap-8">
          <div className="text-white"></div>

          <div className="grid grid-cols-2 gap-8 mt-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-white">Organization</p>

              <nav aria-label="Footer Navigation - Services" className="mt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link className="text-white transition hover:opacity-75">
                      About
                    </Link>
                  </li>
                </ul>
              </nav>

              <nav aria-label="Footer Navigation - Services" className="mt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link className="text-white transition hover:opacity-75" to="/gallery">
                      Gallery
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-white">Community</p>

              <nav aria-label="Footer Navigation - Company" className="mt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link className="text-white transition hover:opacity-75">
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link className="text-white transition hover:opacity-75">
                      Mentorship
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-white">Socials</p>

              <nav aria-label="Footer Navigation - Company" className="mt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link
                      className="text-white transition hover:opacity-75"
                      to="https://www.instagram.com/thinkscriptorg/"
                      target="_blank"
                    >
                      Instagram
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-white transition hover:opacity-75"
                      to="https://www.linkedin.com/company/thinkscript-orgnization"
                    >
                      Linkedin
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-white transition hover:opacity-75"
                      to="https://twitter.com/thinkscriptorg"
                    >
                      Twitter
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-white transition hover:opacity-75"
                      to="https://github.com/thinkscript-organisation"
                    >
                      Github
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-white">Contact</p>

              <nav aria-label="Footer Navigation - Legal" className="mt-6">
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link className="text-white transition hover:opacity-75">
                      thinkscriptorg@gmail.com
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <ul className="flex justify-start col-span-2 gap-6 lg:col-span-5 lg:justify-end">
              <li>
                <a
                  href="https://www.instagram.com/thinkscriptorg/"
                  className="text-white transition hover:opacity-75"
                >
                  <BsInstagram />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/thinkscriptorg"
                  className="text-white transition hover:opacity-75"
                >
                  <BsTwitter />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/thinkscript-organisation"
                  className="text-white transition hover:opacity-75"
                >
                  <BsGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/thinkscript-orgnization"
                  className="text-white transition hover:opacity-75"
                >
                  <BsLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-gray-100">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <p className="text-xs text-left text-white font-semibold">
              &copy; 2023. ThinkScript. All rights reserved.
            </p>
            {/*
            <nav aria-label="Footer Navigation - Support">
              <ul className="flex flex-wrap justify-start gap-4 text-xs lg:justify-end">
                <li>
                  <a
                    href="#"
                    className="text-gray-500 transition hover:opacity-75"
                  >
                    Terms & Conditions
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-500 transition hover:opacity-75"
                  >
                    Privacy Policy
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-500 transition hover:opacity-75"
                  >
                    Cookies
                  </a>
                </li>
              </ul>
            </nav> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
