import React from "react";
import Image from "next/image";

export default function Card({ client }) {
  return (
    <div className="bg-gray-100 shadow-md rounded-xl p-4 transition hover:shadow-lg">
      {/* Rating */}
      <div className="flex mb-2 text-yellow-500">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        “ {client.title} ”
      </h3>

      <p className="text-sm text-gray-500">{client.description}</p>
      {/* Profile Section */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 relative">
          <Image
            src={client.image}
            alt={client.name}
            fill
            className="object-cover rounded-full"
          />
        </div>
        <div className="text-left">
          <p className="font-semibold  text-gray-800">{client.name}</p>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {client.text}
          </p>
        </div>
      </div>
    </div>
  );
}
