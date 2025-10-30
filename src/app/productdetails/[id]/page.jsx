"use client";
import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import PRODUCTS from "../../constants/data";
import Coverimg from "@/app/Components/common/Coverimg";
import Footer from "@/app/Components/layout/Footer";

const Page = () => {
    const { id } = useParams();
    const product = PRODUCTS.find((item) => item.id === Number(id));

    if (!product) return <div className="text-center mt-10">Product not found.</div>;

    return (
        <div>
            {/* Cover Image */}
            <div className="w-screen relative left-1/2 -ml-[51vw] mb-20">
                <Coverimg
                    imagePath="/images/OlightAllImage/3CategoriesPage/1.jpg"
                    title="Shop"
                    breadcrumb={`HOME PAGE ➜ ${product.category.toUpperCase()} ➜ ${product.name.toUpperCase()}`}
                />
            </div>

            {/* Product Details */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                {/* Left: Image */}
                <div className="flex justify-center">
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={500}
                        height={500}
                        className="rounded-xl object-contain"
                    />
                </div>

                {/* Right: Info */}
                <div className="text-center sm:text-left">
                    <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
                    <p className="text-gray-500 mb-1">Brand: {product.brand}</p>
                    <p className="text-gray-500 mb-1">Category: {product.category}</p>
                    <p className="text-gray-500 mb-1">Carats: {product.carats}</p>
                    <p className="text-yellow-500">⭐⭐⭐⭐⭐ ({product.reviews} reviews)</p>
                    <p className="text-green-600 font-semibold mt-2">{product.stock}</p>
                    <div className="mt-3">
                        <span className="text-3xl font-bold">${product.price}</span>
                        <span className="line-through ml-2">${product.price+2000}</span>
                    </div>

                    <p className="mt-4 text-gray-700">{product.description}</p>

                    {/* Buttons */}
                    <div className=" mt-6 gap-4">
                        <button className="bg-black text-white px-6 py-2 rounded mr-5">Add To Cart</button>
                        <button className="border px-6 py-2 rounded hover:bg-gray-100">Buy It Now</button>
                    </div>

                    {/* Extra info */}
                    <ul className="mt-6 text-sm text-gray-600 space-y-2">
                        <li>🚚 Free Shipping & Exchanges</li>
                        <li>💳 Secure Payment Options (Visa, Stripe, RuPay)</li>
                        <li>😊 600,000+ Happy Customers</li>
                    </ul>

                    <div className="mt-6 border-t pt-4 text-xs text-gray-500">
                        <p>SKU: durable-bronze-clock-01678109</p>
                        <p>Category: {product.category}</p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Page;
