"use client";
import React from "react";
import Image from "next/image";
import COLORS from "../../constants/colors";

export default function ProductCard({ product }) {
  return (
    <div className="rounded-2xl p-4 bg-white hover:shadow-lg transition">
      <Image
        src={product.image}
        alt={product.name}
        width={250}
        height={250}
        className="rounded-xl mx-auto"
      />
      <p className="text-sm text-gray-500 mt-3 text-center">{product.category}</p>
      <h3 className="font-semibold text-(--textDark) mt-1 text-center">{product.name}</h3>
      <p className="text-sm text-center">⭐⭐⭐⭐⭐ {product.rating} ({product.reviews} Reviews)</p>
      <p className="font-bold text-(--primary) mt-1 text-center">{product.price}$</p>
    </div>
  );
}
