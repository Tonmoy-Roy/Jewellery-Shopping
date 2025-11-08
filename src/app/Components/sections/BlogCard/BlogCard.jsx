import Link from 'next/link';
import React from 'react';

const BlogCard = ({ blog }) => {
    return (
        <div className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 text-center">
            <img
                src={blog.image_url}
                alt="Layering Necklaces Like a Pro"
                className="w-full h-60 object-cover"
            />
            <div className="p-5 mb-10">
                <p className="text-gray-400 uppercase text-xs font-semibold tracking-wider mb-2">
                    {blog.category} - {blog.date}
                </p>
                <h2 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                    {blog.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                    Jewelry has the remarkable ability to elevate any outfit, adding a
                    touch of glamour and personality to your look. As..
                </p>
                <Link href={`blogdetails/${blog.id}`} className='underline'>Read More</Link>
            </div>
        </div>

    );
};

export default BlogCard;