"use client";
import Coverimg from '@/app/Components/common/Coverimg';
import BLOG from "../../constants/blog";
import React, { useState } from 'react';
import Image from "next/image";
import Footer from '@/app/Components/layout/Footer';
import Categories from '@/app/Components/common/Categories';
import Tags from '@/app/Components/common/Tags';

const page = ({ params }) => {
    const { id } = React.use(params);
    const blog = BLOG.find((item) => item.id === Number(id));
    const [searchTerm, setSearchTerm] = useState("");


    if (!blog) {
        return <div className="container mx-auto px-4 py-8">Blog post not found</div>;
    }
    const images = blog.image_url;
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        website: "",
        comment: "",
        remember: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        // Here you can add API call or local storage logic
    };
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
            <div className="md:flex ml-[7vw]">
                <div className='mr-5 md:w-[50vw]'>
                    <Image
                        src={images}
                        alt={blog.title}
                        width={500}
                        height={500}
                        className='rounded-xl md:h-[70vh] border-4 w-full mb-10'
                    />
                    <div className='mb-10'>
                        <p>Jewelry has the remarkable ability to elevate any outfit, adding a touch of glamour and personality to your look. As we embrace a new season, it’s the perfect time to explore the latest jewelry trends that are capturing hearts and turning heads around the world. From statement pieces to delicate accents, here are the jewelry trends that are everywhere right now.
                            Climate change remains one of the most significant threats, with rising global temperatures, melting ice caps, and increasingly frequent extreme weather events disrupting ecosystems and affecting biodiversity. This phenomenon also poses serious risks to food and water security. Meanwhile, habitat loss continues to be a major concern, as urban expansion, deforestation, and agricultural activities degrade natural habitats, leading to declines in wildlife populations and the fragmentation of ecosystems. Pollution further exacerbates these issues, with industrial processes, plastic waste, and chemical contaminants polluting air, water, and soil, thereby affecting the health of all living organisms.</p>
                    </div>
                    <div className='mb-10'>
                        <p className='text-3xl font-semibold mb-3'>We Love chocolate</p>
                        <p>But you can plan for big picture seasonality, busy-times, and events.the main component of a healthy environment for self esteem is that it needs be nurturing. The main compont of a healthy environment for self esteem is that it needs be nurturing. The main component of a healthy env for self esteem The main compont be nurturing It should provide unconditional warmth. The main component of a healthy env for self esteem The main compont be nurturing It should provide unconditional Never ever think of giving up. Never ever think of giving up. Winners never quit and quitters never win. Take all negative words out of your mental dictionary and focus on the solutions with utmost conviction and patience. The battle is never lost until you’ve abandon your vision.
                        </p>
                    </div>
                    <div className='md:flex mb-10 items-start'>
                        <div className='mr-5'>
                            <img className='rounded md:h-[35vh]' src="/images/OlightAllImage/10039.jpg" alt="" />
                        </div>
                        <div >
                            <img className='rounded md:h-[35vh]' src="/images/OlightAllImage/10050.jpg" alt="" />
                        </div>
                    </div>
                    <div className='mb-10'>
                        <p className='text-xl font-semibold mb-5'>The main compont of a healthy environment for self esteem is that it needs be nurturing.</p>
                        <p>We all intend to plan ahead, but too often let the day-to-day minutia get in the way of making a calendar for the year. Sure, you can’t know every detail to anticipate. Heck, you can’t know half the priorities that will pop up in any particular month. But you can plan for big picture seasonality, busy-times, and events.the main component of a healthy environment for self esteem is that it needs be nurturing. The main compont of a healthy environment for self esteem is that it needs be nurturing. The main component of a healthy env for self esteem The main compont be nurturing It should provide unconditional warmth. The main component of a healthy env for self esteem The main compont be nurturing It should provide unconditional</p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Leave a Reply</h2>
                        <p className="text-gray-600 mb-6">
                            Your email address will not be published. Required fields are marked{" "}
                            <span className="text-red-500">*</span>
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name *"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-black"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email *"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-black"
                                />
                                <input
                                    type="text"
                                    name="website"
                                    placeholder="Website"
                                    value={formData.website}
                                    onChange={handleChange}
                                    className="border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-black"
                                />
                            </div>

                            <textarea
                                name="comment"
                                placeholder="Comment *"
                                value={formData.comment}
                                onChange={handleChange}
                                required
                                rows="5"
                                className="border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-black"
                            ></textarea>

                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    name="remember"
                                    checked={formData.remember}
                                    onChange={handleChange}
                                    className="h-4 w-4"
                                />
                                <label className="text-gray-700 text-sm">
                                    Save my name, email and website in this browser for the next time I
                                    comment.
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
                            >
                                Post Comment
                            </button>
                        </form>
                    </div>
                </div>
                <div>
                    <aside className="md:w-[25vw] p-4">
                        <input
                            type="text"
                            placeholder="Search products..."
                            className="border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-black mb-5"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <Categories />
                        <Tags></Tags>
                    </aside>
                </div>
            </div>
            <Footer></Footer>
        </section>
    );
};

export default page;