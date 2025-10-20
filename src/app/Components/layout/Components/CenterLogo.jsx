import React from 'react'
import { BRAND_NAME } from "@/app/constants/text";
import { Gem } from "lucide-react";
import NavLink from '../../common/NavLink';
export default function CenterLogo() {
  return (
<div className="navbar-center flex-1 lg:flex-none text-center">
        <NavLink href="/" className="flex items-center justify-center gap-2">
          <Gem className="w-6 h-6 text-amber-500" strokeWidth={1.5} />
          <span className="text-lg text-gray-600 tracking-normal sm:tracking-widest truncate">
            {BRAND_NAME}
          </span>
        </NavLink>
      </div>
  )
}
