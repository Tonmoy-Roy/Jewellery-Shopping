import React from "react";
import Image from "next/image";
export default function CollectionBannerCard({ col }) {
  return (
    <div>
      <Image
        src={col.img}
        alt={col.title}
        width={600}
        height={700}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-end text-center p-4">
        <h3 className="text-white text-lg font-semibold">{col.title}</h3>
        <p className="text-white">{col.rating}</p>
      </div>
    </div>
  );
}
