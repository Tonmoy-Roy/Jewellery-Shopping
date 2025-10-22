import React from "react";
import Image from "next/image";

export default function MarqueLIst({ product }) {
  return (
    <div className="flex items-center gap-3 mx-2">
      {/* Text on the left */}

      {/* Image on the right */}
      <div className="relative w-8 h-8 rounded overflow-hidden shadow-sm hover:scale-105 transition-transform duration-300">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      <p className="text-sm font-semibold ">{product.name}</p>
    </div>
  );
}
