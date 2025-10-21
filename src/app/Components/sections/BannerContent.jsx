import React from "react";
import Button from "../common/Button";
export default function BannerContent() {
  return (
    <div className="relative z-10 text-center md:text-left px-6 sm:px-10 md:ml-20 max-w-xl text-white">
      <p className="text-sm md:text-base uppercase tracking-wide">
        purely hand-crafted
      </p>

      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 leading-tight">
        Charm For <br className="hidden sm:block" /> Your Everyday
      </h1>
      <p className="text-base sm:text-lg md:text-xl mb-6 leading-relaxed">
        Get lifted with The 21-day Facial Gua Sha{" "}
        <br className="hidden sm:block" /> challenge!
      </p>
      <Button />
    </div>
  );
}
