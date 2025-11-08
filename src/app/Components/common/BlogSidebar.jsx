"use client";

import React, { useState } from 'react';
import Categories from './Categories';

const BlogSidebar = () => {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <aside className="md:w-[25vw] p-4">
            <input
                type="text"
                placeholder="Search products..."
                className="w-full mb-5 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <Categories />
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
    );
};

export default BlogSidebar;
