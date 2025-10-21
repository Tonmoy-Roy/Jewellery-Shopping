import Button from "@/app/Components/common/Button";
import Image from "next/image";
export default function Card({product}) {
  return (
    <div>
      <Image
        src={product.img}
        alt={product.title}
        fill
        className="object-cover"
      />
      <div className="absolute bottom-10 space-y-2 left-6 md:left-10 text-left z-10 max-w-[30%] ">
        <h2 className="">{product.title}</h2>
        <h3 className=" text-3xl">{product.category}</h3>
        <p className=" text-sm sm:text-base">{product.rating}</p>
        <Button variant="white" />
      </div>
    </div>
  );
}
