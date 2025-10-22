import React from "react";
import Card from "./Components/Card";
import Header from "./Components/Header";
import { Products } from "@/app/constants/WeekProducts";
import Margin from "@/app/constants/margin";

export default function WeekProducts() {
  return (
   <Margin>
     <div>
      {" "}
      <main className="w-full bg-base-100 text-center">
        <Header />
        {/* ===== PRODUCTS ===== */}
     
          <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {Products.map((product) => (
              <div
                key={product.id}
                className="card bg-base-100 shadow-md hover:shadow-xl transition rounded-2xl"
              >
                <Card product={product} />
              </div>
            ))}
          </section>
         </main>
    </div>
   </Margin>
  );
}
