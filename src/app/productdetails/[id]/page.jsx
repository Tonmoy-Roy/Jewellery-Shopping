"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import PRODUCTS from "../../constants/data";
import Coverimg from "@/app/Components/common/Coverimg";
import Footer from "@/app/Components/layout/Footer";
import { TiHeartFullOutline } from "react-icons/ti";
import { MdCompareArrows } from "react-icons/md";
import { SlBadge } from "react-icons/sl";
import { MdSecurity } from "react-icons/md";
import { LiaShippingFastSolid } from "react-icons/lia";


const Page = () => {
    const { id } = useParams();
    const product = PRODUCTS.find((item) => item.id === Number(id));

    if (!product) return <div className="text-center mt-10">Product not found.</div>;

    const images = product.images;
    const [mainImage, setMainImage] = useState(images[0]);

    // Related products: same category, exclude current product
    const relatedProducts = PRODUCTS.filter(
        (p) => p.category === product.category && p.id !== product.id
    ).slice(0, 6);

    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => setQuantity((prev) => prev + 1);
    const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

    const handleAddToCart = () => {
        console.log(`Added ${quantity} of ${product.name} to cart`);
    };

    const handleBuyNow = () => {
        console.log(`Buying ${quantity} of ${product.name}`);
    };


    return (
        <div>
            {/* Cover Image */}
            <div className="w-screen relative left-1/2 -ml-[51vw] mb-20">
                <Coverimg
                    imagePath="/images/OlightAllImage/3CategoriesPage/1.jpg"
                    title="Shop"
                    breadcrumb={`HOME PAGE ➜ PRODUCT`}
                />
            </div>

            {/* Product Details */}
            <div className="max-w-6xl mx-auto items-start gap-10 ml-[19vw] mb-5 text-gray-500">
                {`HOME PAGE ➜ ${product.category.toUpperCase()} ➜ ${product.name.toUpperCase()}`}
            </div>
            <div className="max-w-6xl mx-auto items-start grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Left: Image Gallery */}
                <div className="flex flex-col sm:flex-row items-center gap-6">
                    {/* Side Thumbnails */}
                    <div className="flex sm:flex-col gap-3 order-2 sm:order-1">
                        {images.map((img, index) => (
                            <div
                                key={index}
                                onClick={() => setMainImage(img)}
                                className={`cursor-pointer rounded-lg border ${mainImage === img ? "border-yellow-500" : "border-transparent"
                                    } hover:border-yellow-500 transition`}
                            >
                                <Image
                                    src={img}
                                    alt={`${product.name}-${index}`}
                                    width={80}
                                    height={80}
                                    className="rounded-lg object-cover"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Main Image */}
                    <div className="flex-1 order-1 sm:order-2">
                        <Image
                            src={mainImage}
                            alt={product.name}
                            width={500}
                            height={500}
                            className="rounded-xl object-contain mx-auto"
                        />
                    </div>
                </div>

                {/* Right: Info */}
                <div className="sm:text-left mb-20 px-5 md:w-[40vw]">
                    <h1 className="text-2xl font-semibold mb-2">{product.name}</h1>
                    <div className="md:flex">
                        <p className="text-gray-500 mb-1 mr-2">Brand: {product.brand}</p>
                        <p className="mr-2">|</p>
                        <p className="text-yellow-500 mr-2">⭐⭐⭐⭐⭐ <span className="text-gray-500">({product.reviews}) reviews</span></p>
                        <p className="mr-2">|</p>
                        <p >{product.inStock ? <span className="text-green-600 font-semibold">in stock</span> : <span className="text-red-600">out of stock</span>}</p>
                    </div>
                    <p className="text-gray-500 mb-1">Carats: {product.carats}</p>
                    <div className="mt-3">
                        <span className="text-3xl font-bold">${product.price}</span>
                        <span className="line-through ml-2 text-gray-500">${product.price + 2000}</span>
                    </div>
                    <div className="border-t mt-5 text-gray-200"></div>
                    {/* Quantity and Buttons */}
                    <div className="mt-6 space-y-4 text-center">
                        {/* Quantity Selector */}
                        <div className="md:flex">
                            <div className="btn rounded md:w-[9vw] mt-4 ">
                                <button
                                    onClick={handleDecrease}
                                    className="px-3 p-2 rounded cursor-pointer"
                                >
                                    -
                                </button>
                                <span className="px-3 py-2 rounded">
                                    {quantity}
                                </span>
                                <button
                                    onClick={handleIncrease}
                                    className="cursor-pointer px-3 py-2 rounded"
                                >
                                    +
                                </button>
                            </div>
                            {/* Add to Cart / Buy Buttons */}
                            <div className="mb-3">
                                <button
                                    onClick={handleAddToCart}
                                    className="btn mr-5 bg-black text-white w-32 rounded px-3 py-2 ml-5 mt-4"
                                >
                                    Add To Cart
                                </button>
                            </div>
                            <div className="flex md:flex cursor-pointer items-center justify-center mb-3 mt-4 mr-5">
                                <TiHeartFullOutline className="text-3xl" />
                                <p className="hover:text-red-700">Browse Wishlist</p>
                            </div>
                            <div className="flex md:flex cursor-pointer items-center justify-center ">
                                <MdCompareArrows className="text-3xl" />
                                <p className="hover:text-blue-600">Compare</p>
                            </div>
                        </div>
                        <button
                            onClick={handleBuyNow}
                            className="w-full btn btn-outline px-8 py-3 rounded hover:bg-black hover:text-white"
                        >
                            Buy It Now
                        </button>

                        {/* Extra info */}
                        <ul className="mt-6 text-sm space-y-2 px-5 md:px-0">
                            <li className="flex"><LiaShippingFastSolid className="mt-1 mr-2" />
                                Free Shipping & Exchanges</li>
                            <li className="flex text-left"><MdSecurity className="mt-1 mr-2" />
                                Flexible And Secure Payment, Pay On Delivery</li>
                            <li className="flex"><SlBadge className="mt-1 mr-2" />
                                600,000 Happy Customers
                            </li>
                        </ul>

                        <div className="border-t text-gray-200 mt-5"></div>

                        <div className="mt-4 text-center">
                            <p className="text-sm font-semibold mb-2">Guarantee Safe & Secure Checkout</p>
                            <div className="flex items-center justify-center space-x-4">
                                <Image src="/images/OlightAllImage/Group 21.png" alt="stripe" width={40} height={60} className="cursor-pointer" />
                                <Image src="/images/OlightAllImage/visa.png" alt="visa" width={40} height={40} className="cursor-pointer" />
                                <Image src="/images/OlightAllImage/rupay.png" alt="rupay" width={40} height={40} className="cursor-pointer" />
                                <Image src="/images/OlightAllImage/Group.png" alt="mastercard" width={40} height={40} className="cursor-pointer" />
                                <Image src="/images/OlightAllImage/masterCard.png" alt="amex" width={40} height={40} className="cursor-pointer" />
                                <Image src="/images/OlightAllImage/americanExpress.png" alt="amex" width={40} height={40} className="cursor-pointer" />
                            </div>
                        </div>
                        <div className="border-t text-gray-200 mt-5"></div>
                        <div className="text-left">
                            <p className="text-sm"><span className="text-gray-500">SKU:</span> durable-bronze-clock-01678109</p>
                            <p className="text-sm"><span className="text-gray-500">Category: </span>{product.category}</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="max-w-6xl mx-auto px-5 md:px-0">
                <p className="text-3xl font-semibold mb-2">Description </p>
                <p>{product.shortDescription}</p>
            </div>

            {/* Related Products */}
            <div className="w-screen relative left-1/2 -ml-[51vw] text-center mt-16 mb-24 bg-gray-100 px-5 py-5">
                <p className="text-3xl font-semibold mb-2">Related Product</p>
                <p className="mb-10">
                    Our Jewelry Is Made By The Finest Artists And Carefully Selected To Reflect Your Style And Personality
                </p>
                <div className="flex justify-center">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:w-[80vw]">
                        {relatedProducts.map((item) => (
                            <div
                                key={item.id}
                                className="p-4 rounded-2xl transition text-center"
                            >
                                <Image
                                    src={item.images?.[0] || "/images/placeholder.jpg"}
                                    alt={item.name}
                                    width={200}
                                    height={200}
                                    className="rounded-xl mx-auto bg-black"
                                />
                                <div className="md:h-[22vh]">
                                    <p className="text-sm text-gray-500 mt-3">{item.category}</p>
                                    <h3 className="font-semibold text-gray-800 mt-1">{item.name}</h3>
                                    <p className="text-sm text-yellow-500">
                                        ⭐⭐⭐⭐⭐ <span className="text-gray-600">(5 Reviews)</span>
                                    </p>
                                    <p className="font-bold text-gray-800 mt-1">{item.price}$</p>
                                </div>
                                <Link
                                    href={`/productdetails/${item.id}`}
                                    className="btn bg-black text-white px-4 py-2 rounded inline-block text-center text-sm"
                                >
                                    Details
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Page;
