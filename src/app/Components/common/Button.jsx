// components/common/Button.jsx
import React from "react";

export default function Button({
  children = "Shop Now",
  type = "button",
  onClick,
  variant = "outline",
}) {
  const baseStyle =
    "rounded-xl font-semibold px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 lg:px-8 lg:py-3.5 transition-all";

  const variantStyle =
    variant === "white" ? "bg-white text-black hover:bg-gray-100" : "outline";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variantStyle}`}
    >
      {children}
    </button>
  );
}
