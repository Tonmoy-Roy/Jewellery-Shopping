import AllJewellery from "./Components/sections/allJewellery/AllJewellery";
import JewelryHomepage from "./Components/sections/Banner/Banner";
import ClientSection from "./Components/sections/ClientsSection/ClientSection";
import CollectionBanner from "./Components/sections/CollectionBanner/CollectionBanner";
import Designers from "./Components/sections/Designers/Designers";
import FeaturesSection from "./Components/sections/Features/FeaturesSection";
import LatestShop from "./Components/sections/latestShop/LatestShop";
import LuxuryNecklace from "./Components/sections/LuxuryNecklace/LuxuryNecklace";
// import Sellers from "./Components/sections/sellers/Sellers";
import WeekProducts from "./Components/sections/WeekProducts/WeekProducts";

export default function Home() {
  return (
    <div className="">
      <JewelryHomepage />
      <FeaturesSection />
      <Designers />
      {/* <Sellers/> */}
      <CollectionBanner/>
      <WeekProducts/>
      <LuxuryNecklace/>
      <AllJewellery/>
      <ClientSection/>
      <LatestShop/>
    </div>
  );
}
