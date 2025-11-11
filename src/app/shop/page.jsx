"use client";
import React, { useState, useEffect, useRef } from "react";
import ProductCard from "../Components/common/ProductCard";
import Coverimg from "../Components/common/Coverimg";
import PRODUCTS from "../constants/data";
import { BsGrid3X3Gap } from "react-icons/bs";
import Footer from "../Components/layout/Footer";
import CATEGORIES from "../constants/categories";
import Tags from "../Components/common/Tags";

export default function ShopPage() {
  const [priceRange, setPriceRange] = useState([100, 7000]); // actual applied filter
  const [tempRange, setTempRange] = useState([100, 7000]);
  const [activeThumb, setActiveThumb] = useState(null); // 'min' | 'max' | null
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("default");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [selectedCarat, setSelectedCarat] = useState(null);
  const [displayedProducts, setDisplayedProducts] = useState(PRODUCTS);
  const [filteredBrands, setFilteredBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);

  // Filter products based on search term
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // show 9 per page

  // Filter + Sort
  const filteredAndSortedProducts = PRODUCTS.filter((p) => {
    const matchCategory = selectedCategory ? p.category === selectedCategory : true;
    const matchSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
    const matchCarat = selectedCarat ? p.carats === selectedCarat : true;
    const matchBrand = selectedBrand ? p.brand === selectedBrand : true;
    return matchCategory && matchSearch && matchPrice && matchCarat && matchBrand;
  }).sort((a, b) => {
    if (sortOption === "lowToHigh") return a.price - b.price;
    if (sortOption === "highToLow") return b.price - a.price;
    return 0;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredAndSortedProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredAndSortedProducts.slice(startIndex, startIndex + itemsPerPage);
  const categoryCountss = CATEGORIES.map((category) => {
    const count = PRODUCTS.filter(
      (product) => product.category === category
    ).length;

    return { name: category, count };
  });

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



  return (
    <section className="md:px-15">
      {/* 🔹 Page Header */}
      <div className="w-screen relative left-1/2 -ml-[51vw] mb-20">
        <Coverimg
          imagePath="/images/OlightAllImage/3CategoriesPage/1.jpg"
          title="Shop"
          breadcrumb="HOME PAGE ➜ SHOP"
        />
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        {/* 🔹 Sidebar Filters */}
        <aside className="w-full md:w-1/4 rounded-2xl p-5">
          {/* Search */}
          <input
            type="text"
            placeholder="Search categories..."
            className="border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-black mb-5"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* Categories */}
          <div className="mb-10">
            <h3 className="font-semibold mb-3 text-lg">Categories</h3>
            <ul className="space-y-2">
              {categoryCountss.map((cat) => (
                <li
                  key={cat.name}
                  className={`font-semibold text-gray-700 hover:text-yellow-600 cursor-pointer ${selectedCategory === cat.name ? 'font-semibold text-primary' : ''}`}
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
          <div className="border-t mb-5 border-gray-200"></div>

          {/* Price Filter */}
          <div className="mb-10">
            <h3 className="font-semibold mb-3 text-lg">Filter by Price</h3>

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
                className="btn bg-black text-white py-2 px-4 rounded"
              >
                Filter
              </button>
            </div>
          </div>



          <div className="border-t mb-5 border-gray-200"></div>


          {/* Carats */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3 text-lg">Carats</h3>
            <ul className="space-y-2">
              {["14kt", "18kt", "22kt", "24kt"].map((carat) => {
                const count = PRODUCTS.filter((p) => p.carats === carat).length;

                return (
                  <li key={carat} className="flex justify-between items-center">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="carat"
                        value={carat}
                        className="mr-2 accent-black"
                        checked={selectedCarat === carat}
                        onChange={() => {
                          setSelectedCarat(carat);
                          setSelectedBrand(null); // reset brand

                          const filteredByCarat = PRODUCTS.filter(
                            (p) => p.carats === carat
                          );
                          setDisplayedProducts(filteredByCarat);

                          const availableBrands = [
                            ...new Set(filteredByCarat.map((p) => p.brand)),
                          ];
                          setFilteredBrands(availableBrands);
                        }}
                      />
                      {carat}
                    </label>
                    <span className="text-sm text-gray-500">({count})</span>
                  </li>
                );
              })}
            </ul>
          </div>




          <div className="border-t mb-5 border-gray-200"></div>


          {/* Brands */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3 text-lg">Brands</h3>
            <ul className="space-y-2">
              {(filteredBrands.length > 0
                ? filteredBrands
                : ["Ariel", "Gordon", "Lizzie", "Mejuri", "Mandiler"]
              ).map((brand) => {
                const count = PRODUCTS.filter((p) => {
                  if (selectedCarat) {
                    return p.brand === brand && p.carats === selectedCarat;
                  }
                  return p.brand === brand;
                }).length;

                return (
                  <li key={brand} className="flex justify-between items-center">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="brand"
                        value={brand}
                        className="mr-2 accent-black"
                        checked={selectedBrand === brand}
                        onChange={() => {
                          setSelectedBrand(brand);

                          let filtered = PRODUCTS;

                          // If a carat is selected, filter by it first
                          if (selectedCarat) {
                            filtered = filtered.filter(
                              (p) => p.carats === selectedCarat
                            );
                          }

                          // Then filter by the selected brand
                          filtered = filtered.filter((p) => p.brand === brand);

                          // Update main product UI
                          setDisplayedProducts(filtered);
                        }}
                      />
                      {brand}
                    </label>
                    <span className="text-sm text-gray-500">({count})</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="border-t mb-5 border-gray-200"></div>

          {/* Colors */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3 text-lg">Color</h3>
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
          <Tags></Tags>
        </aside>

        {/* 🔹 Product Grid */}
        <main className="flex-1">
          <div className="flex justify-between items-center mb-6 md:w-[65vw] border-b border-gray-200">
            <div className="flex">
              <BsGrid3X3Gap className="text-2xl mr-3" />
              <p>Showing 9 products of {PRODUCTS.length} results</p>
            </div>
            <div className="flex items-center gap-4">
              <select
                className="border rounded-md p-2 w-full md:w-auto mb-5"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="default">Default sorting</option>
                <option value="lowToHigh">Price: Low to High</option>
                <option value="highToLow">Price: High to Low</option>
              </select>
            </div>
          </div>
          {/* Products */}
          <div className="mt-6">
            {currentItems.length > 0 ? (
              <>
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentItems.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {/* Pagination Controls */}
                <div className="flex justify-center items-center gap-3 mt-8">
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                  >
                    Prev
                  </button>

                  <span className="font-medium">
                    Page {currentPage} of {totalPages}
                  </span>

                  <button
                    onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                  >
                    Next
                  </button>
                </div>
              </>
            ) : (
              <p className="text-center text-gray-500 mt-10">No products found.</p>
            )}
          </div>

        </main>
      </div>

      <Footer></Footer>

    </section>
  );
}
