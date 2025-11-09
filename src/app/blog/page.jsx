"use client";
import React, { useState } from 'react';
import Coverimg from '../Components/common/Coverimg';
import BLOG from '../constants/blog';
import BlogCard from '../Components/sections/BlogCard/BlogCard';
import Footer from '../Components/layout/Footer';

const page = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 8; // number of blogs per page

    // Pagination logic
    const totalPages = Math.ceil(BLOG.length / blogsPerPage);
    const startIndex = (currentPage - 1) * blogsPerPage;
    const currentBlogs = BLOG.slice(startIndex, startIndex + blogsPerPage);
    return (
        <div className="px-15">
            <div className='w-screen relative left-1/2 -ml-[51vw] mb-20'>
                <Coverimg
                    imagePath="/images/OlightAllImage/3CategoriesPage/1.jpg"
                    title="Shop"
                    breadcrumb="HOME PAGE ➜ BLOG"
                />
            </div>

            <div className="mt-6 px-15">
                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10 gap-6">
                    {currentBlogs.map((blog) => (
                        <BlogCard key={blog.title} blog={blog} />
                    ))}
                </div>

                {/* Pagination Controls */}
                <div className="flex justify-center items-center mt-6 gap-4">
                    <button
                        onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                        disabled={currentPage === 1}
                        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                    >
                        Prev
                    </button>

                    {/* Page Numbers */}
                    <div className="flex gap-2">
                        {Array.from({ length: totalPages }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentPage(i + 1)}
                                className={`px-3 py-1 rounded ${currentPage === i + 1
                                        ? "bg-black text-white"
                                        : "bg-gray-200 hover:bg-gray-300"
                                    }`}
                            >
                                {i + 1}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default page;