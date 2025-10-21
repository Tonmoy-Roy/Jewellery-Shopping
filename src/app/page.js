import JewelryHomepage from "./Components/sections/Banner/Banner";
import CollectionBanner from "./Components/sections/CollectionBanner/CollectionBanner";
import Designers from "./Components/sections/Designers/Designers";
import FeaturesSection from "./Components/sections/Features/FeaturesSection";
import LuxuryNecklace from "./Components/sections/LuxuryNecklace/LuxuryNecklace";
import Sellers from "./Components/sections/sellers/Sellers";
import WeekProducts from "./Components/sections/WeekProducts/WeekProducts";

export default function Home() {
  return (
    <div className="">
      <JewelryHomepage />
      <FeaturesSection />
      <Designers />
      <Sellers/>
      <CollectionBanner/>
      <WeekProducts/>
      <LuxuryNecklace/>
    </div>
  );
}
