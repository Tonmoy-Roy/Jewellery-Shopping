import Button from "@/app/Components/common/Button";

export default function Content() {
  return (
    <div className="space-y-3">
      <p className="text-xs sm:text-sm md:text-base uppercase tracking-wide text-black">
      Olight collection
      </p>

      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight text-black">
       Shop the latest trends
      </h1>

      <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed">
    Exceptional Handcrafted Design to Enhance
the Magnificent Glow
      </p>

      <div className="pt-2">
        <Button variant="white"/>
      </div>
    </div>
  );
}
