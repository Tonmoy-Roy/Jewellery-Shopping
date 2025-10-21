export default function Button({
  children = "Shop Now",
  type = "button",
  onClick,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="
        rounded-xl 
        font-semibold 
        px-4 py-2 
        sm:px-5 sm:py-2.5 
        md:px-6 md:py-3 
        lg:px-8 lg:py-3.5 
        outline 
          "
    >
      {children}
    </button>
  );
}
