import { collections } from "@/app/constants/collections";

import React from "react";
import CollectionBannerCard from "./Components/CollectionBannerCard";
import BelowCard from "./Components/BelowCard";

export default function CollectionBanner() {
  return (
    <div>
      {" "}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mb-10 ">
        {collections.map((col, idx) => (
          <div key={idx} className="relative group  overflow-hidden">
            <CollectionBannerCard col={col} />
          </div>
        ))}
      </section>
      <BelowCard />
    </div>
  );
}
