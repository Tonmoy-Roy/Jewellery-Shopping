"use client";
import React, { useState, useEffect, useRef } from "react";
import ProductCard from "../Components/common/ProductCard";
import Coverimg from "../Components/common/Coverimg";
import PRODUCTS from "../constants/data";
import CATEGORIES from "../constants/categories";
import { BsGrid3X3Gap } from "react-icons/bs";


export default function ShopPage() {
  const [priceRange, setPriceRange] = useState([100, 7000]); // actual applied filter
  const [tempRange, setTempRange] = useState([100, 7000]);
  const [activeThumb, setActiveThumb] = useState(null); // 'min' | 'max' | null
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("default");
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Filter products based on search term
  const filteredProducts = PRODUCTS.filter((p) => {
    const matchCategory = selectedCategory ? p.category === selectedCategory : true;
    const matchSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch && p.price >= priceRange[0] && p.price <= priceRange[1];
  });


  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "lowToHigh") return a.price - b.price;
    if (sortOption === "highToLow") return b.price - a.price;
    return 0; // default (no sorting)
  });

  // Ensure activeThumb is cleared when pointer/mouse/touch is released anywhere
  useEffect(() => {
    const clear = () => setActiveThumb(null);
    window.addEventListener("mouseup", clear);
    window.addEventListener("touchend", clear);
    window.addEventListener("pointerup", clear);
    return () => {
      window.removeEventListener("mouseup", clear);
      window.removeEventListener("touchend", clear);
      window.removeEventListener("pointerup", clear);
    };
  }, []);
  const sliderRef = useRef(null);

  const clientXToValue = (clientX) => {
    const rect = sliderRef.current?.getBoundingClientRect();
    if (!rect) return tempRange[0];
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    const percent = x / rect.width;
    const value = Math.round(100 + percent * (7000 - 100));
    return value;
  };

  const handlePointerDownOnTrack = (e) => {
    const clientX = e.clientX ?? (e.touches && e.touches[0] && e.touches[0].clientX);
    if (clientX == null) return;
    const value = clientXToValue(clientX);
    const distMin = Math.abs(value - tempRange[0]);
    const distMax = Math.abs(value - tempRange[1]);
    const thumb = distMin <= distMax ? "min" : "max";
    setActiveThumb(thumb);
    if (thumb === "min") {
      setTempRange([Math.min(value, tempRange[1] - 100), tempRange[1]]);
    } else {
      setTempRange([tempRange[0], Math.max(value, tempRange[0] + 100)]);
    }
    // prevent default so inputs below don't steal focus in some browsers
    e.preventDefault();
  };

  const handlePointerMoveOnTrack = (e) => {
    if (!activeThumb) return;
    const clientX = e.clientX ?? (e.touches && e.touches[0] && e.touches[0].clientX);
    if (clientX == null) return;
    const value = clientXToValue(clientX);
    if (activeThumb === "min") {
      setTempRange([Math.min(value, tempRange[1] - 100), tempRange[1]]);
    } else {
      setTempRange([tempRange[0], Math.max(value, tempRange[0] + 100)]);
    }
  };

  const categoryCountss = CATEGORIES.map((category) => {
    const count = PRODUCTS.filter(
      (product) => product.category === category
    ).length;

    return { name: category, count };
  });

  return (
    <section className="flex flex-col gap-8 px-6 md:px-12 bg-(--background)">
      {/* 🔹 Page Header */}
      <div className="w-screen relative left-1/2 -ml-[51vw] ">
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
            className="w-full mb-5 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* Categories */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3">Categories</h3>
            <ul className="space-y-2">
              {categoryCountss.map((cat) => (
                <li
                  key={cat.name}
                  className="text-gray-700 hover:text-(--primary) cursor-pointer"
                  onClick={() => setSelectedCategory(cat.name)}
                >
                  <div className="flex justify-between">
                    <div>{cat.name}</div>
                    <div>({cat.count})</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="divider"></div>

          {/* Price Filter */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3">Filter by Price</h3>

            <div
              ref={sliderRef}
              className="relative h-6 mt-4 mb-2"
              onPointerDown={handlePointerDownOnTrack}
              onPointerMove={handlePointerMoveOnTrack}
            >
              {/* Track background */}
              <div className="absolute w-full h-1 bg-gray-300 rounded-full"></div>

              {/* Range highlight between min and max */}
              <div
                className="absolute h-1 rounded-full"
                style={{
                  left: `${(tempRange[0] / 7000) * 100}%`,
                  right: `${100 - (tempRange[1] / 7000) * 100}%`,
                }}
              ></div>

              {/* Min slider */}
              <input
                type="range"
                min="100"
                max="7000"
                value={tempRange[0]}
                onChange={(e) =>
                  setTempRange([Math.min(Number(e.target.value), tempRange[1] - 100), tempRange[1]])
                }
                className="absolute w-full accent-black"
                onMouseDown={() => setActiveThumb('min')}
                onPointerDown={() => setActiveThumb('min')}
                onTouchStart={() => setActiveThumb('min')}
                style={{ WebkitAppearance: "none", appearance: "none", zIndex: activeThumb === 'min' ? 3 : 2 }}
              />

              {/* Max slider */}
              <input
                type="range"
                min="100"
                max="7000"
                value={tempRange[1]}
                onChange={(e) =>
                  setTempRange([tempRange[0], Math.max(Number(e.target.value), tempRange[0] + 100)])
                }
                className="absolute w-full accent-black"
                onMouseDown={() => setActiveThumb('max')}
                onPointerDown={() => setActiveThumb('max')}
                onTouchStart={() => setActiveThumb('max')}
                style={{ WebkitAppearance: "none", appearance: "none", zIndex: activeThumb === 'max' ? 3 : 2 }}
              />
            </div>

            <div className="flex justify-between items-center mt-3">
              <p className="text-sm">
                Price:{" "}
                <span className="text-amber-600 font-semibold">
                  {tempRange[0]}$ - {tempRange[1]}$
                </span>
              </p>
              <button
                onClick={() => setPriceRange(tempRange)} // ✅ only apply on click
                className="bg-black text-white py-2 px-4 rounded-2xl"
              >
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
            <div className="flex">
              <BsGrid3X3Gap className="text-2xl mr-3 ml-10" />
              <p>Showing 1-9 of {PRODUCTS.length} results</p>
            </div>
            <div className="flex items-center gap-4">
              <select
                className="border rounded-md p-2 w-full md:w-auto"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="default">Default sorting</option>
                <option value="lowToHigh">Price: Low to High</option>
                <option value="highToLow">Price: High to Low</option>
              </select>
              <p>Show 4</p>
            </div>
          </div>

          {/* Products */}
          {sortedProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {sortedProducts.slice(0, 9).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 mt-10">No products found.</p>
          )}
        </main>
      </div>
    </section>
  );
}
