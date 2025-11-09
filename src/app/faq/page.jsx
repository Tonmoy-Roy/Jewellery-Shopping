"use client";
import React, { useState } from 'react';
import faqData from "../constants/faqData";
import Footer from '../Components/layout/Footer';

const FaqItem = ({ item, isOpen, onToggle }) => {
    return (
        <div className="border-b border-gray-200 py-6">
            {/* Clickable Header */}
            <div
                className="flex justify-between items-center w-full cursor-pointer"
                onClick={onToggle} // Trigger the toggle function on click
            >
                <h3 className="text-lg font-medium text-gray-900">
                    {item.question}
                </h3>
                <span className="text-2xl text-gray-500 font-light">
                    {isOpen ? '−' : '+'}
                </span>
            </div>

            {isOpen && (
                <p className="mt-4 text-gray-600">
                    {item.answer}
                </p>
            )}
        </div>
    );
};

export default function page() {
    const [openItems, setOpenItems] = useState(new Set([1, 7]));

    const toggleItem = (id) => {
        setOpenItems(prevOpenItems => {
            const newOpenItems = new Set(prevOpenItems);
            if (newOpenItems.has(id)) {
                newOpenItems.delete(id);
            } else {
                newOpenItems.add(id);
            }
            return newOpenItems;
        });
    };
    return (
        <div className="max-w-7xl mx-auto p-8 md:p-16 bg-white">
            {/* --- FAQ Title --- */}
            <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-900 mb-12">
                Frequently Asked Questions.
            </h2>

            {/* --- FAQ Grid --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                {faqData.map(item => (
                    <FaqItem
                        key={item.id}
                        item={item}
                        isOpen={openItems.has(item.id)} // Pass down if it's open
                        onToggle={() => toggleItem(item.id)} // Pass down the toggle function
                    />
                ))}
            </div>
            <Footer></Footer>
        </div>
    );
}