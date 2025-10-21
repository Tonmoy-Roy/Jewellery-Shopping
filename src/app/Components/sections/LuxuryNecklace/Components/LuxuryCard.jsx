import { luxuryNecklace } from "@/app/constants/LuxuryNecklace";
import Card from "./Card";

export default function LuxuryCard() {
  return (
    <section className="grid md:grid-cols-2 bg-base-200">
      {luxuryNecklace.map((product) => (
        <div key={product.id} className="relative h-[300px] overflow-hidden">
          <Card product={product} />
        </div>
      ))}
    </section>
  );
}
