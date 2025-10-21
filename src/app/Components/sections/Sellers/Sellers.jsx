"use client";
import React from "react";
import SellersHeader from "./Components/SellersHeader";
import { products } from "@/app/constants/Products";
import ProductsCard from "./Components/ProductsCard";

export default function Sellers() {
  return (
    <main className="w-full bg-base-100 text-center">
      <SellersHeader />
      {/* ===== PRODUCTS ===== */}
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 px-4 md:px-10 mb-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="card bg-base-100 shadow-md hover:shadow-xl transition rounded-2xl"
          >
            <ProductsCard product={product} />
          </div>
        ))}
      </section>
    </main>
  );
}
