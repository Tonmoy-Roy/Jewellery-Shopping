"use client";

import BannerContent from "./Components/BannerContent";
import BannerImage from "./Components/BannerImage";


export default function JewelryHomepage() {
  return (
    <div className="flex flex-col w-full -mb-32 500 lg:-mb-16 min-h-screen   text-base-content">
      {/* Hero Section */}
      <section className="relative h-[80vh] md:h-[90vh] flex items-center justify-center md:justify-start">
        <div className="absolute inset-0">
          <BannerImage />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <BannerContent />
      </section>
    </div>
  );
}
