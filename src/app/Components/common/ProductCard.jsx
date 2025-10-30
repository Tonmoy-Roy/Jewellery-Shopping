"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="rounded-2xl p-4 bg-white hover:shadow-lg transition text-center">
      <Image
        src={product.image}
        alt={product.name}
        width={250}
        height={250}
        className="rounded-xl mx-auto"
      />
      <p className="text-sm text-gray-500 mt-3">{product.category}</p>
      <h3 className="font-semibold text-(--textDark) mt-1">{product.name}</h3>
      <p className="text-sm">⭐⭐⭐⭐⭐ {product.rating} ({product.reviews} Reviews)</p>
      <p className="font-bold text-(--primary) mt-1 mb-2">{product.price}$</p>
      <Link
        href={`/productdetails/${product.id}`}
        className="btn bg-black text-white py-2 px-4 rounded inline-block text-center"
      >
        Details
      </Link>

    </div>
  );
}
