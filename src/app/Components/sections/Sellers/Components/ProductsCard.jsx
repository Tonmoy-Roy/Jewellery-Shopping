"use client";

import Image from "next/image";

export default function ProductsCard({ product }) {
  return (
    <div className="card bg-base-100  transition rounded-2xl">
      <figure className="">
      
       <Image
          src={product.img}
          alt={product.title}
          width={200}
          height={200}
          className="rounded-xl object-contain"
       />
     
      </figure>
      <div className="card-body p-4 text-center">
        <h2 className="text-sm pnfont-medium text-gray-500">
          {product.category}
        </h2>
        <h3 className="font-semibold text-gray-800">{product.title}</h3>
        <p className="text-xs text-yellow-500">{product.rating}</p>
        <p className="text-base font-bold text-gray-700">{product.price}</p>
      </div>
    </div>
  );
}
