'use client'
import React, { useEffect, useState, useMemo } from 'react';
import Coverimg from '../Components/common/Coverimg';

const Page = () => {
    // 1. Data Fetching States
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // 2. Interactive UI States
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [sortBy, setSortBy] = useState('default');
    const [inStockOnly, setInStockOnly] = useState(false);
    const [isGridView, setIsGridView] = useState(true);

    // 3. Fetch Data on Mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/images/catagories.json');
                if (!response.ok) {
                    throw new Error(`Request failed with status ${response.status}`);
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // 4. Dynamically extract unique categories for the filter dropdown
    const categories = useMemo(() => {
        const allCategories = data.map((item) => item.category);
        return ['All', ...new Set(allCategories.filter(Boolean))];
    }, [data]);

    // 5. Filter and Sort Logic
    const processedData = useMemo(() => {
        return data
            .filter((item) => {
                const matchesSearch =
                    item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    item.brand?.toLowerCase().includes(searchTerm.toLowerCase());
                const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
                const matchesStock = !inStockOnly || item.inStock;

                return matchesSearch && matchesCategory && matchesStock;
            })
            .sort((a, b) => {
                if (sortBy === 'price-low') return a.price - b.price;
                if (sortBy === 'price-high') return b.price - a.price;
                if (sortBy === 'reviews') return b.reviews - a.reviews;
                return 0; // default
            });
    }, [data, searchTerm, selectedCategory, inStockOnly, sortBy]);

    // --- Loading & Error UI ---
    if (loading) {
        return (
            <div className="flex items-center justify-center p-4 min-h-screen bg-gray-50">
                <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-10 flex items-center justify-center min-h-screen bg-gray-50">
                <div className="bg-red-50 text-red-600 p-4 rounded-lg border border-red-200 shadow-sm">
                    <strong>Error loading data:</strong> {error}
                </div>
            </div>
        );
    }

    // --- Main Dynamic UI ---
    return (
        <section className='md:px-15'>
            <div className="w-screen relative left-1/2 -ml-[51vw] mb-20">
                <Coverimg
                    imagePath="/images/OlightAllImage/3CategoriesPage/1.jpg"
                    title="Shop"
                    breadcrumb="HOME PAGE ➜ CATEGORIES"
                />
            </div>
            <div className="max-w-7xl mx-auto p-4 md:p-10 bg-gray-50 min-h-screen transition-colors duration-200">
                <h1 className="text-2xl md:text-3xl font-extrabold mb-6 text-center text-gray-800 tracking-tight">
                    Product Catalog
                </h1>

                {/* --- Control Panel --- */}
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between md:gap-4">
                    {/* Search */}
                    <div className="flex-1">
                        <input
                            type="text"
                            placeholder="Search by name or brand..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                        />
                    </div>

                    {/* Filters & Sorting */}
                    <div className="flex flex-wrap items-center gap-3">
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="px-3 py-2 text-sm border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            {categories.map((cat) => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>

                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="px-3 py-2 text-sm border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="default">Sort By: Featured</option>
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                            <option value="reviews">Top Reviewed</option>
                        </select>

                        <label className="flex items-center space-x-2 text-sm cursor-pointer select-none">
                            <input
                                type="checkbox"
                                checked={inStockOnly}
                                onChange={(e) => setInStockOnly(e.target.checked)}
                                className="rounded text-blue-600 focus:ring-blue-500 w-4 h-4"
                            />
                            <span className="text-gray-600 font-medium">In Stock Only</span>
                        </label>

                        <button
                            onClick={() => setIsGridView(!isGridView)}
                            className="p-2 border rounded-lg hover:bg-gray-100 text-gray-600 hidden sm:block"
                            title={isGridView ? "Switch to List View" : "Switch to Grid View"}
                        >
                            {isGridView ? '📝 List View' : '🎛️ Grid View'}
                        </button>
                    </div>
                </div>

                {/* --- Results Counter --- */}
                <p className="text-sm text-gray-500 mb-4 font-medium">
                    Showing {processedData.length} of {data.length} items
                </p>

                {/* --- Empty State --- */}
                {processedData.length === 0 && (
                    <div className="text-center py-12 bg-white rounded-xl border border-dashed border-gray-300">
                        <p className="text-gray-500 font-medium">No products match your criteria.</p>
                        <button
                            onClick={() => { setSearchTerm(''); setSelectedCategory('All'); setInStockOnly(false); setSortBy('default'); }}
                            className="mt-3 text-sm text-blue-600 font-semibold hover:underline"
                        >
                            Reset Filters
                        </button>
                    </div>
                )}

                {/* --- Dynamic Data Layout --- */}
                <ul className={
                    isGridView
                        ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                        : "space-y-4"
                }>
                    {processedData.map((item) => (
                        <li
                            key={item.id}
                            className={`bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 ${!isGridView ? "flex items-center p-4 gap-6" : "p-4 flex flex-col justify-between"
                                }`}
                        >
                            <div
                                className={`${!isGridView
                                    ? "w-32 h-20 flex items-center justify-center flex-shrink-0"
                                    : "w-full mb-5"
                                    }`}
                            >
                                <img
                                    src={item.images?.[0] || "https://via.placeholder.com/150"}
                                    alt={item.name}
                                    className="w-full h-32 object-cover rounded-lg"
                                    style={!isGridView ? { height: "170%" } : { height: "100%" }}
                                />
                            </div>

                            <div className="flex-1 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-start justify-between gap-2">
                                        <h2 className="font-bold text-gray-800 text-lg line-clamp-1">{item.name}</h2>
                                        <span className={`text-xs font-semibold px-2 py-1 rounded-full whitespace-nowrap ${item.inStock ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-600'
                                            }`}>
                                            {item.inStock ? 'In Stock' : 'Out of Stock'}
                                        </span>
                                    </div>

                                    <p className="text-xs font-medium uppercase tracking-wider text-gray-400 mt-0.5">
                                        {item.brand} • <span className="text-blue-500">{item.category}</span>
                                    </p>

                                    <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                                        {item.shortDescription}
                                    </p>
                                </div>

                                <div className="mt-4 pt-3 border-t border-gray-50 flex items-center justify-between">
                                    <div>
                                        <span className="text-xs text-gray-400 block font-medium">Price</span>
                                        <span className="font-extrabold text-xl text-gray-900">${item.price}</span>
                                    </div>
                                    <div className="text-right">
                                        <div className="flex items-center text-amber-500 font-bold text-sm justify-end">
                                            ⭐ <span className="ml-1 text-gray-700">{item.reviews}</span>
                                        </div>
                                        <span className="text-xs text-gray-400 font-medium">Reviews</span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Page;