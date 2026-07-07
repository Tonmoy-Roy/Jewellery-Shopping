"use client";

import { useState } from "react";
import Image from "next/image";
import NavLink from "../common/NavLink";
import { NAV_LINKS } from "./Components/navLink";
import RiteIcon from "./Components/RiteIcon";
import CenterLogo from "./Components/CenterLogo";
import submenuIcon from "../../../../public/images/OlightAllImage/1HomePage/bottom.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar bg-base-100 shadow-sm px-3 sm:px-5 md:px-8 relative">
      {/* Logo */}
      <div className="navbar-start">
        <div className="ml-8">
          <CenterLogo />
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-4 font-medium">
          {NAV_LINKS.map((link) => (
            <li key={link.name} className="relative group">
              <NavLink
                href={link.path}
                className="flex items-center gap-1 py-2 hover:text-primary"
              >
                {link.name}

                {link.submenu?.length > 0 && (
                  <Image
                    src={submenuIcon}
                    alt="arrow"
                    className="w-3 h-3 transition-transform group-hover:rotate-180"
                  />
                )}
              </NavLink>

              {link.submenu?.length > 0 && (
                <ul className="absolute left-0 top-full hidden group-hover:block w-48 bg-base-100 shadow-lg rounded-lg p-2 z-50">
                  {link.submenu.map((sub) => (
                    <li key={sub.name}>
                      <NavLink
                        href={sub.path}
                        className="block px-4 py-2 hover:text-primary"
                      >
                        {sub.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Icons */}
      <RiteIcon open={open} setOpen={setOpen} />

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-base-100 shadow-md lg:hidden">
          <ul className="menu p-4">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <NavLink
                  href={link.path}
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </NavLink>

                {link.submenu?.length > 0 && (
                  <ul className="ml-4 mt-1">
                    {link.submenu.map((sub) => (
                      <li key={sub.name}>
                        <NavLink
                          href={sub.path}
                          onClick={() => setOpen(false)}
                          className="block py-1"
                        >
                          {sub.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;