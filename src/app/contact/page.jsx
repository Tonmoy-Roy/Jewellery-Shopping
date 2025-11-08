"use client";
import React, { useState } from "react";
import Image from "next/image";
import { MapPin, Phone, Clock } from "lucide-react";
import stores from "../constants/stores"
import Footer from "../Components/layout/Footer";
import Coverimg1 from "../Components/common/Coverimg1";

export default function page() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        alert("Message sent successfully!");
    };

    return (
        <section className="max-w-6xl mx-auto px-6">
            <div className="w-screen relative left-1/2 -ml-[51vw] mb-20">
                <Coverimg1
                    imagePath="/images/OlightAllImage/4ProductPage/7.jpg"
                    title={
                        <>
                            Introducing <br />
                            The New Era of Olight
                        </>
                    }
                    breadcrumb="Olight is building the world’s most progressive jewellery platform – a place connecting the dots between old school craftsmanship and new ways of thinking. Through our online platform, we connect you with the most creative independent jewellers from around the globe."
                />
            </div>
            {/* === Get In Touch Header === */}
            <div className="text-center mb-10">
                <h2 className="text-3xl font-semibold mb-2">Get In Touch</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    We are exactly what you are looking for. Yes, we are an FSSAI certified online cake
                    and bakery company that specializes in delivering absolutely lip-smacking delicacies.
                </p>
            </div>

            {/* === Info Section === */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center border-y py-8 mb-10">
                {/* Address */}
                <div className="space-y-2">
                    <div className="flex justify-center">
                        <MapPin className="w-6 h-6 text-gray-700" />
                    </div>
                    <h3 className="font-semibold text-lg">Address</h3>
                    <p className="text-gray-600 text-sm">
                        Head Office: 785 15th Street, Office 478<br />
                        Berlin, DE 81566
                    </p>
                </div>

                {/* Contact */}
                <div className="space-y-2">
                    <div className="flex justify-center">
                        <Phone className="w-6 h-6 text-gray-700" />
                    </div>
                    <h3 className="font-semibold text-lg">Contact Us</h3>
                    <p className="text-gray-600 text-sm">
                        Mobile: (+084) 1120-567-990<br />
                        Hotline: 1080 – 1102<br />
                        Mail: <a href="mailto:info@jewelry.com" className="text-blue-600 hover:underline">
                            info@jewelry.com
                        </a>
                    </p>
                </div>

                {/* Hours */}
                <div className="space-y-2">
                    <div className="flex justify-center">
                        <Clock className="w-6 h-6 text-gray-700" />
                    </div>
                    <h3 className="font-semibold text-lg">Hour Of Operation</h3>
                    <p className="text-gray-600 text-sm">
                        Mon–Sat: 9:00 AM – 8:00 PM CST<br />
                        Sundays: 10:00 AM – 6:00 PM CST
                    </p>
                </div>
            </div>

            {/* === Map Image === */}
            <div className="rounded-2xl overflow-hidden mb-10">
                <Image
                    src="https://images.pexels.com/photos/269850/pexels-photo-269850.jpeg"
                    alt="Map of Australia"
                    width={1200}
                    height={600}
                    className="w-full h-auto object-cover"
                />
            </div>

            {/* === Send Message Form === */}
            <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-2xl font-semibold mb-6">Send A Message</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-black"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-black"
                            required
                        />
                    </div>

                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-black"
                    />

                    <textarea
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        className="border rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-black"
                        required
                    ></textarea>

                    <button
                        type="submit"
                        className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition w-full md:w-auto"
                    >
                        Send Message
                    </button>
                </form>
            </div>
            <section className="max-w-6xl mx-auto px-6 py-12">
                <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
                    Our Stores
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stores.map((store, index) => (
                        <div
                            key={index}
                            className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition duration-300"
                        >
                            <Image
                                src={store.img}
                                alt={store.name}
                                width={500}
                                height={300}
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-5 space-y-2 text-sm text-gray-700">
                                <h3 className="text-lg font-semibold">{store.name}</h3>
                                <p>{store.address}</p>
                                <p>Hotline: {store.hotline}</p>
                                <p className="text-blue-600">{store.email}</p>
                                <div className="pt-2">
                                    <h4 className="font-semibold">Working Hours</h4>
                                    <p>Open: 8:00AM – Close: 18:00PM</p>
                                    <p>Saturday – Sunday: Close</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <Footer></Footer>
        </section>
    );
}
