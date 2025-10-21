import React from 'react'
import Link from "next/link";
export default function DesignersContent() {
  return (
   <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-20  z-10">
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-semibold mb-4">
            Jewellery from the <br /> world's finest designers
          </h2>
          <p className="text-sm sm:text-base md:text-lg mb-5 max-w-2xl">
            We believe in the power of jewelry — to tell a story, celebrate a
            moment, create or continue a tradition. There's a wonder in wearing
            something made from the earth. Each Olight piece is crafted with
            ethically sourced precious metals to reflect our commitment to
            human rights and environmental sustainability.
          </p>
          <Link href="/" className="underline font-bold">
            More about us
          </Link>
        </div>
  )
}
