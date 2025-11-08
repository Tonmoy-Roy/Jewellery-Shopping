"use client";

import React, { useState } from 'react';
import CATEGORIES from "../../constants/categories";
import PRODUCTS from "../../constants/data";

const Categories = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    const categoryCountss = CATEGORIES.map((category) => {
        const count = PRODUCTS.filter(
            (product) => product.category === category
        ).length;

        return { name: category, count };
    });

    return (
        <div>
            <div className="mb-10">
                <h3 className="font-semibold mb-3">Categories</h3>
                <ul className="space-y-2">
                    {categoryCountss.map((cat) => (
                        <li
                            key={cat.name}
                            className={`text-gray-700 hover:text-primary cursor-pointer ${selectedCategory === cat.name ? 'font-semibold text-primary' : ''}`}
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
        </div>
    );
};

export default Categories;