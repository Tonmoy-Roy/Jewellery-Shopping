import React from "react";
import image from "../../../../../../public/images/OlightAllImage/1HomePage/24.jpg";
import Image from "next/image";

export default function ImageSection() {
  return (
    <div>
      <div>
        {" "}
        <Image
          src={image}
          alt="Hero Banner"
          fill
          priority
          className="object-cover "
        />
      </div>
    </div>
  );
}
