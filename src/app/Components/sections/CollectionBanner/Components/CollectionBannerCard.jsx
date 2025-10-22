import React from "react";
import Image from "next/image";

export default function CollectionBannerCard({ col }) {
  return (
    <div className="relative w-full aspect-[3/4] overflow-hidden group ">
      {/* Responsive Image */}
      <Image
        src={col.img}
        alt={col.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 
               (max-width: 1200px) 50vw, 
               33vw"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-end text-center p-4 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
        <h3 className="text-white text-lg font-semibold">{col.title}</h3>
        <p className="text-white text-sm">{col.rating}</p>
      </div>
    </div>
  );
}
