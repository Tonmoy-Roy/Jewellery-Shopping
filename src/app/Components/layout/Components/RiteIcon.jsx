import React from 'react'
import ButtonIcon from "@/app/components/common/ButtonIcon";
import { Search, ShoppingBag, Heart, User, Menu,  } from "lucide-react";
export default function RiteIcon({setOpen, open}) {
  return (
      <div className="navbar-end flex items-center ">
            {/* Hide some icons on mobile to save space */}
            <ButtonIcon Icon={Search} />
            <ButtonIcon Icon={ShoppingBag} className="hidden sm:flex" />
            <ButtonIcon Icon={Heart} className="hidden sm:flex" />
            <ButtonIcon Icon={User} className="hidden sm:flex" />
            <div className="lg:hidden">
              <ButtonIcon Icon={Menu} onClick={() => setOpen(!open)} />
            </div>
          </div>
  )
}
