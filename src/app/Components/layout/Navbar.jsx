"use client";
import { useState } from "react";
import { NAV_LINKS } from "@/app/constants/navLink";
import NavLink from "../common/NavLink";
import RiteIcon from "./Components/RiteIcon";
import CenterLogo from "./Components/CenterLogo";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const renderMenuItem = (link) =>
    link.submenu ? (
      <li key={link.name} className="relative group">
        {/* Parent link */}
        <div className="flex items-center cursor-pointer">
          <NavLink
            href={link.path}
            onClick={() => setOpen(false)}
            className="hover:text-primary flex items-center"
          >
            {link.name}
            <span className="ml-1 text-[10px]">▼</span>
          </NavLink>
        </div>

        {/* Dropdown */}
        <ul
          className="absolute top-full left-0 hidden group-hover:block 
          bg-base-100 shadow-lg rounded-md mt-1 z-9999 
          whitespace-nowrap space-x-4 px-4 py-2 border border-gray-100 md:w-[10vw]"
        >
          {link.submenu.map((sub) => (
            <li key={sub.name}>
              <NavLink
                href={sub.path}
                onClick={() => setOpen(false)}
                className="hover:text-primary text-sm"
              >
                {sub.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </li>
    ) : (
      <li key={link.name}>
        <NavLink
          href={link.path}
          onClick={() => setOpen(false)}
          className="hover:text-primary"
        >
          {link.name}
        </NavLink>
      </li>
    );

  return (
    <div className="navbar bg-base-100 shadow-sm px-3 sm:px-5 md:px-8 relative z-1000">
      {/* Left: Nav links (desktop) */}
      <div className="navbar-start hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium space-x-4">
          {NAV_LINKS.map(renderMenuItem)}
        </ul>
      </div>

      {/* Center: Logo */}
      <CenterLogo />

      {/* Right: Icons */}
      <RiteIcon open={open} setOpen={setOpen} />

      {/* Mobile Dropdown */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-base-100 border-t shadow-md lg:hidden z-1000">
          <ul className="menu menu-vertical px-4 py-2">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <NavLink
                  href={link.path}
                  onClick={() => setOpen(false)}
                  className="hover:text-primary"
                >
                  {link.name}
                </NavLink>

                {link.submenu && (
                  <ul className="pl-4 border-l mt-1 space-y-1">
                    {link.submenu.map((sub) => (
                      <li key={sub.name}>
                        <NavLink
                          href={sub.path}
                          onClick={() => setOpen(false)}
                          className="block py-1 hover:text-primary"
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
