"use client";
import React, { useState } from "react";
import ProductCard from "../Components/common/ProductCard";
import Coverimg from "../Components/common/Coverimg";
import PRODUCTS from "../constants/data";
import CATEGORIES from "../constants/categories";

export default function ShopPage() {
  const [priceRange, setPriceRange] = useState([100, 5000]);

  return (
    <section className="flex flex-col gap-8 px-6 md:px-12 py-8 bg-(--background)">
      {/* 🔹 Page Header */}
      <div className="text-center py-12 bg-(--primary-light) rounded-2xl">
        <Coverimg
          imagePath="/images/OlightAllImage/3CategoriesPage/1.jpg"
          title="Shop"
          breadcrumb="HOME PAGE ➜ SHOP"
        />
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        {/* 🔹 Sidebar Filters */}
        <aside className="w-full md:w-1/4 border border-(--border) rounded-2xl p-5 bg-white">
          {/* Search */}
          <input
            type="text"
            placeholder="Search products..."
            className="w-full mb-5 p-2 border rounded-md"
          />

          {/* Categories */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3">Categories</h3>
            <ul className="space-y-2">
              {CATEGORIES.map((cat) => (
                <li key={cat.name} className="text-gray-700 hover:text-(--primary)">
                  {cat.name} ({cat.count})
                </li>
              ))}
            </ul>
          </div>
          <div className="divider"></div>

          {/* Price Filter */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3">Filter by Price</h3>
            <input
              type="range"
              min="100"
              max="5000"
              value={priceRange[1]}
              className="w-full"
              onChange={(e) => setPriceRange([100, Number(e.target.value)])}
            />
            <div className="flex justify-between">
              <p className="text-sm mt-2">
                Price: <span className=" text-amber-600">{priceRange[0]}$ - {priceRange[1]}$</span>
              </p>
              <button className="btn bg-black text-white py-2 px-4 rounded-2xl ">
                Filter
              </button>
            </div>
          </div>

          <div className="divider"></div>


          {/* Carats */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3">Carats</h3>
            <ul className="space-y-2">
              {["14kt", "18kt", "22kt", "24kt"].map((b) => (
                <li key={b}>
                  <input type="radio" name="options" className="mr-2" /> {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="divider"></div>


          {/* Brands */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3">Brands</h3>
            <ul className="space-y-2">
              {["Ariel", "Gordon", "Lizzie", "Mejuri", "Mandiler"].map((b) => (
                <li key={b}>
                  <input type="radio" name="options" className="mr-2" /> {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="divider"></div>


          {/* Colors */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3">Color</h3>
            <div className="flex flex-wrap gap-2">
              {["#000000", "#E5E7EB", "#FCD34D", "#F87171", "#60A5FA"].map((c) => (
                <div
                  key={c}
                  className="w-6 h-6 rounded cursor-pointer border"
                  style={{ backgroundColor: c }}
                />
              ))}
            </div>
          </div>
          <div className="divider"></div>
          <h3 className="font-semibold mb-3">Tags</h3>
          <div className="flex gap-2 mb-2">
            <button className="btn btn-outline hover:bg-amber-400 rounded-2xl">Accessories</button>
            <button className="btn btn-outline hover:bg-amber-400 rounded-2xl">Bracelets</button>
            <button className="btn btn-outline hover:bg-amber-400 rounded-2xl">Necklaces</button>
          </div>
          <div>
            <button className="btn btn-outline hover:bg-amber-400 rounded-2xl mr-2">Single Earring</button>
            <button className="btn btn-outline hover:bg-amber-400 rounded-2xl">Wedding</button>
          </div>
        </aside>


        {/* 🔹 Product Grid */}
        <main className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <p>Showing 1-9 of {PRODUCTS.length} results</p>
            <div className="flex items-center gap-4">
              <select className="border rounded-md p-2">
                <option>Default sorting</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
              <p>Show 4</p>
            </div>
          </div>

          {/* Products */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {PRODUCTS.slice(0, 9).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
      </div>
    </section>
  );
}
