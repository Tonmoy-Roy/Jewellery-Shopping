"use client";
import React from "react";
import ProductsCard from "./Components/ProductsCard";
import { Products } from "@/app/constants/WeekProducts";
import SellersHeader from "./Components/SellersHeader";


export default function WeekProducts() {
  return (
    <main className="w-full bg-base-100 text-center">
      <SellersHeader />

      {/* ===== PRODUCTS GRID ===== */}
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-40 px-4 md:px-10">
        {Products.map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
}
