import React from "react";
import Image from "next/image";
export default function BannerImage() {
  return (
    <Image
      src="/images/BennerImage/hero.jpg"
      alt="Hero Banner"
      fill
      priority
      className="object-cover "
    />
  );
}
