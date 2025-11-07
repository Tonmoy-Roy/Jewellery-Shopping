import React from 'react';
import Image from 'next/image';
import Button from './Button';

const Coverimg2 = ({ imagePath, title, breadcrumb, breadcrumb2 }) => {
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
                {/* Text Content */}
                <div className="relative ml-40 z-10 text-white md:w-[41vw] text-left">
                    <p>{breadcrumb}</p>
                    <h1 className="text-2xl md:text-3xl font-semibold mt-3 mb-5">{title}</h1>
                    <p className="text-sm md:text-base text-gray-200 tracking-wider mb-5">
                        {breadcrumb2}
                    </p>
                    <Button variant="white"></Button>
                </div>

            </section>
        </div>
    );
};

export default Coverimg2;