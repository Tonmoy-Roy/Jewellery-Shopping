"use client";
import React, { useState } from "react";
import { FOOTER_LINKS } from "../../constants/footerLinks";
import { COMPANY_INFO } from "../../constants/companyInfo";
const Footer = () => {
    const [email, setEmail] = useState("");
    const [agree, setAgree] = useState(false);

    return (
        <footer className="bg-white border-t border-gray-200 mt-16">
            {/* Newsletter Section */}
            <div className="text-center py-10 px-4 border-gray-200">
                <h2 className="text-xl font-semibold mb-2">
                    {COMPANY_INFO.newsletterTitle}
                </h2>
                <p className="text-gray-500 text-sm mb-6 max-w-xl mx-auto">
                    {COMPANY_INFO.newsletterText}
                </p>

                <div className="flex justify-center gap-2 max-w-md mx-auto">
                    <input
                        type="email"
                        placeholder="Enter your email..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1 border rounded-md px-3 py-2 text-sm focus:outline-none"
                    />
                    <button
                        disabled={!agree || !email}
                        className={`px-5 py-2 rounded-md text-white ${agree && email
                                ? "bg-black hover:bg-gray-800"
                                : "bg-gray-400 cursor-not-allowed"
                            }`}
                    >
                        Subscribe
                    </button>
                </div>

                <div className="flex justify-center mt-4 text-sm">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="checkbox"
                            checked={agree}
                            onChange={(e) => setAgree(e.target.checked)}
                        />
                        <span className="text-gray-500">
                            I agree to the privacy policy
                        </span>
                    </label>
                </div>
            </div>

            {/* Footer Links Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 px-8 md:px-16">
                {/* Logo + About */}
                <div>
                    <div className="flex">
                        <img
                            src="/images/SVG/logo_icon.svg"
                            alt="Logo"
                            className="mb-3 mr-2"
                        />
                        <p className="mt-2">OLIGHT</p>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        {COMPANY_INFO.description}
                    </p>
                </div>

                {/* Dynamic Footer Columns */}
                {FOOTER_LINKS.map((section) => (
                    <div key={section.title}>
                        <h3 className="font-semibold mb-3">{section.title}</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            {section.links.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.path}
                                        className="hover:text-amber-600 transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-200 text-center py-5 text-sm text-gray-500">
                Copyright © {new Date().getFullYear()}{" "}
                <span className="text-amber-600 font-semibold">
                    {COMPANY_INFO.name}
                </span>
                . All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
