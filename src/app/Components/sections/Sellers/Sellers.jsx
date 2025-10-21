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
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:px-10 mb-10">
        {products.map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
}
