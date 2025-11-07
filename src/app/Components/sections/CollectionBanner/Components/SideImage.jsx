import React from 'react';
import { collections } from "@/app/constants/collections";
import CollectionBannerCard from './CollectionBannerCard';

const SideImage = () => {
    return (
        <div>
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                {collections.map((col, idx) => (
                    <div key={idx} className="relative group  overflow-hidden">
                        <CollectionBannerCard col={col} />
                    </div>
                ))}
            </section>
        </div>
    );
};

export default SideImage;