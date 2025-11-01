import React from 'react';
import Coverimg from '../Components/common/Coverimg';
import BLOG from '../constants/blog';
import BlogCard from '../Components/sections/BlogCard/BlogCard';
import Footer from '../Components/layout/Footer';

const page = () => {
    return (
        <div className="px-15">
            <div className='w-screen relative left-1/2 -ml-[51vw] mb-20'>
                <Coverimg
                    imagePath="/images/OlightAllImage/3CategoriesPage/1.jpg"
                    title="Shop"
                    breadcrumb="HOME PAGE ➜ BLOG"
                />
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                {BLOG.slice(0, 10).map((blog) => (
                    <BlogCard key={blog.title} blog={blog} />
                ))}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default page;