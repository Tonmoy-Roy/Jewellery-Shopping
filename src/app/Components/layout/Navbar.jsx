"use client";
import { useState } from "react";
import NavLink from "../common/NavLink";
import { NAV_LINKS } from "./Components/navLink";
import RiteIcon from "./Components/RiteIcon";
import CenterLogo from "./Components/CenterLogo";
import submenuIcon from '../../../../public/images/OlightAllImage/1HomePage/bottom.png';
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  console.log("FULL NAV_LINKS DATA: ", NAV_LINKS);

  const renderMenuItem = (link) => {
    // STRICT CHECK: Verify submenu is an Array AND has items
    const hasSubmenu = Array.isArray(link.submenu) && link.submenu.length > 0;

    // DEBUGGER: This will print in your browser console so we can see what's happening
    console.log(`Checking link: ${link.name} | Has Submenu? ${hasSubmenu}`);

    return hasSubmenu ? (
      <li key={link.name} className="relative group">
        {/* Parent link */}
        <div className="flex items-center cursor-pointer h-full py-2">
          <NavLink
            href={link.path}
            onClick={() => setOpen(false)}
            className="hover:text-primary flex items-center transition-colors duration-300"
          >
            <p className="mr-1 mb-1">{link.name}</p>
            {/* Animated Arrow - Flips 180 degrees on hover */}
            <Image
              src={submenuIcon}
              alt="Dropdown Arrow"
              className="h-3 w-3 transition-transform duration-300 group-hover:rotate-180"
            />
          </NavLink>
        </div>

        {/* 
      Dropdown Container
      - Uses 'pt-4' (padding-top) as an invisible bridge so the mouse doesn't lose hover
      - Animates opacity (fade in) and translation (slides up into place)
    */}
        <div className="absolute top-[100%] left-0 pt-4 z-[9999] opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out">
          <ul
            className="w-48 bg-base-100 shadow-[0_10px_30px_rgba(0,0,0,0.08)] rounded-xl border border-gray-100 p-2 relative"
          >
            {/* Optional decorative pointer arrow on top of the box */}
            <div className="absolute -top-2 left-6 w-4 h-4 bg-base-100 border-t border-l border-gray-100 rotate-45 z-[-1]"></div>

            {link.submenu.map((sub) => (
              <li key={sub.name} className="mb-1 last:mb-0">
                <NavLink
                  href={sub.path}
                  onClick={() => setOpen(false)}
                  // Dynamic Item Hover - slides right slightly and adds background highlight
                  className="block px-4 py-2 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-all duration-200 hover:translate-x-1.5"
                >
                  {sub.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </li>
    ) : (
      <li key={link.name} className="py-2">
        <NavLink
          href={link.path}
          onClick={() => setOpen(false)}
          className="hover:text-primary transition-colors duration-300"
        >
          {link.name}
        </NavLink>
      </li>
    );
  };

  return (
    <div className="navbar bg-base-100 shadow-sm px-3 sm:px-5 md:px-8 relative z-[1000]">
      <div className="navbar-start">
        <div className="ml-8">
          <CenterLogo />
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium space-x-4">
          {NAV_LINKS.map(renderMenuItem)}
        </ul>
      </div>

      <RiteIcon open={open} setOpen={setOpen} />

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

                {Array.isArray(link.submenu) && link.submenu.length > 0 && (
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