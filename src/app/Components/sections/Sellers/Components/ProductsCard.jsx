"use client";
import Image from "next/image";

export default function ProductsCard({ product }) {
  return (
    <>
      {/* Image container */}
      <div className="relative w-36 h-36 mx-auto mt-4">
        <Image
          src={product.img}
          alt={product.title}
          fill
          className="object-contain rounded-xl"
        />
      </div>
      {/* Card body */}
      <div className="p-4 text-center">
        <h2 className="text-sm font-medium text-gray-500">
          {product.category}
        </h2>
        <h3 className="font-semibold text-gray-800">{product.title}</h3>
        <p className="text-xs text-yellow-500">{product.rating}</p>
        <p className="text-base font-bold text-gray-700">{product.price}$</p>
      </div>
    </>
  );
}
