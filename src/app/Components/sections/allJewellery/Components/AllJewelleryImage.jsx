import Image from "next/image";
import image from "../../../../../../public/images/OlightAllImage/1HomePage/23.jpg";

export default function AllJewelleryImage() {
  return (
    <div>
      <Image
        src={image}
        alt="Hero Banner"
        fill
        priority
        className="object-cover "
      />
    </div>
  );
}
