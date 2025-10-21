import designersImage from "../../../../../../public/images/OlightAllImage/1HomePage/4.png";
import Image from "next/image";
import React from "react";

export default function DesignersImage() {
  return (
    <div>
      {" "}
      <Image
        src={designersImage}
        alt="Heart Pendant"
        fill
        className="object-cover scale-105 hover:scale-110 transition duration-500"
      />
    </div>
  );
}
