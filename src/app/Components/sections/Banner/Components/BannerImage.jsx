import React from "react";
import Image from "next/image";
import BannerImage1 from "../../../../../../public/images/OlightAllImage/1HomePage/1.png";
export default function BannerImage() {
  return (
    <Image
      src={BannerImage1}
      alt="Hero Banner"
      fill
      priority
      className="object-cover "
    />
  );
}
