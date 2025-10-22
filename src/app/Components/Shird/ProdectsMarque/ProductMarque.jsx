"use client";

import React from "react";
import Marquee from "react-fast-marquee";

import { productsList } from "@/app/constants/Marque";
import MarqueLIst from "./MarqueLIst";


export default function ProductMarque() {
  return (
    <section className="lg:my-8 md:my-6 my-4">
      <Marquee
        gradient={false}
        speed={60}
        pauseOnHover={true}
        className="space-x-10"
      >
        {productsList.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center justify-center "
          >
            <MarqueLIst product={product} />
          </div>
        ))}
      </Marquee>
    </section>
  );
}
