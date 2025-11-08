import Coverimg from '@/app/Components/common/Coverimg';
import BLOG from "../../constants/blog";
import React from 'react';
import Image from "next/image";
import Footer from '@/app/Components/layout/Footer';
import BlogSidebar from '@/app/Components/common/BlogSidebar';

const page = ({ params }) => {
    const { id } = params;
    const blog = BLOG.find((item) => item.id === Number(id));
    
    if (!blog) {
        return <div className="container mx-auto px-4 py-8">Blog post not found</div>;
    }
    const images = blog.image_url;

    return (
        <section className='md:px-15'>
            <div className="w-screen relative left-1/2 -ml-[51vw] mb-20">
                <Coverimg
                    imagePath="/images/OlightAllImage/3CategoriesPage/1.jpg"
                    title="Shop"
                    breadcrumb={`HOME PAGE ➜ ${blog.category.toUpperCase()} ➜ ${blog.title.toUpperCase()}`}
                />
            </div>
            <div className="mb-1 text-gray-500 ml-[7vw]">
                {`${blog.category.toUpperCase()} ➜ ${blog.date.toUpperCase()}`}
            </div>
            <div className='text-3xl ml-[7vw] mb-5 font-semibold'>
                {`${blog.title}`}
            </div>
            <div className="md:flex md:w-[50vw] ml-[7vw] md:h-[70vh]">
                <Image
                    src={images}
                    width={500}
                    height={500}
                    className="rounded-xl w-full md:h-[70vh] mr-5"
                />
                <div>
                    <BlogSidebar />
                </div>

            </div>
            <Footer></Footer>

        </section>
    );
};

export default page;