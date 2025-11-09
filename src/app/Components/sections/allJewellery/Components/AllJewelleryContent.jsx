import Button from "@/app/Components/common/Button";
import React from "react";

export default function AllJewelleryContent() {
  return (
    <div className="space-y-3 text-left">
      <p className="text-xs  sm:text-sm md:text-base uppercase tracking-wide text-black">
        purely hand-crafted
      </p>

      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold  leading-tight text-black md:w-[22vw]">
        All of our jewellery is handmade.
      </h1>

      <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed">
        A gift they'll treasure forever, Olight created diamonds jewelry
        combines precious metals with laboratory grown diamonds to form
        captivating collections.
      </p>

      <div className="pt-2">
        <Button black="black" />
      </div>
    </div>
  );
}
