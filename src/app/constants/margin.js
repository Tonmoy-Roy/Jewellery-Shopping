import React from "react";

export default function Margin({ children, className = "" }) {
  return (
    <div className={`px-4 md:px-10 mb-10 ${className}`}>
      {children}
    </div>
  );
}
