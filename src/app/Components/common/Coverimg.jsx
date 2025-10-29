import React from 'react';
import Image from 'next/image';

const Coverimg = ({ imagePath, title, breadcrumb }) => {
    return (
        <div>
            <section className="relative w-full h-[60vh] flex items-center justify-center bg-gray-200 overflow-hidden">
                <Image
                    src={imagePath}
                    alt={title}
                    fill
                    priority
                    className="absolute inset-0 object-cover"
                />
                {/* Text Content */}
                <div className="relative z-10 text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-semibold mt-3">{title}</h1>
                    <p className="text-sm md:text-base text-gray-200 mt-2 tracking-wider">
                        {breadcrumb}
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Coverimg;