"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({
  href,
  children,
  className = "mr-10",
  activeClass = "text-primary font-semibold",
  onClick,
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${className} ${isActive ? activeClass : ""}`.trim()}
      suppressHydrationWarning
    >
      {children}
    </Link>
  );
};

export default NavLink;
