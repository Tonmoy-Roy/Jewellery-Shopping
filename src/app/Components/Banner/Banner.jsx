"use client";

import BannerContent from "../sections/BannerContent";
import BannerImage from "../sections/BannerImage";

export default function JewelryHomepage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-base-100 text-base-content">
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
