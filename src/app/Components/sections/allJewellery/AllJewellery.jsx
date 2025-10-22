"use client";

import AllJewelleryContent from "./Components/AllJewelleryContent";
import AllJewelleryImage from "./Components/AllJewelleryImage";

export default function AllJewellery() {
  return (
    <div className="flex flex-col w-full text-base-content">
      {/* Hero Section */}
      <section className="relative lg:h-[65vh] md:h-[50vh] h-[40vh]  flex items-center justify-center md:justify-end">
        {/* Background Image */}
        <div className="absolute inset-0">
          <AllJewelleryImage />
          {/* <div className="absolute inset-0 bg-black/30" /> optional overlay */}
        </div>

        {/* Text Content */}
        <div className="relative z-10 text-right px-6 sm:px-10 md:mr-20 max-w-xl text-white">
          <AllJewelleryContent />
        </div>
      </section>
    </div>
  );
}
