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
      <li key={link.name}>
        <details>
          <summary className="cursor-pointer hover:text-primary">
            {link.name}
          </summary>
          <ul className="p-2 bg-base-100 rounded-t-none shadow-lg transition-all duration-200">
            {link.submenu.map((sub) => (
              <li key={sub.name}>
                <NavLink href={sub.path} onClick={() => setOpen(false)}>
                  {sub.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </details>
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
    <div className="navbar bg-base-100 shadow-sm px-2 sm:px-4 md:px-6 lg:px-8 relative overflow-hidden">
      {/* Left: Nav links (desktop) */}
      <div className="navbar-start hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium">
          {NAV_LINKS.map(renderMenuItem)}
        </ul>
      </div>
      {/* Center: Logo */}
      <CenterLogo />
      {/* Right: Icons */}
      <RiteIcon open={open} setOpen={setOpen} />
      {/* Mobile Dropdown */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-base-100 border-t shadow-md lg:hidden z-50">
          <ul className="menu menu-vertical px-4 py-2">
            {NAV_LINKS.map(renderMenuItem)}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
