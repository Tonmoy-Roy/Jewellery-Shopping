import React from "react";

import DesignersContent from "./Components/DesignersContent";
import DesignersImage from "./Components/DesignersImage";
import ProductMarque from "../../Shird/ProdectsMarque/ProductMarque";


export default function Designers() {
  return (
    <section className="">
      <div className="relative h-[400px] md:h-[450px] overflow-hidden">
        {/* image section */}
        <DesignersImage />

        {/* Centered text container */}
        <DesignersContent />
      </div>
      <ProductMarque/>
    </section>
  );
}
