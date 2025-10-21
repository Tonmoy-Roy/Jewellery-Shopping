import JewelryHomepage from "./Components/sections/Banner/Banner";
import Designers from "./Components/sections/Designers/Designers";
import FeaturesSection from "./Components/sections/Features/FeaturesSection";
import Sellers from "./Components/sections/sellers/Sellers";

export default function Home() {
  return (
    <div className="">
      <JewelryHomepage />
      <FeaturesSection />
      <Designers />
      <Sellers/>
    </div>
  );
}
