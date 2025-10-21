import Button from "@/app/Components/common/Button";
import Image from "next/image";
import React from "react";

export default function FutureCard() {
  return (
    <section className="grid md:grid-cols-2 bg-base-200">
      {/* Card 1 */}
      <div className="relative h-[300px] overflow-hidden">
        <Image
          src="/images/BennerImage/pendant.jpg"
          alt="Heart Pendant"
          fill
          className="object-cover scale-105 hover:scale-110 transition duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

        {/* Text container aligned left */}
        <div className="absolute bottom-10 left-6 md:left-10 text-left text-white z-10 max-w-[90%] md:max-w-sm">
          <p className="mb-1">Our earrings</p>
          <h2 className="text-2xl font-semibold mb-3">
            Add These to your style roster.
          </h2>
          <p className="text-gray-200 mb-5 text-sm sm:text-base">
            Grab the deal right now! you can get extra 15% off this season.
          </p>
          <Button variant="white" />
        </div>
      </div>

      {/* Card 2 */}
      <div className="relative h-[300px] overflow-hidden">
        <Image
          src="/images/BennerImage/image3.jpg"
          alt="Engagement Rings"
          fill
          className="object-cover scale-105 hover:scale-110 transition duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

        {/* Text container aligned left */}
        <div className="absolute bottom-10 left-6 md:left-10 text-left text-white z-10 max-w-[90%] md:max-w-sm">
          <h2 className="text-2xl font-semibold mb-3">
            Unique Engagement Rings
          </h2>
          <p className="text-gray-200 mb-5 text-sm sm:text-base">
            Precious personal designs, all crafted for your special moments.
          </p>
          <Button variant="white" />
        </div>
      </div>
    </section>
  );
}
