"use client";
import ImageSection from "./Components/ImageSection";
import Content from "./Components/Content";

export default function LatestShop() {
  return (
    <div className="flex flex-col mb-6  w-full text-base-content">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-[30vh] md:h-[40vh] lg:h-[50vh]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageSection />
        </div>

        {/* Text Content */}
        <div className="relative z-10 text-center px-6 sm:px-10 max-w-xl text-white">
          <Content />
        </div>
      </section>
    </div>
  );
}
