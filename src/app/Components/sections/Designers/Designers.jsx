import React from "react";

import DesignersContent from "./Components/DesignersContent";
import DesignersImage from "./Components/DesignersImage";

export default function Designers() {
  return (
    <section className="bg-base-200">
      <div className="relative h-[400px] md:h-[450px] overflow-hidden">
        {/* image section */}
        <DesignersImage />

        {/* Centered text container */}
        <DesignersContent />
      </div>
    </section>
  );
}
