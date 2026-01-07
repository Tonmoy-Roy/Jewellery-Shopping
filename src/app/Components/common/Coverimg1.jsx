import React from 'react';
import Image from 'next/image';

const Coverimg1 = ({ imagePath, title, breadcrumb }) => {
    return (
        <div>
            <section className="relative w-full h-[45vh] flex items-center bg-gray-200 overflow-hidden">
                <Image
                    src={imagePath}
                    alt={title}
                    fill
                    priority
                    className="absolute inset-0 object-cover"
                />
                <div className="absolute inset-0 bg-black/30"></div>
                {/* Text Content */}
                <div className="relative ml-5 z-10 text-white md:w-[41vw] text-center">
                    <h1 className="text-2xl md:text-3xl font-semibold mt-3 mb-5">{title}</h1>
                    <p className="text-sm md:text-base text-gray-200 tracking-wider">
                        {breadcrumb}
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Coverimg1;